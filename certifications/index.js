const imageContaierEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timeout;
prevEl.addEventListener("click", ()=>{
    x = x + 45;
    clearTimeout(timeout);
    updateGallery()
});

nextEl.addEventListener("click", ()=>{
    x = x - 45;
    clearTimeout(timeout);
    updateGallery()
});

function updateGallery(){
    imageContaierEl.style.transform = `perspective(1000px) rotateY(${x}deg)` ;
    timeout = setTimeout(()=>{
        x = x - 45
        updateGallery()
    }, 3000)
};

updateGallery()