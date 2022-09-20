const URL = "https://api.thedogapi.com/v1/images/search";
const button = document.getElementById("button");

button.addEventListener('click', () => {
    getDogImage(URL);
})

async function getDogImage(url){
    const res = await fetch(url);
    const data = await res.json();
    const imageContainer  = await document.getElementById("image-container");
    console.log(imageContainer)
    imageContainer.src = data[0].url;

}

getDogImage(URL);
