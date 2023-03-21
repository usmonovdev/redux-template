import axios from "axios";
import { getToken } from "../helpers/storage";

axios.defaults.baseURL = "http://localhost:3000/api"

axios.interceptors.request.use(config => {
    const token = getToken("TOKEN")
    const authorization = token ? `Token ${token}` : ""
    config.headers.Authorization = authorization
    return config
})

export default axios