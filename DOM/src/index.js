/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

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
        price.textContent = element.price;
        price.className = 'price-card'

        const titleContainer = document.createElement('div')
        titleContainer.append(title, price)
        titleContainer.className = 'title-card-container'

        const container = document.createElement('div');
        container.append(titleContainer , img);
        container.className = 'card-container'


        // document.body.appendChild(container)
        items.push(container)

    });

    appNode.append(...items);
});