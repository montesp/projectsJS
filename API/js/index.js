const URL = "https://api.thedogapi.com/v1/images/search";


//Un boton para recargar la imagen
//Usar asyncs await

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const imageContainer  = document.getElementById("image-container");
        console.log(imageContainer)
        imageContainer.src = data[0].url;
    });