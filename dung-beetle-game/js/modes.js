// ============================================================
// MODE 1: 合作滾屎球 (Cooperative Dung Ball Rolling)
// ============================================================
const BallRolling = {
  init(canvas, ctx, players) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.players = players;
    this.running = true;
    this.score = 0;
    this.timeLeft = 60;
    this.ballX = canvas.width / 2;
    this.ballY = 200;
    this.ballRadius = 50;
    this.ballAngle = 0;
    this.targetX = canvas.width / 2;
    this.targetY = canvas.height - 100;
    this.obstacles = [];
    this.particles = [];
    this.keys = {};
    this.stageProgress = 0;
    this.ballScale = 1;

    for (let i = 0; i < 8; i++) {
      this.obstacles.push({
        x: 100 + Math.random() * (canvas.width - 200),
        y: 250 + Math.random() * (canvas.height - 350),
        r: 15 + Math.random() * 25,
        type: Math.random() > 0.5 ? 'rock' : 'stick'
      });
    }

    document.addEventListener('keydown', (e) => { this.keys[e.key] = true; });
    document.addEventListener('keyup', (e) => { this.keys[e.key] = false; });

    this.startTimer();
    this.loop();
  },

  startTimer() {
    this.timer = setInterval(() => {
      this.timeLeft--;
      document.getElementById('hud-timer').textContent = this.timeLeft;
      if (this.timeLeft <= 0) this.complete(false);
    }, 1000);
  },

  loop() {
    if (!this.running || !Game.gameRunning) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  },

  update() {
    let pushX = 0, pushY = 0, pushCount = 0;

    const keyMap = [
      { left: 'a', right: 'd', up: 'w', down: 's' },
      { left: 'ArrowLeft', right: 'ArrowRight', up: 'ArrowUp', down: 'ArrowDown' },
      { left: 'j', right: 'l', up: 'i', down: 'k' },
      { left: 'numpad4', right: 'numpad6', up: 'numpad8', down: 'numpad5' }
    ];

    for (let p = 0; p < Math.min(this.players.length, 4); p++) {
      const k = keyMap[p];
      if (this.keys[k.left]) { pushX -= 1.5; pushCount++; }
      if (this.keys[k.right]) { pushX += 1.5; pushCount++; }
      if (this.keys[k.up]) { pushY -= 1.5; pushCount++; }
      if (this.keys[k.down]) { pushY += 1.5; pushCount++; }
    }

    if (pushCount > 0) {
      const len = Math.sqrt(pushX * pushX + pushY * pushY);
      if (len > 0) {
        const speed = Math.min(3 + pushCount * 0.5, 6);
        this.ballX += (pushX / len) * speed;
        this.ballY += (pushY / len) * speed;
        this.ballAngle += speed * 0.05;
        this.ballScale = 1 + Math.sin(Date.now() * 0.01) * 0.02;
        this.score += pushCount * 0.1;

        for (let i = 0; i < 2; i++) {
          this.particles.push({
            x: this.ballX + (Math.random() - 0.5) * 40,
            y: this.ballY + this.ballRadius,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 2 - 1,
            life: 1,
            size: 4 + Math.random() * 4,
            color: Math.random() > 0.5 ? '#8B4513' : '#A0522D'
          });
        }
      }
    }

    // Push away from obstacles
    for (const obs of this.obstacles) {
      const dx = this.ballX - obs.x;
      const dy = this.ballY - obs.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const minDist = this.ballRadius + obs.r;
      if (dist < minDist && dist > 0) {
        this.ballX += (dx / dist) * (minDist - dist) * 0.5;
        this.ballY += (dy / dist) * (minDist - dist) * 0.5;
      }
    }

    // Boundaries
    this.ballX = Math.max(this.ballRadius, Math.min(this.canvas.width - this.ballRadius, this.ballX));
    this.ballY = Math.max(this.ballRadius, Math.min(this.canvas.height - this.ballRadius, this.ballY));

    // Progress toward goal
    const dx = this.ballX - this.targetX;
    const dy = this.ballY - this.targetY;
    const distToGoal = Math.sqrt(dx * dx + dy * dy);
    this.stageProgress = Math.max(0, 1 - distToGoal / 500);

    if (distToGoal < 60) {
      this.complete(true);
    }

    // Update particles
    this.particles = this.particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.life -= 0.03;
      return p.life > 0;
    });

    document.getElementById('hud-score').textContent = Math.floor(this.score);
  },

  draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background - sunny meadow
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#87CEEB');
    grad.addColorStop(0.6, '#90EE90');
    grad.addColorStop(1, '#228B22');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Clouds
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    for (let i = 0; i < 3; i++) {
      const cx = (i * 300 + Date.now() * 0.01) % (w + 200) - 100;
      const cy = 50 + i * 30;
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.arc(cx + 35, cy - 10, 30, 0, Math.PI * 2);
      ctx.arc(cx + 70, cy, 35, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ground
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, h - 30, w, 30);
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, h - 35, w, 10);

    // Goal area
    ctx.beginPath();
    ctx.arc(this.targetX, this.targetY, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 10]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#FFD700';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏁 終點', this.targetX, this.targetY - 60);

    // Obstacles
    for (const obs of this.obstacles) {
      if (obs.type === 'rock') {
        ctx.fillStyle = '#808080';
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#909090';
        ctx.beginPath();
        ctx.arc(obs.x - 5, obs.y - 5, obs.r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(obs.x - 3, obs.y - obs.r, 6, obs.r * 2);
        ctx.fillStyle = '#228B22';
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(obs.x + (i - 1) * 8, obs.y - obs.r - 5, 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Particle trails
    for (const p of this.particles) {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Dung ball
    const bx = this.ballX, by = this.ballY, br = this.ballRadius * this.ballScale;
    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(this.ballAngle);

    // Ball body
    const bg = ctx.createRadialGradient(-10, -10, 5, 0, 0, br);
    bg.addColorStop(0, '#8B4513');
    bg.addColorStop(0.6, '#654321');
    bg.addColorStop(1, '#3E2723');
    ctx.fillStyle = bg;
    ctx.beginPath();
    ctx.arc(0, 0, br, 0, Math.PI * 2);
    ctx.fill();

    // Texture dots
    ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + this.ballAngle * 0.5;
      const r = br * (0.3 + Math.random() * 0.4);
      ctx.beginPath();
      ctx.arc(Math.cos(a) * r, Math.sin(a) * r, 3 + Math.random() * 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Shine
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath();
    ctx.ellipse(-br * 0.25, -br * 0.25, br * 0.3, br * 0.2, -0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Players around ball
    const playerPositions = [
      { x: bx - 60, y: by - 30 },
      { x: bx + 60, y: by - 30 },
      { x: bx - 50, y: by + 50 },
      { x: bx + 50, y: by + 50 }
    ];

    ctx.font = '30px sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < Math.min(this.players.length, 4); i++) {
      const pp = playerPositions[i];
      ctx.fillText('🐛', pp.x, pp.y);
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#fff';
      ctx.fillText(this.players[i].name, pp.x, pp.y + 20);
      ctx.font = '30px sans-serif';
    }

    // UI - push hints
    if (this.players.length === 1) {
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🎮 WASD 移動屎球', w / 2, 30);
      ctx.fillText('👥 多人模式: WASD / 方向鍵 / IJKL', w / 2, 55);
    }

    // Progress bar
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(20, h - 60, 200, 20);
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(20, h - 60, 200 * this.stageProgress, 20);
    ctx.fillStyle = '#fff';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(Math.floor(this.stageProgress * 100) + '%', 120, h - 46);
  },

  complete(success) {
    this.running = false;
    clearInterval(this.timer);
    if (success) {
      const bonus = Math.floor(this.score) + 50;
      Game.addPoints(bonus);
      Game.addEggs(1);
      showModeComplete('🎉 屎球送達！', bonus, '獲得 1 顆彩蛋 + ' + bonus + ' 積分');
    } else {
      showModeComplete('⏰ 時間到！', Math.floor(this.score), '獲得 ' + Math.floor(this.score) + ' 積分');
    }
  }
};

// ============================================================
// MODE 2: 卵排列遊戲 (Egg Arrangement Puzzle)
// ============================================================
const EggPuzzle = {
  init(canvas, ctx, players) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.players = players;
    this.running = true;
    this.score = 0;
    this.gridSize = 6;
    this.cellSize = 70;
    this.grid = [];
    this.selected = null;
    this.eggTypes = ['🥚', '🥚', '🥚', '🥚', '🥚', '🥚'];
    this.colors = ['#FFD93D', '#6BCB77', '#FF6B6B', '#4D96FF', '#9B59B6', '#FF944D'];
    this.animating = false;
    this.combo = 0;
    this.movesLeft = 30;

    const offsetX = (canvas.width - this.gridSize * this.cellSize) / 2;
    const offsetY = (canvas.height - this.gridSize * this.cellSize) / 2;

    for (let r = 0; r < this.gridSize; r++) {
      this.grid[r] = [];
      for (let c = 0; c < this.gridSize; c++) {
        this.grid[r][c] = {
          type: Math.floor(Math.random() * 4),
          x: offsetX + c * this.cellSize,
          y: offsetY + r * this.cellSize,
          scale: 1,
          opacity: 1
        };
      }
    }

    this.ensureMatchable();

    canvas.onclick = (e) => this.handleClick(e);
    this.loop();
    this.updateMovesDisplay();
  },

  ensureMatchable() {
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        let t = this.grid[r][c].type;
        while (
          (r >= 2 && this.grid[r-1][c].type === t && this.grid[r-2][c].type === t) ||
          (c >= 2 && this.grid[r][c-1].type === t && this.grid[r][c-2].type === t)
        ) {
          t = (t + 1) % 4;
        }
        this.grid[r][c].type = t;
      }
    }
  },

  handleClick(e) {
    if (this.animating || !this.running) return;
    const rect = this.canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (this.canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (this.canvas.height / rect.height);

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = this.grid[r][c];
        if (mx >= cell.x && mx <= cell.x + this.cellSize &&
            my >= cell.y && my <= cell.y + this.cellSize) {
          this.selectCell(r, c);
          return;
        }
      }
    }
  },

  selectCell(r, c) {
    if (!this.selected) {
      this.selected = { r, c };
      this.grid[r][c].scale = 1.15;
    } else {
      const sr = this.selected.r, sc = this.selected.c;
      const dr = Math.abs(sr - r), dc = Math.abs(sc - c);
      if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
        this.swapCells(sr, sc, r, c);
      }
      this.grid[sr][sc].scale = 1;
      this.selected = null;
    }
  },

  async swapCells(r1, c1, r2, c2) {
    this.animating = true;
    this.movesLeft--;
    this.updateMovesDisplay();

    const temp = this.grid[r1][c1].type;
    this.grid[r1][c1].type = this.grid[r2][c2].type;
    this.grid[r2][c2].type = temp;

    const matches = this.findMatches();
    if (matches.length === 0) {
      const temp2 = this.grid[r1][c1].type;
      this.grid[r1][c1].type = this.grid[r2][c2].type;
      this.grid[r2][c2].type = temp2;
      this.movesLeft++;
      this.updateMovesDisplay();
      this.animating = false;
      return;
    }

    await this.processMatches(matches);

    if (this.movesLeft <= 0) {
      this.complete();
    }
    this.animating = false;
  },

  findMatches() {
    const matched = new Set();
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize - 2; c++) {
        if (this.grid[r][c].type === this.grid[r][c+1].type &&
            this.grid[r][c].type === this.grid[r][c+2].type) {
          matched.add(`${r},${c}`);
          matched.add(`${r},${c+1}`);
          matched.add(`${r},${c+2}`);
        }
      }
    }
    for (let c = 0; c < this.gridSize; c++) {
      for (let r = 0; r < this.gridSize - 2; r++) {
        if (this.grid[r][c].type === this.grid[r+1][c].type &&
            this.grid[r][c].type === this.grid[r+2][c].type) {
          matched.add(`${r},${c}`);
          matched.add(`${r+1},${c}`);
          matched.add(`${r+2},${c}`);
        }
      }
    }
    return [...matched].map(s => {
      const [r, c] = s.split(',').map(Number);
      return { r, c };
    });
  },

  async processMatches(matches) {
    this.combo++;
    const bonus = matches.length * 10 * this.combo;
    this.score += bonus;

    for (const m of matches) {
      this.grid[m.r][m.c].opacity = 0;
      this.grid[m.r][m.c].scale = 1.5;
    }

    await this.sleep(300);

    // Gravity - drop cells down
    for (let c = 0; c < this.gridSize; c++) {
      for (let r = this.gridSize - 1; r >= 0; r--) {
        if (this.grid[r][c].opacity === 0) {
          for (let r2 = r - 1; r2 >= 0; r2--) {
            if (this.grid[r2][c].opacity > 0) {
              this.grid[r][c].type = this.grid[r2][c].type;
              this.grid[r][c].opacity = 1;
              this.grid[r][c].scale = 0.5;
              this.grid[r2][c].opacity = 0;
              break;
            }
          }
          if (this.grid[r][c].opacity === 0) {
            this.grid[r][c].type = Math.floor(Math.random() * 4);
            this.grid[r][c].opacity = 1;
            this.grid[r][c].scale = 0.5;
          }
        }
      }
    }

    await this.sleep(200);

    // Check for new matches
    const newMatches = this.findMatches();
    if (newMatches.length > 0) {
      await this.processMatches(newMatches);
    } else {
      this.combo = 0;
    }
  },

  findAndSettle() {
    // Used after initial load
  },

  sleep(ms) { return new Promise(r => setTimeout(r, ms)); },

  updateMovesDisplay() {
    document.getElementById('hud-score').textContent = this.score;
    document.getElementById('hud-timer').textContent = this.movesLeft;
  },

  loop() {
    if (!this.running || !Game.gameRunning) return;
    this.draw();
    requestAnimationFrame(() => this.loop());
  },

  draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Background
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#FFF8E7');
    grad.addColorStop(1, '#FFEAA7');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Draw grid background
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = this.grid[r][c];
        ctx.fillStyle = (r + c) % 2 === 0 ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)';
        ctx.fillRect(cell.x, cell.y, this.cellSize, this.cellSize);
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(cell.x, cell.y, this.cellSize, this.cellSize);
      }
    }

    // Draw eggs
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = this.grid[r][c];
        if (cell.opacity <= 0) continue;

        ctx.save();
        ctx.globalAlpha = cell.opacity;
        const cx = cell.x + this.cellSize / 2;
        const cy = cell.y + this.cellSize / 2;

        // Egg background
        ctx.fillStyle = this.colors[cell.type] + 'CC';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 5, this.cellSize * 0.3 * cell.scale, this.cellSize * 0.38 * cell.scale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Egg emoji
        ctx.font = `${30 * cell.scale}px sans-serif`;
        ctx.fillText('🥚', cx, cy + 2);

        // Number label
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${14 * cell.scale}px sans-serif`;
        ctx.fillText(cell.type + 1, cx, cy + this.cellSize * 0.3);

        ctx.restore();
      }
    }

    // Selection highlight
    if (this.selected) {
      const cell = this.grid[this.selected.r][this.selected.c];
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 4;
      ctx.strokeRect(cell.x - 2, cell.y - 2, this.cellSize + 4, this.cellSize + 4);
    }

    // Combo display
    if (this.combo > 1) {
      ctx.fillStyle = '#FF6B6B';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🔥 ${this.combo}x 連鎖！`, w / 2, 50);
    }

    // Instructions
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('點擊兩顆相鄰的卵交換位置，三個相同即可消除！', w / 2, h - 20);
  },

  complete() {
    this.running = false;
    const bonus = this.score * 2;
    Game.addPoints(bonus);
    Game.addEggs(2);
    showModeComplete('🧩 排列完成！', bonus, '獲得 2 顆彩蛋 + ' + bonus + ' 積分');
  }
};

// ============================================================
// MODE 3: 蛹之家設計 (Pupa Home Design)
// ============================================================
const PupaHome = {
  init(canvas, ctx, players) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.players = players;
    this.running = true;
    this.score = 0;
    this.timeLeft = 90;
    this.temp = 28;
    this.humidity = 60;
    this.safety = 50;
    this.dragging = null;
    this.furniture = [];
    this.pupaX = canvas.width / 2;
    this.pupaY = canvas.height / 2 + 30;
    this.pupaHappy = false;
    this.decorations = ['🌿', '🪵', '🍂', '🪨', '🌸', '💧', '☀️', '🧸'];

    this.furniture = [
      { x: 100, y: 100, emoji: '🌿', name: '葉子' },
      { x: 200, y: 150, emoji: '🪵', name: '木頭' },
      { x: 300, y: 120, emoji: '🍂', name: '落葉' },
      { x: 400, y: 180, emoji: '🌸', name: '花朵' },
      { x: 500, y: 100, emoji: '💧', name: '露水' },
      { x: 150, y: 250, emoji: '🧸', name: '玩偶' },
      { x: 350, y: 280, emoji: '⭐', name: '星星' },
      { x: 450, y: 250, emoji: '🌈', name: '彩虹' }
    ];

    canvas.onmousedown = (e) => this.onMouseDown(e);
    canvas.onmousemove = (e) => this.onMouseMove(e);
    canvas.onmouseup = () => this.onMouseUp();
    canvas.ontouchstart = (e) => { const t = e.touches[0]; this.onMouseDown({ clientX: t.clientX, clientY: t.clientY }); };
    canvas.ontouchmove = (e) => { e.preventDefault(); const t = e.touches[0]; this.onMouseMove({ clientX: t.clientX, clientY: t.clientY }); };
    canvas.ontouchend = () => this.onMouseUp();

    this.timer = setInterval(() => {
      this.timeLeft--;
      document.getElementById('hud-timer').textContent = this.timeLeft;
      this.updateEnvironment();
      if (this.timeLeft <= 0) this.complete();
    }, 1000);

    this.loop();
  },

  onMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (this.canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (this.canvas.height / rect.height);

    for (const f of this.furniture) {
      if (Math.abs(mx - f.x) < 30 && Math.abs(my - f.y) < 30) {
        this.dragging = f;
        this.dragging.offsetX = mx - f.x;
        this.dragging.offsetY = my - f.y;
        break;
      }
    }
  },

  onMouseMove(e) {
    if (!this.dragging) return;
    const rect = this.canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (this.canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (this.canvas.height / rect.height);
    this.dragging.x = mx - this.dragging.offsetX;
    this.dragging.y = my - this.dragging.offsetY;
  },

  onMouseUp() {
    this.dragging = null;
  },

  updateEnvironment() {
    const nearPupa = this.furniture.filter(f =>
      Math.abs(f.x - this.pupaX) < 80 && Math.abs(f.y - this.pupaY) < 80
    );

    let tempEffect = 0, humidEffect = 0, safeEffect = 0;
    for (const f of nearPupa) {
      if (f.emoji === '🌿' || f.emoji === '🍂') { humidEffect += 5; tempEffect -= 1; }
      if (f.emoji === '🪵') { safeEffect += 15; }
      if (f.emoji === '🌸') { safeEffect += 10; tempEffect += 0.5; }
      if (f.emoji === '💧') { humidEffect += 10; }
      if (f.emoji === '☀️') { tempEffect += 2; humidEffect -= 5; }
      if (f.emoji === '🧸') { safeEffect += 20; }
      if (f.emoji === '⭐') { safeEffect += 5; }
      if (f.emoji === '🌈') { safeEffect += 15; tempEffect += 0.5; humidEffect += 3; }
    }

    this.temp = Math.max(15, Math.min(40, this.temp + tempEffect + (Math.random() - 0.5) * 0.5));
    this.humidity = Math.max(20, Math.min(100, this.humidity + humidEffect + (Math.random() - 0.5)));
    this.safety = Math.max(0, Math.min(100, this.safety + safeEffect * 0.1));

    this.pupaHappy = this.temp >= 24 && this.temp <= 32 && this.humidity >= 50 && this.humidity <= 80 && this.safety >= 60;
    this.score = Math.floor((this.temp >= 24 && this.temp <= 32 ? 30 : 0) +
      (this.humidity >= 50 && this.humidity <= 80 ? 30 : 0) + this.safety * 0.4);
  },

  loop() {
    if (!this.running || !Game.gameRunning) return;
    this.draw();
    requestAnimationFrame(() => this.loop());
  },

  draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Underground chamber
    const grad = ctx.createRadialGradient(w/2, h/2, 50, w/2, h/2, 500);
    grad.addColorStop(0, '#8B4513');
    grad.addColorStop(0.5, '#654321');
    grad.addColorStop(1, '#3E2723');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Chamber walls
    ctx.strokeStyle = '#A0522D';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(w/2, h/2, 350, 250, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Soil texture
    ctx.fillStyle = 'rgba(139, 69, 19, 0.2)';
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 2 + Math.random() * 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Pupa
    let pupaEmoji = this.pupaHappy ? '🦋' : '🫘';
    ctx.font = '60px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (this.pupaHappy) {
      ctx.save();
      ctx.translate(this.pupaX, this.pupaY);
      ctx.rotate(Math.sin(Date.now() * 0.003) * 0.1);
      ctx.fillText(pupaEmoji, 0, 0);
      ctx.restore();
    } else {
      ctx.fillText(pupaEmoji, this.pupaX, this.pupaY);
    }

    // Furniture
    for (const f of this.furniture) {
      ctx.font = '35px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Glow if near pupa
      if (Math.abs(f.x - this.pupaX) < 80 && Math.abs(f.y - this.pupaY) < 80) {
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 15;
      }
      ctx.fillText(f.emoji, f.x, f.y);
      ctx.shadowBlur = 0;

      // Name label
      ctx.font = '12px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(f.name, f.x, f.y + 30);
    }

    // Stats panel
    const statsX = 20, statsY = 80;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.roundRect ? ctx.roundRect(statsX, statsY, 180, 120, 10) : null;
    ctx.fillRect(statsX, statsY, 180, 120);

    ctx.fillStyle = '#fff';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`🌡️ 溫度: ${this.temp.toFixed(1)}°C`, statsX + 10, statsY + 25);
    ctx.fillText(`💧 濕度: ${this.humidity.toFixed(0)}%`, statsX + 10, statsY + 50);
    ctx.fillText(`🛡️ 安全: ${this.safety.toFixed(0)}%`, statsX + 10, statsY + 75);
    ctx.fillText(this.pupaHappy ? '😊 蛹很開心！' : '😐 蛹不太舒服...', statsX + 10, statsY + 100);

    // Score
    ctx.fillText(`⭐ 舒適度: ${this.score}`, statsX + 10, statsY + 120);

    // Drag hint
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🖱️ 拖曳物品到蛹旁邊佈置溫暖的家！', w / 2, h - 20);
  },

  complete() {
    this.running = false;
    clearInterval(this.timer);
    const bonus = this.score * 3;
    Game.addPoints(bonus);
    Game.addEggs(this.pupaHappy ? 3 : 1);
    const msg = this.pupaHappy ? '🦋 蛹羽化成蝶！好溫暖的家！' : '🏠 家佈置好了！';
    showModeComplete(msg, bonus, `獲得 ${this.pupaHappy ? 3 : 1} 顆彩蛋 + ${bonus} 積分`);
  }
};

// ============================================================
// MODE 4: 成蟲旅行冒險 (Adult Beetle Travel Adventure)
// ============================================================
const AdultTravel = {
  init(canvas, ctx, players) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.players = players;
    this.running = true;
    this.score = 0;
    this.timeLeft = 60;
    this.beetleX = 100;
    this.beetleY = canvas.height / 2;
    this.beetleVY = 0;
    this.beetleVX = 0;
    this.gravity = 0.4;
    this.flapPower = -7;
    this.collectibles = [];
    this.obstacles = [];
    this.cameraX = 0;
    this.worldWidth = 5000;
    this.groundY = canvas.height - 60;
    this.beetleEmoji = '🐞';
    this.particles = [];
    this.invincible = 0;

    // Generate collectibles
    for (let i = 0; i < 30; i++) {
      this.collectibles.push({
        x: 200 + Math.random() * (this.worldWidth - 400),
        y: 50 + Math.random() * (this.groundY - 150),
        collected: false,
        type: ['🌸', '🍯', '💎', '⭐', '🍀'][Math.floor(Math.random() * 5)]
      });
    }

    // Generate obstacles
    for (let i = 0; i < 20; i++) {
      this.obstacles.push({
        x: 300 + Math.random() * (this.worldWidth - 600),
        y: this.groundY - 10 - Math.random() * 20,
        w: 20 + Math.random() * 30,
        h: 30 + Math.random() * 50,
        type: 'spider'
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') {
        this.beetleVY = this.flapPower;
        for (let i = 0; i < 5; i++) {
          this.particles.push({
            x: this.beetleX - this.cameraX,
            y: this.beetleY + 20,
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 2,
            life: 1,
            size: 3 + Math.random() * 3
          });
        }
      }
      if (e.key === 'a' || e.key === 'ArrowLeft') this.beetleVX = -4;
      if (e.key === 'd' || e.key === 'ArrowRight') this.beetleVX = 4;
    });
    document.addEventListener('keyup', (e) => {
      if (e.key === 'a' || e.key === 'ArrowLeft' || e.key === 'd' || e.key === 'ArrowRight') this.beetleVX = 0;
    });

    this.timer = setInterval(() => {
      this.timeLeft--;
      document.getElementById('hud-timer').textContent = this.timeLeft;
      if (this.timeLeft <= 0) this.complete();
    }, 1000);

    this.loop();
  },

  loop() {
    if (!this.running || !Game.gameRunning) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  },

  update() {
    this.beetleVY += this.gravity;
    this.beetleX += this.beetleVX;
    this.beetleY += this.beetleVY;

    if (this.invincible > 0) this.invincible--;

    // Ground collision
    if (this.beetleY > this.groundY) {
      this.beetleY = this.groundY;
      this.beetleVY = 0;
    }
    if (this.beetleY < 20) { this.beetleY = 20; this.beetleVY = 0; }

    // Camera follow
    const targetCam = this.beetleX - this.canvas.width / 3;
    this.cameraX += (targetCam - this.cameraX) * 0.1;
    this.cameraX = Math.max(0, Math.min(this.worldWidth - this.canvas.width, this.cameraX));

    // Collect items
    for (const item of this.collectibles) {
      if (!item.collected) {
        const dx = (this.beetleX - item.x);
        const dy = (this.beetleY - item.y);
        if (Math.sqrt(dx * dx + dy * dy) < 40) {
          item.collected = true;
          this.score += 20;
          const points = { '🌸': 15, '🍯': 20, '💎': 50, '⭐': 30, '🍀': 25 };
          this.score += points[item.type] || 20;
          document.getElementById('hud-score').textContent = this.score;
          // Particles
          for (let i = 0; i < 10; i++) {
            this.particles.push({
              x: item.x - this.cameraX,
              y: item.y,
              vx: (Math.random() - 0.5) * 5,
              vy: (Math.random() - 0.5) * 5,
              life: 1,
              size: 5 + Math.random() * 5,
              color: '#FFD700'
            });
          }
        }
      }
    }

    // Obstacle collision
    for (const obs of this.obstacles) {
      if (Math.abs(this.beetleX - obs.x) < obs.w &&
          Math.abs(this.beetleY - obs.y) < obs.h) {
        if (this.invincible <= 0) {
          this.beetleVY = -5;
          this.score = Math.max(0, this.score - 10);
          this.invincible = 30;
          document.getElementById('hud-score').textContent = this.score;
        }
      }
    }

    // Flying particles
    if (Math.abs(this.beetleVY) > 1) {
      this.particles.push({
        x: this.beetleX - this.cameraX,
        y: this.beetleY + 15,
        vx: -this.beetleVX * 0.5 + (Math.random() - 0.5),
        vy: Math.random() * 0.5,
        life: 0.8,
        size: 3
      });
    }

    this.particles = this.particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      return p.life > 0;
    });
  },

  draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Sky
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#87CEEB');
    grad.addColorStop(0.7, '#E0F7FA');
    grad.addColorStop(1, '#90EE90');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w - 80, 60, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(w - 80, 60, 60, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(-this.cameraX, 0);

    // Clouds
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    for (let i = 0; i < 8; i++) {
      const cx = (i * 700 + 200) % this.worldWidth;
      const cy = 40 + (i % 3) * 40;
      ctx.beginPath();
      ctx.arc(cx, cy, 35, 0, Math.PI * 2);
      ctx.arc(cx + 30, cy - 8, 28, 0, Math.PI * 2);
      ctx.arc(cx + 60, cy, 30, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ground
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, this.groundY + 20, this.worldWidth, h);
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, this.groundY, this.worldWidth, 25);

    // Grass blades
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    for (let x = 0; x < this.worldWidth; x += 15) {
      const gh = 10 + Math.sin(x * 0.1) * 8 + Math.sin(x * 0.05 + Date.now() * 0.001) * 3;
      ctx.beginPath();
      ctx.moveTo(x, this.groundY);
      ctx.lineTo(x + 3, this.groundY - gh);
      ctx.stroke();
    }

    // Collectibles
    for (const item of this.collectibles) {
      if (!item.collected) {
        ctx.font = '30px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const bobY = Math.sin(Date.now() * 0.003 + item.x * 0.01) * 5;
        ctx.fillText(item.type, item.x, item.y + bobY);

        // Glow
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 10;
        ctx.fillText(item.type, item.x, item.y + bobY);
        ctx.shadowBlur = 0;
      }
    }

    // Obstacles (spiders)
    for (const obs of this.obstacles) {
      ctx.font = '40px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🕷️', obs.x, obs.y);
    }

    // Particles
    for (const p of this.particles) {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color || '#FFD700';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.restore();

    // Beetle (screen space)
    ctx.save();
    ctx.translate(this.beetleX - this.cameraX, this.beetleY);

    // Wing animation
    const wingAngle = this.beetleVY < -1 ? Math.sin(Date.now() * 0.02) * 20 : 0;

    // Glow for invincibility
    if (this.invincible > 0) {
      ctx.shadowColor = '#FFD700';
      ctx.shadowBlur = 20;
    }

    ctx.font = '50px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.rotate(wingAngle * 0.02);
    ctx.fillText(this.beetleEmoji, 0, 0);
    ctx.shadowBlur = 0;

    ctx.restore();

    // HUD - controls
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪶 按空白鍵/↑ 飛翔  ·  ← → 移動  ·  🎯 收集花蜜', w / 2, h - 15);

    // Distance indicator
    ctx.fillStyle = '#fff';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`📏 距離: ${Math.floor(this.beetleX)}m`, 20, 35);
  },

  complete() {
    this.running = false;
    clearInterval(this.timer);
    const bonus = this.score + Math.floor(this.beetleX * 0.1);
    Game.addPoints(bonus);
    Game.addEggs(2);
    showModeComplete('🐞 冒險結束！', bonus, '獲得 2 顆彩蛋 + ' + bonus + ' 積分');
  }
};

// ============================================================
// Mode Complete Overlay
// ============================================================
function showModeComplete(title, score, detail) {
  const container = document.getElementById('game-canvas-container');
  const existing = container.querySelector('.mode-complete-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'mode-complete-overlay';
  overlay.innerHTML = `
    <h2>${title}</h2>
    <div class="score-big">⭐ +${score}</div>
    <p>${detail}</p>
    <button class="btn-main" onclick="exitGame()">🏠 回大廳</button>
    <button class="btn-main btn-secondary" style="margin-top:10px" onclick="replayMode()">🔄 再玩一次</button>
  `;
  container.appendChild(overlay);
  spawnConfetti();

  // Play success sound
  playSuccessSound();
}

function replayMode() {
  document.querySelector('.mode-complete-overlay')?.remove();
  Game.resizeCanvas();
  loadMode(Game.currentMode);
}

function spawnConfetti() {
  const colors = ['#FFD93D', '#FF6B6B', '#6BCB77', '#4D96FF', '#9B59B6', '#FF944D', '#FF69B4'];
  for (let i = 0; i < 50; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = (5 + Math.random() * 10) + 'px';
    el.style.height = (5 + Math.random() * 10) + 'px';
    el.style.animationDuration = (2 + Math.random() * 3) + 's';
    el.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

function playSuccessSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523, audioCtx.currentTime);
    osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
    osc.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.5);
  } catch(e) {}
}