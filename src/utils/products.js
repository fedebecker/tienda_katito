import { doc, getFirestore, getDoc, getDocs, collection, query, where } from 'firebase/firestore'

const products = [
    { id: 0, title: 'Remera', description: 'Lisa', price: 100, pictureURL: 'https://oliver1973.com/wp-content/uploads/2022/06/REMERA-WILSON-GRIS-MEL-MED-1-300x300.jpeg', category: 'superior', stock:'number' },
    { id: 1, title: 'Remera', description: 'Estampada', price: 150, pictureURL: 'https://kiddiekustoms.com.ar/wp-content/uploads/2020/11/Rick-and-Morty-Opinion-Remera-Estampada_01.jpg', category: 'superior', stock:'number' },
    { id: 2, title: 'Remera', description: 'Bordada', price: 125, pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_961429-MLA46712577051_072021-O.jpg', category: 'superior', stock:'number' },
    { id: 3, title: 'Pantalon', description: 'Jean', price: 250, pictureURL: 'https://www.gamarra.com.pe/wp-content/uploads/2020/10/clasico-jean-colores-480x320.jpg', category: 'inferior', stock:'number' },
    { id: 4, title: 'Pantalon', description: 'Friza', price: 200, pictureURL: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/342/958/products/jogging-nk-hombre-liso-portada1-c83ea560abe4e9acaf16170461964992-1024-1024.jpeg', category: 'inferior', stock:'number' },
    { id: 6, title: 'Campera', description: 'Friza', price: 500, pictureURL: 'https://d22fxaf9t8d39k.cloudfront.net/a1404eb5625ce7553b5e4478621034d59b1e57b1e6a1b0654076e9dcf976800d65903.png', category: 'superior', stock:'number' },
    { id: 7, title: 'Campera', description: 'Jean', price: 1000, pictureURL: 'https://lavaindumentaria.com.ar/wp-content/uploads/2020/09/Sin2-t%C3%ADtulo-1.jpg', category: 'superior', stock:'number' },

]

export const getProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    return getDocs(collectionReference)
    .then(snapshot=>{
      const list = snapshot
      .docs
      .map((doc)=>({
        id:doc.id,
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
    .then(snapshot=>{
      if(snapshot.exists()){
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
    console.log(categoryId);
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where('category', '==', categoryId))
    return getDocs(collectionQuery)
    .then(snapshot=>{
      const list = snapshot
      .docs
      .map((doc)=>({
        id:doc.id,
        ...doc.data()
      }));
      return list;
    })
    .catch(error => console.warn(error))
}