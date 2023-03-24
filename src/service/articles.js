import axios from "./api"

const ArticleService = {
    async getArticles() {
        const response = await axios.get("/articles")
        return response
    },
    async getArticleDetail(slug) {
        const response = await axios.get(`/articles/${slug}`)
        return response
    },
    async postArticle(article) {
        const response = await axios.post('/articles', {article})
        return response
    }
}

export default ArticleService