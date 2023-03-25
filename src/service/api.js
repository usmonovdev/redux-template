import axios from "axios";
import { getToken } from "../helpers/storage";

axios.defaults.baseURL = "https://api.realworld.io/api"

axios.interceptors.request.use(config => {
    const token = getToken("TOKEN")
    const authorization = token ? `Token ${token}` : ""
    config.headers.Authorization = authorization
    return config
})

export default axios