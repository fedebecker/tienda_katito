import { addDoc, getFirestore, collection, getDocs, getDoc} from 'firebase/firestore'


export const createOrder = (newOrder) => {
    const database = getFirestore();
    const collectionReference = collection(database, 'orders');

    
    return addDoc(collectionReference, newOrder)
    .then((snapshot) => snapshot.id)
    .catch(error => console.warn(error))
}

export const getOrders = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'orders');

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

export const getOrder = (id) => {
    const database = getFirestore();
    const itemReference = collection(database, 'orders', id);

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


