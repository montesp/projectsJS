const URL = "https://api.thedogapi.com/v1/images/search?limit=3";
const button = document.getElementById("button");


button.addEventListener('click', () => {
    getDogImage(URL);
})

async function getDogImage(url){
    const res = await fetch(url);
    const data = await res.json();
    const imageContainer1  = await document.getElementById("image-container1");
    const imageContainer2  = await document.getElementById("image-container2");
    const imageContainer3  = await document.getElementById("image-container3");

    console.log(data)
    imageContainer1.src = data[0].url;
    imageContainer2.src = data[1].url;
    imageContainer3.src = data[2].url;
}

getDogImage(URL);
