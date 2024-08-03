// Script pour initialiser le footer et l'email lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Mettre à jour l'année en cours dans le footer
  var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  // Configurer l’e-mail complet
  var userEmail = "hello"; // Partie locale de l'email
  var domain = "mikepixel.dev"; // Domaine de l'email
  var emailContainer = document.getElementById("email-link");
  emailContainer.innerHTML = `<a href="mailto:${userEmail}@${domain}">${userEmail}@${domain}</a>`;
  emailContainer
    .querySelector("a")
    .setAttribute("aria-label", "Envoyer un email"); // Amélioration de l'accessibilité
});

// Bouton pour remonter en haut de la page
window.onscroll = function () {
  var backToTopBtn = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

document.getElementById("backToTop").onclick = function () {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE, Edge et Opera
  document.body.focus(); // Pour éviter un bug de focus sur le bouton
};
