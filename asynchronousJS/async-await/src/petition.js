import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[11].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log('product: ', product)
        console.log('product title: ', product.title)
        console.log('category: ', category.name)
    } catch (error) {
        console.error(error);
    }
}

anotherFn(API);