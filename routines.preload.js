(function () {
  const STORAGE_KEY = 'class_late_threshold';
  const DEFAULT_LATE_TIME = '07:50';

  function getSavedLateThreshold() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved || DEFAULT_LATE_TIME;
    } catch (error) {
      return DEFAULT_LATE_TIME;
    }
  }

  function patchUseState() {
    if (!window.React || typeof React.useState !== 'function') return false;

    const originalUseState = React.useState;
    if (originalUseState.__lateThresholdPatched) return true;

    function patchedUseState(initialState) {
      if (initialState === DEFAULT_LATE_TIME) {
        return originalUseState.call(this, getSavedLateThreshold());
      }
      return originalUseState.apply(this, arguments);
    }

    patchedUseState.__lateThresholdPatched = true;
    React.useState = patchedUseState;
    return true;
  }

  if (!patchUseState()) {
    const timer = setInterval(() => {
      if (patchUseState()) {
        clearInterval(timer);
      }
    }, 0);
    setTimeout(() => clearInterval(timer), 2000);
  }
})();