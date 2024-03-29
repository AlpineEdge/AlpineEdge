import axios from 'axios'

const api = axios.create({
    baseURL: "https://alpineedge.ch/v1",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
    },
  })

export default api
