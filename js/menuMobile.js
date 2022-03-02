/*Pour le menu mobile,
je me suis permis d’utiliser quelques lignes de javascript 
langage que j’ai eu l’occasion de pratiquer. */

// on récupère le bouton mobile & les liens du menu
let toggleMenu = document.querySelectorAll('#menu-mobile-button, .menu-item a');
//on isole le bouton menu mobile pour agir dessus indépendamment
let boutonMenuMobile = toggleMenu[0];
//on récupère le menu en lui meme
let menuMobile = document.getElementById('header-menu-nav');

function get_viewport_width() {
    let viewport_width = window.innerWidth;
    return viewport_width;
}

// on ajouter un ecouteur d’évenement sur le bouton mobile & les liens du menu
for (let i = 0; i < toggleMenu.length; i++) {
    
    toggleMenu[i].addEventListener('click', function() {
    
        //quand on clique sur le bouton mobile, ajoute une classe au menu mobile pour qu’il s’affiche
        //on vérifie si la classe visible est présente
        is_visible = (menuMobile.classList.contains("visible"));
        
        //s’il y en a une, le menu est visible
        // le clic supprime la classe
        if (is_visible) {
            menuMobile.classList.remove("visible");
            boutonMenuMobile.innerHTML = '<span class="menu-icone"></span> MENU';
        }
        //s'il n’y a pas de classe, le menu est invisible
        //le clic ajoute la classe 
        else if (!is_visible && get_viewport_width() < 992) {
            menuMobile.classList.add("visible");
            boutonMenuMobile.innerHTML = '<span class="menu-icone menu-close"></span>FERMER';
        }
        
    });
    
}
