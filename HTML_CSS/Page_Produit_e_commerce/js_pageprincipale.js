let imgProduit1 = document.getElementById('imgProduit1');
let imgProduit2 = document.getElementById('imgProduit2');
let imgProduit3 = document.getElementById('imgProduit3');
let imgProduitPrincipale = document.getElementById('section2');

imgProduit1.addEventListener('mouseenter',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/pcgamer4.png">';
    imgProduitPrincipale.style.marginTop = "6.5rem";
})

imgProduit2.addEventListener('mouseenter',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/darksasuke1.png">';
})

imgProduit3.addEventListener('mouseenter',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/darksasuke3.png">'
})

imgProduit1.addEventListener('mouseout',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/pcgamer.png">';    
    imgProduitPrincipale.style.marginTop = "0rem";
})

imgProduit2.addEventListener('mouseout',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/pcgamer.png">';
})

imgProduit3.addEventListener('mouseout',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/pcgamer.png">'
})