import axios from "./api"

const AuthServie = {
    async userRegister(user) {
        const response = axios.post("/users", { user })
        return response
    },
    async userLogin(user) {
        const response = axios.post("/users/login", { user })
        return response
    },
    async getUser(user) {
        const response = axios.post("/user")
        return response
    }
}

export default AuthServie