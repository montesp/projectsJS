const URL = "https://api.thedogapi.com/v1/images/search";
const button = document.getElementById("button");

button.addEventListener('click', () => {
    getDogImage(URL);
})

async function getDogImage(url){
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        const imageContainer  = document.getElementById("image-container");
        console.log(imageContainer)
        imageContainer.src = data[0].url;
    });
}
//Un boton para recargar la imagen
//Usar asyncs await
getDogImage(URL);
