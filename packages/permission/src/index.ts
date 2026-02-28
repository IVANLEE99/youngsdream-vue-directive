import { vPermission } from "./directive"

export const Permission = {
  install(app: any) {
    app.directive("permission", vPermission)
  }
}

export { vPermission }
export default Permission
