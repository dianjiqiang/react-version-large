import axios from 'axios'

class Request {
  constructor(baseURL, timeout) {
    const instance = axios.create({
      baseURL,
      timeout
    })

    instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )
    this.instance = instance
  }
  getRequest(url, config) {
    return this.instance.get(url, config)
  }
  postRequest(url, config) {
    return this.instance.post(url, config)
  }
}

export default new Request('http://123.207.32.32:9060/beike/api/powerscreen', 3000)
