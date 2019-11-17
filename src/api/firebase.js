import axios from "axios"

const instance = axios.create({
  baseURL: `https://hookahblender.firebaseio.com/tobacoList`
});

export const tobacoApi = {
  getTobacoItems(tobacoId) {
    return instance.get(`/tobacoItems${tobacoId}.json`).then(res => {
      return res.data;
    })

  }
}



