
const API_KEY = 'api_key=live_NFimpQ2CBVkNM9eRyX35O6KkYkF5lYTFBTR92SWrKDVXlblL7d4HXw1nHQ9YQwSm';
const API = 'https://api.thedogapi.com/v1';


// Boton para recargar las imagenes
const button = document.getElementById("button");
const spanError = document.getElementById("error")


button.addEventListener('click', () => {
    getDogImages(`${API}/images/search?limit=6&${API_KEY}`);
})

async function getDogImages(url) {
    // console.log(url)
    const res = await fetch(url);
    const data = await res.json();

    console.log(res)
    console.log(data)


    if (res.status !== 200) {
        spanError.innerHTML = "Hubo error " + res.status;
    } else {
        const imageContainer1 = document.getElementById("image-container1");
        const imageContainer2 = document.getElementById("image-container2");
        const imageContainer3 = document.getElementById("image-container3");
        const imageContainer4 = document.getElementById("image-container4");
        const imageContainer5 = document.getElementById("image-container5");
        const imageContainer6 = document.getElementById("image-container6");
        const btn1 = document.getElementById('save-button1');
        const btn2 = document.getElementById('save-button2');
        const btn3 = document.getElementById('save-button3');
        const btn4 = document.getElementById('save-button4');
        const btn5 = document.getElementById('save-button5');
        const btn6 = document.getElementById('save-button6');

        imageContainer1.src = data[0].url;
        imageContainer2.src = data[1].url;
        imageContainer3.src = data[2].url;
        imageContainer4.src = data[3].url;
        imageContainer5.src = data[4].url;
        imageContainer6.src = data[5].url;

        btn1.onclick = () => saveFavouriteDog(API,data[0].id);
        btn2.onclick = () => saveFavouriteDog(API,data[1].id);
        btn3.onclick = () => saveFavouriteDog(API,data[2].id);
        btn4.onclick = () => saveFavouriteDog(API,data[3].id);
        btn5.onclick = () => saveFavouriteDog(API,data[4].id);
        btn6.onclick = () => saveFavouriteDog(API,data[5].id);
    }
}

async function getFavoritesDogImages(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)

    const errorFavourites = document.getElementById('favourites_dogs--error');
    
    if (res.status !== 200) {
        const text = document.createTextNode("No se encontraron perros favoritos");
        errorFavourites.appendChild(text);
    } else {
        const render = [];
        const section = document.getElementById('favorite-dogs');
        section.innerHTML = "";

        data.forEach( dog => {
            // Article
            const cardImageContainer = document.createElement('article');
            // Figure
            const dogImageContainer = document.createElement('figure');
            // Imagen
            const image = document.createElement('img');
            // Button container
            const buttonContainer = document.createElement('div');
            // Button
            const button = document.createElement('button');
            const btnText = document.createTextNode("Quitar");

            // Añadirle clases a los botones
            cardImageContainer.className = "card_image__container";
            dogImageContainer.className = "dog_image__container";
            button.className = "saved__button";
            buttonContainer.className = "button__container";
            // console.log(dog.id)
            button.addEventListener('click', () => {
                deleteFavouriteDog(dog.id)
            })
            
            button.appendChild(btnText);
            buttonContainer.appendChild(button);
            dogImageContainer.appendChild(image);

            image.src =  dog.image.url;
            cardImageContainer.append(dogImageContainer, buttonContainer);

            render.push(cardImageContainer);
        })

        section.append(...render);
    }
}

async function saveFavouriteDog(api, id) {
    const res = await fetch(`${api}/favourites?${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    const data = await res.json();


    if (res.status !== 200) {
        spanError.innerHTML = `Hubo error ${res.status} ${data.message}`
    } else {
        console.log("Se ha guardado el perro con exito!");
        getFavoritesDogImages(`${API}/favourites?${API_KEY}`);
    }

}

async function deleteFavouriteDog(id){
    const res = await fetch(`${API}/favourites/${id}?${API_KEY}`, {
        method: 'DELETE',
    });

    const data = await res.json();
    if(res.status === 200){
        console.log("Eliminado con exito");
        getFavoritesDogImages(`${API}/favourites?${API_KEY}`);
    } else {
        console.error('NO se pudo eliminar');
    }


}

getDogImages(`${API}/images/search?limit=6&${API_KEY}`);
getFavoritesDogImages(`${API}/favourites?${API_KEY}`);
