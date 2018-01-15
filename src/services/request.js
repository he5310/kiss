import axios from 'axios';

axios.defaults.baseURL = '/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default async function (url, params) {
  const res = axios.post(url, params).then(data => {
    console.log(data)
  }).catch(err=>{
    console.log(res)
  });
}