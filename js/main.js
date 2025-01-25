// User input

let email = prompt("Please, enter your email address.");

if (email) {
  // Vérification de la validité de l'email
  if (email.includes("@")) {
    console.log("Adresse valide");
  } else {
    console.log("Adresse invalide");
  }

  // Affichage de la longueur avant et après trim
  console.log("Longueur avant trim : " + email.length);
  console.log("Longueur après trim : " + email.trim().length);
  console.log("Email après trim : " + email.trim());
} else {
  console.log("Vous n'avez pas entré d'adresse email.");
}
