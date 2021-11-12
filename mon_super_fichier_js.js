/*Pour le menu mobile,
je me suis permis d’utiliser quelques lignes de javascript 
langage que j’ai eu l’occasion de pratiquer. */

// on récupère le bouton mobile 
let boutonMobile = document.getElementById('menu-mobile-button');
//on récupère le menu
let menuMobile = document.getElementById('header-menu-nav');

// on ajouter un ecouteur d’évenement sur le bouton mobile
boutonMobile.addEventListener('click', function() {

    //quand on clique sur le bouton mobile, ajoute une classe au menu mobile pour qu’il s’affiche
    //on récupère le nombre de class css du menu
    longueur = (menuMobile.classList.length);
    console.log(longueur);
    
    //s’il y en a une, le menu est visible
    // le clic supprime la classe
    if (longueur == 1) {
        menuMobile.classList.remove("visible");
        boutonMobile.innerHTML = '<span class="menu-icone"></span> MENU';
    }
    //s'il n’y a pas de classe, le menu est invisible
    //le clic ajoute la classe 
    else if (longueur == 0) {
        menuMobile.classList.add("visible");
        boutonMobile.innerHTML = '<span class="menu-icone menu-close"></span>FERMER';
    }
    
});


