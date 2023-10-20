import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getUser = async (idUser) => { 
    // const docRef = doc(CHEMIN)
    const docRef = doc(db, 'users', idUser)

    const docSnapshot = await getDoc(docRef)
    console.log("docSnapshot: ", docSnapshot)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        console.log("userReceived: ", userReceived)
    }
 }

 
// Quand une fonction retourne une promesse, cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2ème cas : résultat positif de la promesse achevée => résultat positif (fulfilled)
// 3ème cas : résultat négatif de la promesse achevée => résultat négatif (rejected)