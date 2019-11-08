// noinspection SpellCheckingInspection
import axios from "axios";
import { Toast } from "cube-ui";
class AjaxRequest {
  constructor() {
    this.baseUrl =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/api"
        : void 0;
    this.timeOut = 3000;
    this.queue = {};
  }
  setInterceptor(instance, url) {
    // noinspection SpellCheckingInspection
    console.log(url);
    instance.interceptors.request.use(
      config => {
        if (Object.keys(this.queue).length === 0) {
          this.toast = Toast.$create({
            txt: "正在加载", // 每次显示toast组件时 都叫 正在加载 否则别人把txt的值改了
            time: 0
          });
          this.toast.show();
        }
        // 请求前 增加请求队列
        this.queue[url] = url;
        return config;
      },
      error => Promise.reject(error)
    );
    instance.interceptors.response.use(
      res => {
        delete this.queue[url];

        if (Object.keys(this.queue).length === 0) {
          this.toast.hide();
        }

        if (res.data.code === 0) {
          return res.data.data;
        }

        return res;
      },
      error => {
        //  this.toast.hide();
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    let instance = axios.create();
    let config = { ...options, baseURL: this.baseUrl, timeout: this.timeOut };
    this.setInterceptor(instance, options.url);
    return instance(config);
  }
}
export default AjaxRequest;
