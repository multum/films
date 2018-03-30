export class Resp {
  /**
   * Check mobile device
   *
   * @returns {boolean}
   */
  static isMobile() {
    return window.matchMedia(`(max-width: 767px)`).matches;
  }
  /**
   * Check tablet device
   *
   * @returns {boolean}
   */
  static isTablet() {
    return window.matchMedia(`(max-width: 1023px)`).matches;
  }
}

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 *
 * @param {Function} func
 * @param {Object} context
 * @param {Number} wait
 * @param {Boolean} [immediate]
 * @returns {Function}
 */
export const debounce = (func, context, wait, immediate) => {
  let timeout;

  return function () {
    const args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/**
 * Throttle function.
 *
 * @param {Function} fn
 * @param {Number} [threshold]
 * @param {Object} [scope]
 * @returns {Function}
 */
export const throttle = (fn, threshold = 250, scope) => {
  let last, deferTimer;

  return function () {
    const context = scope || this;
    const now = +new Date();
    const args = arguments;

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};