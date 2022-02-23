/**
 * @name: debounce
 * @author: chuanchuan
 * @date: 2022-02-23 11:42
 * @description：debounce
 * @update: 2022-02-23 11:42
 */

// 防抖
export default function (fn, duration=100) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration)
  }
}