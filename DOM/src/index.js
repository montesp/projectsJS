const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

// Web API Intl
const formatPrice = price => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}
// web api

//Conectarse al server
window.fetch(`${baseUrl}/api/avo`)
// Procesar la respuesta y convertirla en JSON
.then(response => response.json())
// JSON -> Data -> Renderizar info brouse
.then(response => {
    const items = []

    response.data.forEach(element => {
        //Crear imagen
        const img = document.createElement('img');
        img.src = `${baseUrl}${element.image}`;
        img.className = "img-card";

        //Crear titulo
        const title = document.createElement('h2');
        title.textContent = element.name;
        // title.style.fontSize = '2.5rem'
        // title.className = 'text-2xl text-red-600';
        title.className ='title-card'

        //Crear precio
        const price = document.createElement('p');
        price.textContent = formatPrice(element.price);
        price.className = 'price-card';

        const description = document.createElement('p');
        description.textContent= element.attributes.description ;
        description.className = 'card-description';
        // console.log(element.attributes.description)

        const titleContainer = document.createElement('div')
        titleContainer.append(title, price)
        titleContainer.className = 'title-card-container'

        const container = document.createElement('div');
        container.append(titleContainer , img, description);
        container.className = 'card-container'


        // document.body.appendChild(container)
        items.push(container)

    });

    appNode.append(...items);
});