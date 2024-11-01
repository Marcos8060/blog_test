import UseAxios from "../../assets/hooks/use-axios";
import { APP_API_URL } from "../../assets/api-endpoints";

export const fetchBlogs = () => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`${APP_API_URL.FETCH_BLOGS}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export const addComment = (id,text) => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${APP_API_URL.ADD_COMMENT}`,{id,text})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
