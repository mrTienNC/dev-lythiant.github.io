/* eslint-disable */
const axios = require("axios");
const cookie = require("./cookie");

const api = "http://127.0.0.1:8080/";

function getHeaders() {
  const token = cookie.getCookie("token");
  const headers = {
    Authorization: token,
    "Content-Type": "application/json"
  };

  return headers;
}

module.export = {
  getPost(url, params) {
    return axios
      .get(api + url, { header: getHeaders(), params })
      .then(response => this.checkResponse(response));
  },
  addPost(url, params) {
    return axios
      .post(api + url, { header: getHeaders(), params })
      .then(response => this.checkResponse(response));
  },
  checkResponse(response) {
    if (response.code == 401) {
      localStorage.clear();
      cookie.deleteCookie();
    }
  }
};
