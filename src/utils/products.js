const products = [
    {id:0, title:'Remera', description: 'Lisa', price:100, pictureURL:'https://oliver1973.com/wp-content/uploads/2022/06/REMERA-WILSON-GRIS-MEL-MED-1-300x300.jpeg'},
    {id:1, title:'Remera', description: 'Estampada', price:150, pictureURL:'https://kiddiekustoms.com.ar/wp-content/uploads/2020/11/Rick-and-Morty-Opinion-Remera-Estampada_01.jpg'},
    {id:2, title:'Pantalon', description: 'Jean', price:250, pictureURL:'https://www.gamarra.com.pe/wp-content/uploads/2020/10/clasico-jean-colores-480x320.jpg'},
    {id:3, title:'Pantalon', description: 'Friza', price:200, pictureURL:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/342/958/products/jogging-nk-hombre-liso-portada1-c83ea560abe4e9acaf16170461964992-1024-1024.jpeg'},
    {id:4, title:'Campera', description: 'Friza', price:500, pictureURL:'https://d22fxaf9t8d39k.cloudfront.net/a1404eb5625ce7553b5e4478621034d59b1e57b1e6a1b0654076e9dcf976800d65903.png'}
]

export const getProducts = ()=>{
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);  
        });
    })
    return promise;
}

export const getProduct = (id)=>{
    const promise = new Promise((resolve) => {
        const result = products.find((product)=>product.id===id)
        setTimeout(() => {
            resolve(result);  
        });
    })
    return promise;
}