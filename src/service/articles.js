import axios from "./api"

const ArticleService = {
    async getArticles() {
        const response = axios.get("/articles")
        return response
    },
    async getArticleDetail(slug) {
        const response = axios.get(`/articles/${slug}`)
        return response
    }
}

export default ArticleService