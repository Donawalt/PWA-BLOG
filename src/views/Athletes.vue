<template>
  <div class="athletes">
    <section class="header">
      <img alt="" src="../assets/head.png">
    </section>
    <section class="body">
    <h1>Nos athlètes</h1>
    <div class="grid-container">
      <img alt="" src="../assets/athlete1.png">
      <img alt="" src="../assets/athlete2.png">
      <img alt="" src="../assets/athlete3.png">
      <img alt="" src="../assets/athlete4.png">
      <img alt="" src="../assets/athlete5.png">
      <img alt="" src="../assets/athlete6.png">
    </div>
    <h1>Faites parties de nos athletes</h1>
      <p>World Chase Tag ™ est toujours à la recherche de nouveaux athlètes pour participer à nos événements. Que vous soyez un individu ou une équipe (jusqu'à 5 personnes), nous voulons avoir de vos nouvelles.
      Vous pensez avoir ce qu'il faut? 
      Remplissez le formulaire ci-dessous et nous vous contacterons.
    </p>
    <form action="">
      <h2>Athlete individuel ou en équipe</h2>
      <input type="text">
      <h2>Nom et Prénom</h2>
      <input type="text">
      <h2>Adresse email</h2>
      <input type="text">
      <h2>Pays et Ville</h2>
      <input type="text">
      <h2>Liens vers vos vidéos (veuillez en fournir au moins une)</h2>
      <p>Ce que nous voulons voir:
        - La vitesse
        - Agilité
        - Capacité à négocier des obstacles

        Ce que nous voulons vraiment voir:
        Images de vous impliqué dans une poursuite de 20 secondes.

        Trouvez un endroit sympa.
        Trouvez quelqu'un pour vous poursuivre.
        Enregistrez-le.
        Mettez-le en ligne.
        Envoyez-nous le lien.
        Facile.
      </p>
      <input type="text">
      <h2>Je dois participer car...</h2>
      <input type="text" class="input-big">
      <h2></h2>
      <input type="button" value="M'inscrire" class="button">
    </form>
  </section>
  </div>
</template>

<style scoped lang="scss">
body {
  
  h1 {
    font-size: $title-section_size;
    line-height: 35px;
    font-weight: bold;
    margin-bottom: 32px;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 8px;
    margin-top: 16px;



  }
  p {
    width: 730px;
    font-size: 15px;
    margin-left: 27%;
    font-weight: bold;
    margin-bottom: 32px;

  }
  .grid-container {
    margin-left: 27%;
    grid-gap: 16px;
    width: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ". . ." ". . .";
    margin-bottom: 60px;
  }

  input {
    width: 300px;
    height: 24px;
  }
  .input-big {
    height: 70px;
  }
  .button {
    border: 1px solid #FF1313;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: transparent;
    color: white;
  }
}
</style>