// ============================================================
// 邀請碼系統 (Invitation Code System)
// ============================================================
let currentInviteCode = '';

function generateInviteCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  currentInviteCode = code;
  document.getElementById('invite-code').textContent = code;

  // Store in game system
  if (!Game.invites) Game.invites = [];
  Game.invites.push({ code, time: Date.now(), players: 1 });
  localStorage.setItem('dbInvites', JSON.stringify(Game.invites));

  return code;
}

function copyInviteCode() {
  if (!currentInviteCode) generateInviteCode();
  const code = document.getElementById('invite-code').textContent;
  if (code && code !== '------') {
    navigator.clipboard.writeText(code).then(() => {
      showToast('✅ 已複製邀請碼：' + code);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✅ 已複製邀請碼：' + code);
    });
  }
}

function joinGame() {
  const code = document.getElementById('join-code-input').value.toUpperCase().trim();
  const name = document.getElementById('player-name-input').value.trim() || '小糞鬥士';

  if (code.length < 4) {
    showToast('⚠️ 請輸入有效的邀請碼（6位）');
    return;
  }

  // Validate code exists
  const found = Game.invites.find(i => i.code === code);
  if (!found) {
    showToast('🔍 找不到該房間，請檢查邀請碼');
    return;
  }

  if (found.players >= 4) {
    showToast('👥 房間已滿（最多4人）');
    return;
  }

  found.players++;
  localStorage.setItem('dbInvites', JSON.stringify(Game.invites));

  // Add player
  const playerNum = found.players;
  const emojis = ['🐞', '🐛', '🦗', '🦋'];
  Game.players.push({
    id: 'p' + (playerNum + 1),
    name: name,
    emoji: emojis[playerNum] || '🐞',
    ready: true
  });

  showToast(`🎉 ${name} 已加入房間！ (${found.players}/4)`);

  // Update player list
  updatePlayerList(Game.players);

  // Show game screen after short delay
  setTimeout(() => {
    showScreen('game');
    Game.resizeCanvas();
    loadMode('egg', Game.players);
  }, 1000);
}

function updatePlayerList(players) {
  const list = document.getElementById('player-list');
  if (!list) return;
  const emojis = ['🐞', '🐛', '🦗', '🦋'];
  let html = '';
  for (let i = 0; i < 4; i++) {
    if (i < players.length) {
      html += `<div class="player-slot active"><span>${emojis[i] || '🐞'} ${players[i].name}</span><span class="ready-badge">✅ 已準備</span></div>`;
    } else {
      html += `<div class="player-slot"><span>⬜ 等待玩家${i+1}...</span></div>`;
    }
  }
  list.innerHTML = html;
}

// ============================================================
// 彩蛋積分與抽獎系統 (Egg Points & Lottery System)
// ============================================================
const LOTTERY_PRIZES = [
  { name: '💎 傳說糞金龜造型', type: 'legendary', weight: 2, icon: '💎' },
  { name: '🌟 稀有翅膀特效', type: 'rare', weight: 8, icon: '🌟' },
  { name: '🌈 彩色屎球外觀', type: 'rare', weight: 10, icon: '🌈' },
  { name: '🎀 可愛蝴蝶結裝飾', type: 'uncommon', weight: 20, icon: '🎀' },
  { name: '🍀 幸運草背景', type: 'common', weight: 30, icon: '🍀' },
  { name: '🎈 氣球道具', type: 'common', weight: 30, icon: '🎈' }
];

let lotterySpinning = false;

function spinLottery() {
  if (lotterySpinning) return;

  if (Game.eggs < 1 || Game.points < 100) {
    showToast('😅 需要 1 顆彩蛋 + 100 積分才能抽獎！');
    return;
  }

  lotterySpinning = true;
  Game.addEggs(-1);
  Game.addPoints(-100);

  const eggRow = document.getElementById('egg-row');
  const resultDiv = document.getElementById('lottery-result');
  resultDiv.classList.add('hidden');
  eggRow.classList.add('spinning');

  // Simulate spinning sound
  playSuccessSound(); // reuse

  // Weighted random selection
  const totalWeight = LOTTERY_PRIZES.reduce((s, p) => s + p.weight, 0);
  let roll = Math.random() * totalWeight;
  let selected = LOTTERY_PRIZES[0];
  for (const prize of LOTTERY_PRIZES) {
    roll -= prize.weight;
    if (roll <= 0) { selected = prize; break; }
  }

  // Animate eggs
  const eggItems = eggRow.querySelectorAll('.egg-item');
  const emojis = ['🥚', '🥚', '🥚'];

  let spins = 0;
  const spinInterval = setInterval(() => {
    for (let i = 0; i < eggItems.length; i++) {
      eggItems[i].textContent = ['🥚', '🌟', '💎', '🎀', '🌈', '🍀'][Math.floor(Math.random() * 6)];
    }
    spins++;
    if (spins > 15) {
      clearInterval(spinInterval);
      eggRow.classList.remove('spinning');

      // Show result
      for (let i = 0; i < eggItems.length; i++) {
        eggItems[i].textContent = i === 1 ? selected.icon : '🥚';
      }

      resultDiv.textContent = '🎉 ' + selected.name + ' 🎉';
      resultDiv.className = 'lottery-result ' + selected.type;
      resultDiv.classList.remove('hidden');

      Game.addToInventory(selected);
      spawnConfetti();
      lotterySpinning = false;

      // Special effects for legendary
      if (selected.type === 'legendary') {
        showToast('💎💎💎 傳說級獎品！太幸運了！');
        Game.addEggs(3); // Bonus eggs for legendary
        spawnConfetti();
        setTimeout(spawnConfetti, 500);
        setTimeout(spawnConfetti, 1000);
      }
    }
  }, 100);
}

// ============================================================
// 多人連線系統 (Multiplayer via WebRTC - signaling simplified)
// ============================================================
let peerConnections = {};
let localStream = null;
let dataChannels = {};

async function setupMultiplayer() {
  // For this prototype, we use local multiplayer (same device)
  // In production, this would use WebRTC with a signaling server
  showToast('👥 目前支援同裝置多人 (WASD + 方向鍵 + IJKL)');
}

// ============================================================
// Toast 通知系統
// ============================================================
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0,0,0,0.8)',
    color: '#fff',
    padding: '15px 30px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '700',
    zIndex: '2000',
    animation: 'popIn 0.3s ease',
    fontFamily: "'Noto Sans TC', sans-serif",
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  });
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================================================
// 教育內容 (Educational Content About Dung Beetles)
// ============================================================
const DUNG_BEETLE_FACTS = [
  { stage: 'egg', fact: '🥚 糞金龜媽媽會把卵產在糞球裡，寶寶出生就有食物吃！' },
  { stage: 'egg', fact: '🥚 一隻糞金龜一次可以產下 20-30 顆卵！' },
  { stage: 'larva', fact: '🐛 糞金龜幼蟲以糞便為食，是自然界的小清道夫！' },
  { stage: 'larva', fact: '🐛 幼蟲時期會把糞球滾得圓圓的，方便搬運！' },
  { stage: 'pupa', fact: '🫘 蛹期是糞金龜最脆弱的時期，需要安全溫暖的家。' },
  { stage: 'pupa', fact: '🫘 在蛹裡，幼蟲的身體會完全重組，變成成蟲！' },
  { stage: 'adult', fact: '🐞 成蟲糞金龜有強壯的翅膀，可以飛很遠的距離！' },
  { stage: 'adult', fact: '🐞 糞金龜是地球上最強壯的昆蟲之一，能推動自身體重 1000 倍的糞球！' }
];

function showRandomFact(stage) {
  const facts = DUNG_BEETLE_FACTS.filter(f => f.stage === stage);
  if (facts.length > 0) {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    showToast(fact.fact);
  }
}

// ============================================================
// Screen transition hooks (called from HTML onclick)
// ============================================================
function onShowRoom() {
  if (!currentInviteCode) generateInviteCode();
  updatePlayerList(Game.players);
}

function onShowLottery() {
  Game.updateStats();
}

console.log('🐞 屎殼郎大冒險 loaded!');
console.log('🎮 遊戲模式: 卵排列 | 滾屎球 | 蛹之家 | 成蟲旅行');
console.log('👥 支援最多 4 人同機遊玩');
console.log('🎁 彩蛋抽獎系統已就緒');