import axios from "axios";
//ulrto na serverot

const instance = axios.create({
    baseURL: 'http://localhost:9091/api',
    headers: {
        'access-Control-Allow-Origin' : '*',
        'Authorization': localStorage.getItem('JWT')
    }
})
export default instance;