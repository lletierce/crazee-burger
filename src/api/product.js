import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "./firebase-config"



// Avant, on lisait un document (getDoc sur users/{prénom}) qui contenait un tableau menu. 
// Maintenant, on lit une collection (getDocs sur products), où chaque produit est un document. 
// C’est le changement de modèle de fond : un catalogue commun au lieu d’une copie par utilisateur.

export const getMenu = async () => {
  const productsQuery = query(collection(db, "products"), orderBy("createdAt", "desc"))
  const snapshot = await getDocs(productsQuery)

  return snapshot.docs.map((document) => {
    const product = document.data()

    return {
      id: document.id,
      title: product.name,
      imageSource: product.imageUrl,
      price: product.price,
      isAvailable: product.isAvailable,
      isPublicised: product.isPromoted,
    }
  })
}
// La correspondance des noms se fait ici, et nulle part ailleurs. 
// Le back-office dit name, le client dit title : on traduit une seule fois, à l’entrée des données. 
// C’est pour ça qu’aucun composant (Menu, Card, BasketProducts…) ne change. 


// export const syncBothMenus = (userId, menuUpdated) => {
//   const cachette = doc(db, "users", userId)

//   const nourriture = {
//     username: userId,
//     menu: menuUpdated,
//   }
//   setDoc(cachette, nourriture)
// }

// export const getMenu = async (idUser) => {
//   //const docRef = doc(CHEMIN)
//   const docRef = doc(db, "users", idUser)

//   const docSnapshot = await getDoc(docRef)
//   if (docSnapshot.exists()) {
//     const { menu } = docSnapshot.data()
//     return menu
//   }
// }
