const products = [
    { id: 0, title: 'Remera', description: 'Lisa', price: 100, pictureURL: 'https://oliver1973.com/wp-content/uploads/2022/06/REMERA-WILSON-GRIS-MEL-MED-1-300x300.jpeg', category:'trenSuperior' },
    { id: 1, title: 'Remera', description: 'Estampada', price: 150, pictureURL: 'https://kiddiekustoms.com.ar/wp-content/uploads/2020/11/Rick-and-Morty-Opinion-Remera-Estampada_01.jpg', category:'trenSuperior' },
    { id: 2, title: 'Remera', description: 'Bordada', price: 125, pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_961429-MLA46712577051_072021-O.jpg', category:'trenSuperior' },
    { id: 3, title: 'Pantalon', description: 'Jean', price: 250, pictureURL: 'https://www.gamarra.com.pe/wp-content/uploads/2020/10/clasico-jean-colores-480x320.jpg', category:'trenInferior' },
    { id: 4, title: 'Pantalon', description: 'Friza', price: 200, pictureURL: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/342/958/products/jogging-nk-hombre-liso-portada1-c83ea560abe4e9acaf16170461964992-1024-1024.jpeg', category:'trenInferior' },
    { id: 6, title: 'Campera', description: 'Friza', price: 500, pictureURL: 'https://d22fxaf9t8d39k.cloudfront.net/a1404eb5625ce7553b5e4478621034d59b1e57b1e6a1b0654076e9dcf976800d65903.png', category:'trenSuperior' },
    { id: 7, title: 'Campera', description: 'Jean', price: 1000, pictureURL: 'https://lavaindumentaria.com.ar/wp-content/uploads/2020/09/Sin2-t%C3%ADtulo-1.jpg', category:'trenSuperior' },

]

export const getProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    })
    return promise;
}

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000);
    })
    return promise;
}

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId)
        setTimeout(() => {
            return resolve(results);
        }, 2000);
    })
    return promise;
}