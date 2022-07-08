let images = document.getElementsByClassName('imagesCarroussel')
slideToDisplay = 0;
let boutons = document.getElementsByClassName('iconesCarroussel');

function showSlide(){
    for (let indice = 0; indice < images.length; indice++){
        if(indice == slideToDisplay) {
            images[indice].style.display = "block";
        }
        else{
            images[indice].style.display = "none";
        }
    }

    for(let indice=0; indice<boutons.length; indice++){

        console.log(boutons[slideToDisplay])

        if(indice==slideToDisplay){
            boutons[indice].classList.add("active");
        }
        else{
            boutons[indice].classList.remove("active");
        }
    }

    if(slideToDisplay==images.length-1){
        slideToDisplay = 0;
    }
    else{
        slideToDisplay++;
    }

    for(let indice=0; indice<boutons.length; indice++){

        boutons[indice].addEventListener("click", function(){

            slideToDisplay=indice;
    
            for(let indiceSlide=0; indiceSlide<images.length; indiceSlide++){
                if (indiceSlide==slideToDisplay){
                    images[indiceSlide].style.display="block";
                    boutons[indiceSlide].classList.add("active");
                }
                else{
                    images[indiceSlide].style.display="none";
                    boutons[indiceSlide].classList.remove("active");
                }
    
            }
        })
    }
    setTimeout(showSlide, 2500)
}
showSlide()

