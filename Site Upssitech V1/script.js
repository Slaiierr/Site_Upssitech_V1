alert("Bienvenue sur notre page Web !");

function foncBlack() {
  document.querySelector("body").classList.remove("black")
  document.querySelector("body").classList.remove("init")
  document.querySelector("body").classList.add("red")
}

function foncRed() {
  document.querySelector("body").classList.remove("red")
  document.querySelector("body").classList.remove("init")
  document.querySelector("body").classList.add("black")
}

function foncInit() {
  document.querySelector("body").classList.remove("red")
  document.querySelector("body").classList.remove("black")
  document.querySelector("body").classList.add("init")
}

function foncSurvolEntree() {
  document.querySelector("#btn_cache").style.color("red")
}

function foncSurvolSortie() {
  document.querySelector("#btn_cache").style.color("init")
}

function foncYellow() {
  document.querySelector("#titre_haut_page_1").classList.add("yellow")
};

// Récupérer la référence de la barre de navigation
const nav = document.querySelector("nav");

// Récupérer la position de la barre de navigation
const topOfNav = nav.offsetTop;

// Ajouter une fonction pour détecter le défilement de la page
function fixNav() {
  // Vérifier si le défilement de la page dépasse la position de la barre de navigation
  if (window.scrollY >= topOfNav) {
    // Ajouter la classe "fixed-nav" pour changer la position de la barre de navigation
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    // Supprimer la classe "fixed-nav" pour restaurer la position initiale de la barre de navigation
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

// Écouter l'événement de défilement de la page
window.addEventListener("scroll", fixNav);