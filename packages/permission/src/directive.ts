export interface PermissionOptions {
  role: string;
}

export const vPermission = {
  mounted(el: HTMLElement, binding: any) {
    check(el, binding);
  },
  updated(el: HTMLElement, binding: any) {
    check(el, binding);
  },
  inserted(el: HTMLElement, binding: any) {
    check(el, binding);
  },
  componentUpdated(el: HTMLElement, binding: any) {
    check(el, binding);
  },
};
// v-permission:[roles]="['admin']"
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
