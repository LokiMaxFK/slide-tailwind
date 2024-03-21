const slider = document.querySelector("#slider");
const childsSlider = [...slider.querySelectorAll("figure")];
const nextButton = slider.querySelector("[data-button='next']");
const prevButton = slider.querySelector("[data-button='prev']");
const lengthImages = childsSlider.length;

// Agregar un ID a las imagenes.
childsSlider.forEach(function(child, index){
    child.dataset.idSlider = index;
});


nextButton.addEventListener("click", function(e){
    
    let currentImageActive = getCurrentImage();
    let currentActiveIndex = currentImageActive.dataset.idSlider;
    currentActiveIndex++;

    if(currentActiveIndex >= lengthImages){
        currentActiveIndex = 0;
    }

    const newActiveElement = childsSlider[currentActiveIndex];

    addNewActiveElement(newActiveElement);
    removeActiveElement(currentImageActive);

});

prevButton.addEventListener("click", function(e){


    let currentImageActive = getCurrentImage();
    let currentActiveIndex = currentImageActive.dataset.idSlider;
    currentActiveIndex--;

    if(currentActiveIndex < 0){
        console.log("Regresamos al primer elemento");
        currentActiveIndex = lengthImages-1;
    }

    const newActiveElement = childsSlider[currentActiveIndex];
    addNewActiveElement(newActiveElement);
    removeActiveElement(currentImageActive);
});


// obtener el valor actual del idSlider e imagen actual
function getCurrentImage(){
    const currentImage = slider.querySelector("[data-active]");

    return currentImage;
}


// eliminar el elemento actual con data active
function removeActiveElement(element){
    element.removeAttribute("data-active");
}

// Agregar dataactive a un elemento
function addNewActiveElement(element){
    element.setAttribute("data-active", "");
}
