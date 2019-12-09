
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



export const tobacoApi = {
  getTobacoItems(tobacoId) {
    return db.collection("HookahProducers").doc(tobacoId).get().then(res => res.data())

  }
}
export const mixesApi = {

  getMixes() {
    const findMixes = db.collection("HokahMixes").get().then(res => {
      res.forEach(res => {
        console.log(!!(res.get("Alfa")))
      })

    })
    console.log(findMixes)
    return db.collection("HokahMixes").get().then(snapshot => {
      const arrMixes = [];
      snapshot.forEach(res => {
        arrMixes.push(res.get("mix2"))

      })
      return arrMixes
    })

  }
}



