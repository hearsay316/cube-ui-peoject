import axja from "@/utils/axjaxRequest.js";
let axios = new axja();
export const fetchCategory = () => {
  return axios.request({
    url: "/Category",
    method: "get"
  });
};
