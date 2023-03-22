import axios from "./api"

const ArticleService = {
    async getArticles() {
        const response = axios.get("/articles")
        return response
    }
}

export default ArticleService