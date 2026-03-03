export interface ExposureOptions {
  role: string;
}
/**
 * 判断是否为对象
 *
 * @param obj
 * @returns {boolean}
 */
const isObject = (obj: any) => {
  const isObject = Object.prototype.toString.call(obj) === "[object Object]";
  if (isObject) {
    return Object.keys(obj).length > 0;
  }

  return isObject;
};
function debounce(fn, delay = 300) {
  let timer = null;

  return function (...args) {
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * 创建曝光观察者
 * @param {HTMLElement} el - 目标DOM元素
 * @param {Object} binding - 指令绑定对象
 * @param {Function} callback - 曝光回调函数
 * @returns {IntersectionObserver | null} 观察者实例
 */
const createExposureObserver = (
  el: HTMLElement,
  binding: any,
  callback: Function,
) => {
  const console = window.console;
  if (!el || !binding || typeof callback !== "function") {
    // console.warn("[v-expose] 参数无效或出错");
    return null;
  }
  // console.log("[v-expose] 创建观察者", { el, binding });
  const threshold = parseFloat(binding.arg) || 0.5; // 默认50%可见触发
  const always = binding.modifiers.always || false; // 默认为 `false`，不会一直触发
  const once = !always; // 默认为 `true`，只触发一次

  console.log("[v-expose] 创建观察者", { threshold, once, always, binding });
  console.log("binding", binding);
  const observer = new IntersectionObserver(
    (entries) => {
      console.log("entries", entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log("[v-expose] entry", entry);
          callback(entry);
          if (once) observer.unobserve(entry.target); // 只触发一次
        }
      });
    },
    {
      threshold: Math.min(Math.max(threshold, 0), 1), // 确保在 0 - 1 范围内
      rootMargin: "0px",
    },
  );

  return observer;
};
// v-exposure:[roles]="['admin']"
function check(el: HTMLElement, binding: any) {
  const roles = binding.arg || binding?.value?.roles || [];
  const auths = Array.isArray(binding.value)
    ? binding.value
    : binding?.value?.auths || [binding.value];
  let isAuth = false;
  auths.forEach((auth: string) => {
    if (roles.includes(auth)) {
      isAuth = true;
    }
  });
  if (!isAuth) {
    el.parentNode?.removeChild(el);
  }
}

function _bind(el: HTMLElement, binding: any) {
  el._exposureConfig = { value: binding.value, observer: null };
  el._exposed = false; //  每个元素独立判断是否已曝光
}
function _inserted(el: HTMLElement, binding: any, vnode: any) {
  if (!el._exposureConfig || !isObject(el._exposureConfig?.value)) return;
  // 创建观察者
  el._exposureConfig.observer = createExposureObserver(
    el,
    binding,
    debounce((entry) => {
      const always = binding.modifiers.always || false; // 默认为 `false`，不会一直触发
      // 避免多组件重复上报：每个 DOM 自己控制是否上报
      if (el._exposed && !always) return;
      el._exposed = true;
      // 曝光埋点方法
      // console.log("[v-expose] entry", entry, binding.value);
      // binding?.value && Vue.prototype.$sendSensorsData(binding.value);
      let data = binding.value?.data || "";
      let fn = binding.value?.fn || (() => {});
      fn(data);
    }, 500),
  );
  // 监听
  el._exposureConfig.observer?.observe(el);
}
function _unbind(el: HTMLElement) {
  // 清理观察
  if (el._exposureConfig?.observer) {
    el._exposureConfig.observer.disconnect();
  }
  delete el._exposureConfig;
}

export const vExposure = {
  bind: _bind,
  inserted: _inserted,
  unbind: _unbind,
  created: _bind,
  mounted: _inserted,
  beforeUnmount: _unbind,
};
