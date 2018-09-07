import axios from 'axios'

export default class Github {
    
    
    constructor () {
      axios.defaults.baseURL = 'https://api.github.com/'
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        'af134254db2d2077d4fa10f2efd1b0f35741f8dc'
      }`
    }
  
    getRepos(username) {
      return axios.get(`users/${username}/repos`)
    }

  }
  
  export const github = new Github()