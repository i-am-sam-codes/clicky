const button = document.getElementById("button");
const body = document.body;

button.addEventListener("click", () => {
    body.style.background = changeColor();
    button.style.background = changeColor();

    spinImage();
});

function spinImage() {
    const imgElement = document.querySelector('#image'); 
    const newImg = imgElement.cloneNode(true);
    
    imgElement.parentNode.replaceChild(newImg, imgElement);
}

function changeColor() {
    const ran  = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += ran[Math.floor(Math.random() * 16)];
    }

    return color;
}