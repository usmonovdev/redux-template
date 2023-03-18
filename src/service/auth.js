import axios from "./api"

const AuthService = {
    async userRegister(user) {
        const response = axios.post("/users", {user})
        return response.data
    },
    async userLogin() {
        // const response = axios.post("/users")
        // return response
    },
    async getUser() {
        // const response = axios.post("/user")
        // return response
    },
}

export default AuthService