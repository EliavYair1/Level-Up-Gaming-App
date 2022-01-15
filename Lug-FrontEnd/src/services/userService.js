import httpService, {
    setDefaultCommonHeader
} from "./httpService";
import {
    storeUrl
} from "../config.json"
import jwtDecode from "jwt-decode";
const TokenKey = 'token'
//the function from httpservice - sets default header to any request (key,value) - in our case -> x-auth-token = token
setDefaultCommonHeader('x-auth-token', getJwt());

//get the user token from the local storage
export function getJwt() {
    return localStorage.getItem(TokenKey)
}

// creates a new user by request to the server
export function createUser(user) {
    return httpService.post(`${storeUrl}/users`, user)

}
//a function that login the user by his email and password abd set the token key (x-auth-token) and the token into the localstorage
export async function login(email, password) {
    const {
        data: {
            token
        }
    } = await httpService.post(`${storeUrl}/auth`, {
        email,
        password
    })
    localStorage.setItem(TokenKey, token)
}

//a functioln that checks if user is logged in
export function isUserLogged() {
    try {
        const jwt = localStorage.getItem(TokenKey)
        return jwtDecode(jwt);
    } catch {
        return null;
    }
}

export function logout() {
    localStorage.removeItem(TokenKey);
};
// a function that will output the user data by id
export function getUserInfo(id) {
    return httpService.get(`${storeUrl}/users/${id}`)

}
//a function that will edit the user data
export function editUser({
    _id,
    ...body
}) {
    return httpService.put(`${storeUrl}/users/${_id}`, body)

} //delete the user 
export function deleteUser(id) {
    return httpService.delete(`${storeUrl}/users/${id}`);
}

const userService = {
    createUser,
    login,
    isUserLogged,
    logout,
    editUser,
    getUserInfo,
    deleteUser
}
export default userService;