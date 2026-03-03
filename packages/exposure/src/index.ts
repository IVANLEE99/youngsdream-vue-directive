import { vExposure } from "./directive";

export const Exposure = {
  install(app: any) {
    app.directive("exposure", vExposure);
  },
};

export { vExposure };
export default Exposure;
