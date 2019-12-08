import axios from "axios"
import firebase from "firebase/app"
import "firebase/firestore";
import config from "./firebaseConf"
firebase.initializeApp(config);

const db = firebase.firestore();
const getTobacoProducers = db.collection("HookahProducers").get().then(snapshot => {
  snapshot.forEach(doc => {

  });
})
  .catch(err => {
    console.log('Error getting documents', err);
  });


const instance = axios.create({
  baseURL: `https://hookahblender.firebaseio.com`
});

export const tobacoApi = {
  getTobacoItems(tobacoId) {
    return db.collection("HookahProducers").doc(tobacoId).get().then(res => {
      console.log(res.data())
      return res.data()
    })


    //  instance.get(`/tobacoList/tobacoItems/${tobacoId}.json`).then(res => {
    //  console.log(res.data)
    //    return res.data;
    //  })

  }
}
export const mixesApi = {
  getMixes() {
    return instance.get('/mixes.json').then(res => {

      return res.data
    })
  }
}



