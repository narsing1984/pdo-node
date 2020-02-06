const axios = require("axios");

module.exports = Object.freeze({
  SECRET_KEY: "SAGARSOFT@2004$2404?",
  API_URL: axios.create({
    baseURL: '',
    timeout: 30000,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  })
});
