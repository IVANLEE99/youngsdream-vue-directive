import { validateLicense } from "./license";

export const vProPermission = {
  mounted(el: HTMLElement, binding: any) {
    if (!validateLicense(binding.value.license)) {
      console.warn("Pro 指令未授权");
      return;
    }
    check(el, binding);
  },
  updated(el: HTMLElement, binding: any) {
    if (!validateLicense(binding.value.license)) return;
    check(el, binding);
  },
};

function check(el: HTMLElement, binding: any) {
  const userRole = "admin";
  if (binding.value.role !== userRole) {
    el.parentNode?.removeChild(el);
  }
}
