(function () {
  const STORAGE_KEY = 'class_late_threshold';
  const SAVE_ATTR = 'data-late-save-button';

  function patchLateThreshold(root) {
    const timeInput = root.querySelector('input[type="time"]');
    if (!timeInput) return false;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && timeInput.value !== stored) {
      timeInput.value = stored;
      timeInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    const label = Array.from(root.querySelectorAll('label')).find((el) =>
      (el.textContent || '').includes('遲到界線')
    );
    const group = label ? label.parentElement : null;
    if (!group || group.querySelector(`[${SAVE_ATTR}]`)) return true;

    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute(SAVE_ATTR, '1');
    button.className =
      'w-full py-2 bg-retro-ink text-white border-2 border-retro-ink font-bold hover:bg-black shadow-hard-sm flex items-center justify-center gap-2';
    button.textContent = '儲存設定';
    button.addEventListener('click', () => {
      localStorage.setItem(STORAGE_KEY, timeInput.value || '07:50');
      timeInput.dispatchEvent(new Event('input', { bubbles: true }));
    });

    group.appendChild(button);
    return true;
  }

  function run() {
    patchLateThreshold(document);
  }

  const observer = new MutationObserver(() => patchLateThreshold(document));
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
