import axios from 'axios'
import {
    toast
} from 'react-toastify';
// axios intercept any errors that accured from the backend and will display it on the browser
axios.interceptors.response.use(null, (err) => {
    const {
        response
    } = err;
    if (!response) {
        toast.error('bad connection to server');
    }
    if (response && response >= 403) {
        toast.error('unexpected error');
    }
    return Promise.reject(err);
})
//set a default header to any request(key and value).
export function setDefaultCommonHeader(header, value) {
    axios.defaults.headers.common[header] = value;
}



const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setDefaultCommonHeader
}
export default httpService;