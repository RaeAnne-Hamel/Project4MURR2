const SitePointMixin = ({
  methods: {
    // this method will help the frontend talk with the API
    // takes in  method type and some data
    callAPI: function (method, data, url) {
      // set const variable
      const config = {
        // change everything to lowercase
        method: method.toLowerCase(),
        // const url
        url: url,
        // set empty params
        params: {}
      }
      // if method type equal post
      if (['post'].includes(config.method)) {
        // config data equal data
        config.data = data
      } else {
        // set the config params to equal data
        config.params = data
      }
      // returns an axios call that equal config
      return this.axios(config)
    }
  }
})
export default SitePointMixin
