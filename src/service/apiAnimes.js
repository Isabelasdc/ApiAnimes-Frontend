const { default: axios } = require("axios");

const apiAnimes = axios.create({
    baseURL: 'https://api.jikan.moe/v4'
})

export default apiAnimes