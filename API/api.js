import axios from "axios";

const fetchNews = (query) => {
  const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`;
  return axios.get(url, {
    headers: {
      "x-rapidapi-key": "22675435b6msh88d453eb7c57b68p185113jsn984444b28210",
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  });
};

const predictNews = (data) => {
  const url = `https://fakenews.pegasus0760.repl.co/api`;
  return axios
    .post(url, {
      news: data,
    })
    .then(function (response) {
      console.log(response.data.prediction);
      return response?.data?.prediction;
    });
};

export { fetchNews, predictNews };
