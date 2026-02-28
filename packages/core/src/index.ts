import Permission from "@youngsdream/permission"

const components = [Permission]

const install = (app: any) => {
  components.forEach((c) => app.use(c))
}

export default { install }
export * from "@youngsdream/permission"
