const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.getFindMixes = functions.https.onCall(async (data, context) => {
    const getBlender = data;
    const findMixes = []
    await admin.firestore().collection('HokahMixes').get().then(snapshot => {

        snapshot.forEach(res => {
            const doc = res.data()
            let sameMix = true
            for (let key in getBlender) {
                if (sameMix) {
                    const equalTobaco = doc[getBlender[key].name]
                    if (equalTobaco) {
                        const blenderItems = getBlender[key].tobacoItems
                        for (let i = 0; i < blenderItems.length; i++) {
                            if (equalTobaco[blenderItems[i]]) {

                                findMixes.push(doc)
                                sameMix = false
                                break
                            }
                        }

                    }
                } else {
                    break
                }

            }

        })
        console.log(findMixes)
        return;
    })
        .catch(err => {
            console.log('Error getting documents', err);
        });

    return findMixes

});
