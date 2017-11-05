import axios from 'axios'

const apiKey = '7da01bb3b2c14bcfa0e8d802b292a8d4'

const newsApiInstance = axios.create({
  baseURL: 'https://newsapi.org/v1/',
  timeout: 1000
})

export const tryGetArticlesFromSource = (newsAgent) => {
  const url = `/articles?source=${newsAgent}&sortBy=top&apiKey=${apiKey}`;
  return newsApiInstance.get(url);
}
