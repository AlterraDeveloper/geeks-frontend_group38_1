// capitalizeString("еВГЕНИЙ") -> "Евгений"

// charAt(0) + toUpperCase()
// slice + toLowerCase();

// const text = "Evgeniy";
// let result = "";
// for(let i = 0; i < text.length; i++){
//     if(i === 0){
//         result += text[i].toUpperCase()
//     }else{
//
//     }
// }

// DOM - Document Object Model
// Rendering (HTML + CSS)
// Parser (HTML + CSS) -> {} DOM

// console.log(document);

// DOM manipulations: search, remove, edit, create, event handling

// const button = document.getElementById("colorButton");
const button = document.querySelector("#colorButton");

// button.remove();

button.innerText = "Hello DOM";
// button.style.backgroundColor = "green";

// <div class="popup">Hello</div>
function buildPopup(text) {
    const div = document.createElement("div");
    div.innerText = text;
    div.className = "popup";
    return div;
}

function changeBackground(){
    const color = chroma.random();
    document.body.style.backgroundColor = color;
    button.innerText = color.toString().toUpperCase();

    // const popup = document.querySelector(".popup");
    // popup.remove();
}

function copyToClipboard(){
    const color = button.innerText;
    navigator.clipboard.writeText(color);
    const popup  = buildPopup("Copied!");
    document.body.append(popup);
    setTimeout(function (){
        popup.remove();
    }, 3000);
}

button.addEventListener("click", changeBackground);
button.onmouseleave = copyToClipboard;

// CDN - Content Delivery Network


