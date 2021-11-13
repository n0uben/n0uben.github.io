/*Pour le menu mobile,
je me suis permis d’utiliser quelques lignes de javascript 
langage que j’ai eu l’occasion de pratiquer. */

// on récupère le bouton mobile & les liens du menu
let toggleMenu = document.querySelectorAll('#menu-mobile-button, .menu-item a');
let boutonMenuMobile = toggleMenu[0];
//on récupère le menu
let menuMobile = document.getElementById('header-menu-nav');

// on ajouter un ecouteur d’évenement sur le bouton mobile & les liens du menu
longueur = toggleMenu.length

for (let i = 0; i < longueur; i++) {
    
    toggleMenu[i].addEventListener('click', function() {
    
        //quand on clique sur le bouton mobile, ajoute une classe au menu mobile pour qu’il s’affiche
        //on récupère le nombre de class css du menu
        is_visible = (menuMobile.classList.contains("visible"));
        
        //s’il y en a une, le menu est visible
        // le clic supprime la classe
        if (is_visible) {
            menuMobile.classList.remove("visible");
            boutonMenuMobile.innerHTML = '<span class="menu-icone"></span> MENU';
        }
        //s'il n’y a pas de classe, le menu est invisible
        //le clic ajoute la classe 
        else {
            menuMobile.classList.add("visible");
            boutonMenuMobile.innerHTML = '<span class="menu-icone menu-close"></span>FERMER';
        }
        
    });
    
}
