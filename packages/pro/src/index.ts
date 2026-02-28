import { vProPermission } from "./vPermission";
import { proDebounce } from "./utils";
import { validateLicense, generateLicense } from "./license";

export const ProDirective = {
  install(app: any) {
    app.directive("pro-permission", vProPermission);
  },
};

export { vProPermission, proDebounce, validateLicense, generateLicense };
export default ProDirective;
