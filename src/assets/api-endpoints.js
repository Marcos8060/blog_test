//------------------------ Backend APIs ----------------------//
export const API_URL = {
  /***************** AUTHENTICATION APIS **********************/
  REGISTER_USER: "/users/register/",
  LOGIN: "https://kordesroses.thinksynergyltd.com/api1/rest/login.php",

  /***************** BLOG APIS **********************/
  FETCH_BLOGS: `http://localhost:3000/api/blogs/`,

  /***************** COMMENT APIS **********************/
  ADD_COMMENT: `http://localhost:3000/api/add-comment`,
};

//------------------------ Application APIs ----------------------//
export const APP_API_URL = {
  /***************** AUTH **********************/
  REGISTER_USER: "/api/register",
  LOGIN: "/api/auth/login",

  /***************** BLOG APIS **********************/
  FETCH_BLOGS: "/api/blogs",


  /***************** COMMENT APIS **********************/
  ADD_COMMENT: "/api/comments/add-comment",
};

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
};
