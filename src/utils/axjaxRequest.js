// noinspection SpellCheckingInspection
import axios from "axios";

class AxjaxRequest {
  constructor() {
    this.baseUrl =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/api"
        : void 0;
    this.timeOut = 3000;
  }
  setInterceptor(instance, url) {
    // noinspection SpellCheckingInspection
    console.log(url);
    instance.interceptors.request.use(
      config => {
        return config;
      },
      error => Promise.reject(error)
    );
    instance.interceptors.response.use(
      res => {
        if (res.data.code === 0) {
          return res.data.data;
        }
        return res;
      },
      error => Promise.reject(error)
    );
  }
  request(options) {
    let instance = axios.create();
    let config = { ...options, baseURL: this.baseUrl, timeout: this.timeOut };
    this.setInterceptor(instance, options.url);
    return instance(config);
  }
}
export default AxjaxRequest;
