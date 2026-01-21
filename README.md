<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Moudio Assala</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Cinzel+Decorative:700" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <h1>MOUDIO ASSALA SERGE ARNAULD</h1>
    <h2>Bienvenue dans mon site web</h2>
  </header>

  <main>
    <section id="about">
      <p>
        Je m'appelle <strong>MOUDIO ASSALA SERGE ARNAULD</strong>, étudiant en génie logiciel niveau BTS1.  
        L'informatique est une science qui me passionne beaucoup, d'où mon choix de filière.
      </p>
    </section>

    <section id="hobbies">
      <h2>Mes hobbies</h2>
      <ul>
        <li>La programmation</li>
        <li>Le football</li>
        <li>La musique classique</li>
        <li>Les jeux vidéos</li>
      </ul>
    </section>

    <section id="photo">
      <h2>Voici une brève photo de moi</h2>
      <img src="images/photo.jpg" alt="Photo de Moudio Assala Serge" class="centre">
    </section>

    <section id="info">
      <h2>Tableau d'informations</h2>
      <table id="infoTable">
        <tr>
          <th>Nom</th>
          <th>Âge</th>
        </tr>
        <tr>
          <td>Moudio Assala Serge</td>
          <td>25</td>
        </tr>
      </table>
    </section>

    <section id="contact">
      <a href="mailto:assalamoudio@gmail.com" class="email">Envoyez-moi un email</a>
    </section>

    <section id="actions">
      <button id="btnFond">Changer la couleur du fond</button>
      <button id="btnLigne">Ajouter une ligne au tableau</button>
      <p id="date"></p>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 - Moudio Assala</p>
  </footer>

  <script src="javascript/script.js"></script>
</body>
</html>
