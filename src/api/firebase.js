import axios from "axios"

const instance = axios.create({
  baseURL: `https://hookahblender.firebaseio.com`
});

export const tobacoApi = {
  getTobacoItems(tobacoId) {
    return instance.get(`/tobacoList/tobacoItems/${tobacoId}.json`).then(res => {
      return res.data;
    })

  }
}
export const mixesApi = {
  getMixes() {
    return instance.get('/mixes.json').then(res => {

      return res.data
    })
  }
}



