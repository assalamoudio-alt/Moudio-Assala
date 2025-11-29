// Message de bienvenue
window.onload = function() {
  alert("Bienvenue sur le site de Moudio Assala Serge !");
  afficherDate();
};

// Changer la couleur du fond
function changerFond() {
  const couleurs = ["#fef6e4", "#d1f7ff", "#f0e68c", "#e8f5e9"];
  const nouvelleCouleur = couleurs[Math.floor(Math.random() * couleurs.length)];
  document.body.style.backgroundColor = nouvelleCouleur;
}

// Afficher la date et l'heure
function afficherDate() {
  const maintenant = new Date();
  document.getElementById("date").innerHTML =
    "Nous sommes le " + maintenant.toLocaleDateString() +
    " et il est " + maintenant.toLocaleTimeString();
}

// Ajouter une nouvelle ligne au tableau
function ajouterLigne() {
  const table = document.getElementById("infoTable");
  const ligne = table.insertRow(-1);
  const celluleNom = ligne.insertCell(0);
  const celluleAge = ligne.insertCell(1);
  celluleNom.innerHTML = prompt("Entrez un nom :");
  celluleAge.innerHTML = prompt("Entrez un âge :");
}

// Écouteurs d’événements
document.getElementById("btnFond").addEventListener("click", changerFond);
document.getElementById("btnLigne").addEventListener("click", ajouterLigne);