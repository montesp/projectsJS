const URL = "https://api.thedogapi.com/v1/images/search?limit=6&api_key=live_NFimpQ2CBVkNM9eRyX35O6KkYkF5lYTFBTR92SWrKDVXlblL7d4HXw1nHQ9YQwSm";
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
    const imageContainer4  = await document.getElementById("image-container4");
    const imageContainer5  = await document.getElementById("image-container5");
    const imageContainer6  = await document.getElementById("image-container6");

    imageContainer1.src = data[0].url;
    imageContainer2.src = data[1].url;
    imageContainer3.src = data[2].url;
    imageContainer4.src = data[3].url;
    imageContainer5.src = data[4].url;
    imageContainer6.src = data[5].url;

}

getDogImage(URL);
