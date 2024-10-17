//------------------------ Backend APIs ----------------------//
export const API_URL = {


    /***************** AUTHENTICATION APIS **********************/
    REGISTER_USER: '/users/register/',
    LOGIN: 'https://kordesroses.thinksynergyltd.com/api1/rest/login.php',


    /***************** TEST APIS **********************/
    FETCH_BLOGS: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
    
}


//------------------------ Application APIs ----------------------//
export const APP_API_URL = {

    /***************** AUTH **********************/
    REGISTER_USER: '/api/register',
    LOGIN: '/api/auth/login',


    /***************** TEST APIS **********************/
    FETCH_BLOGS: '/api/blogs',
    

}

export const API_METHODS = {
    GET:'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
