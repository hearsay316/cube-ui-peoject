import ajax from "@/utils/ajaxRequest.js";
// noinspection SpellCheckingInspection
let axios = new ajax();
export const fetchCategory = () => {
  return axios.request({
    url: "/Category",
    method: "get"
  });
};
