import { validateLicense } from "./license";

export function proDebounce(fn: Function, wait: number, license: string) {
  if (!validateLicense(license)) {
    console.warn("Pro 工具未授权");
    return fn;
  }

  let timer: any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}
