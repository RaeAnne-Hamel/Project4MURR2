const ARTICLES_URL = 'https://127.0.0.1:8000/api/articles'
const ArticlesMixin = ({
  data: function () {
    return {
      ARTICLES_URL
    }
  }
})
export default ArticlesMixin
