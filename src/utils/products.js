import { doc, getFirestore, getDoc, getDocs, collection, query, where, addDoc } from 'firebase/firestore'

export const getProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
}

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if (snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        }
        return item;
      }
    })
    .catch(error => console.warn(error))
}

export const getProductsByCategory = (categoryId) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  return getDocs(collectionQuery)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
}

// export const createAllProducts = async () => {
//   try {
//     const database = getFirestore();
//     const collectionReference = collection(database, 'items');
//     for (const product of products) {
//       const snapshot = await addDoc(collectionReference, product)

//     }
//   } catch (error) {
//     console.warn(error)
//   }
// }