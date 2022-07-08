let imgProduit1 = document.getElementById('imgProduit1');
let imgProduit2 = document.getElementById('imgProduit2');
let imgProduit3 = document.getElementById('imgProduit3');
let imgProduitPrincipale = document.getElementById('section2');

imgProduit1.addEventListener('mouseenter',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/darsasuke2.png">';
})

imgProduit2.addEventListener('mouseenter',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/darksasuke1.png">';
})

imgProduit3.addEventListener('mouseenter',function a(){
    imgProduitPrincipale.innerHTML = '<img src="./images/darksasuke3.png">"'
})