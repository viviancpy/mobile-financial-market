import axios from 'axios'

const intrinioAxiosInstance = axios.create({
  baseURL: 'https://api.intrinio.com/',
  timeout: 1000,
  auth: {
    username: '750127d4f6164a27193603848a1c8d38',
    password: 'aac3e228e31ec2de204faa1fd725b2d8'
  }
})

export const tryGetCompanyDetails = (ticker) => {
  const url = `/companies?identifier=${ticker}`;
  return intrinioAxiosInstance.get(url);
}

export const tryGetStockHistoricals = (ticker) => {
  const url = `/prices?identifier=${ticker}`;
  return intrinioAxiosInstance.get(url);
}
