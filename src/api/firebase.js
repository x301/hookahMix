
import firebase from "firebase/app"
import "firebase/firestore";
import config from "./firebaseConf"
firebase.initializeApp(config);

const db = firebase.firestore();



const tobacoApi = {
  getTobacoItems(tobacoId) {
    return db.collection("HookahProducers").doc(tobacoId).get().then(res => res.data())

  }
}
const mixesApi = {

  getMixes() {
    db = firebase.firestore();
    const dbMixes = db.collection("HokahMixes")
    // const arrFind = [
    //   {
    //     name: "Alfacker",
    //     tobacoItems: ["Яблоко", "Мята"]
    //   },
    //   {
    //     name: "Adalia",
    //     tobacoItems: ["Яблоко"]
    //   }
    // ]
    // const addInQueryMix = async (docRef, name) => {


    //   const tobacoMixElement = {
    //     name: "",
    //     tobacoItems: []
    //   }
    //   await docRef.collection(name).get().then(snapshots => {
    //     tobacoMixElement.name = name;
    //     snapshots.forEach(e => {
    //       tobacoMixElement.tobacoItems.push(e.data())
    //     })
    //   })
    //   return tobacoMixElement
    // }
    // const findMix = async (e) => {



    //   const arrDocSnapshot = []
    //   await dbMixes.get().then(res => {
    //     res.forEach(res => {
    //       console.log(`Первый цикл: ${res.id}`)
    //       res.ref.collection(e.name).where("name", "in", e.tobacoItems).get().then(doc => {
    //         if (!(doc.empty)) {
    //           arrDocSnapshot.push(res.ref)
    //           const r = res.ref.listCollections()
    //           console.log(r)

    //         }

    //       })

    //     }
    //     )
    //   })

    //   console.log(arrDocSnapshot)
    //   return (arrDocSnapshot)
    // }





    return db.collection("HokahMixes").get().then(snapshot => {
      const arrMixes = [];
      snapshot.forEach(res => {
        arrMixes.push(res.data())

      })
      return arrMixes
    })

  }
}



