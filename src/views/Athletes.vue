<template>
  <div class="athletes">
    <section class="header">
      <img alt src="../assets/head.png" />
    </section>
    <section class="body">
      <h1>Nos athlètes</h1>
      <div class="grid-container">
        <div class="overlay">
          <img alt src="../assets/athlete1.png" />
          <div class="text">
            <p>Frank Stelton</p>
            <p>USA</p>
          </div>
        </div>
        <div class="overlay">
          <img alt src="../assets/athlete2.png" />
          <div class="text">
            <p>Carl Izlo</p>
            <p>Allemagne</p>
          </div>
        </div>
        <div class="overlay">
          <img alt src="../assets/athlete3.png" />
          <div class="text">
            <p>Charles-André Demé</p>
            <p>France</p>
          </div>
        </div>
        <div class="overlay">
          <img alt src="../assets/athlete4.png" />
          <div class="text">
            <p>Ben Tisyaou</p>
            <p>USA</p>
          </div>
        </div>
        <div class="overlay">
          <img alt src="../assets/athlete5.png" />
          <div class="text">
            <p>Camila Vargas</p>
            <p>Russie</p>
          </div>
        </div>
        <div class="overlay">
          <img alt src="../assets/athlete6.png" />
          <div class="text">
            <p>Dominic Yeou</p>
            <p>Maroc</p>
          </div>
        </div>
      </div>
      <h1>Faites parties de nos athletes</h1>
      <p>
        World Chase Tag ™ est toujours à la recherche de nouveaux athlètes pour participer à nos événements. Que vous soyez un individu ou une équipe (jusqu'à 5 personnes), nous voulons avoir de vos nouvelles.
        Vous pensez avoir ce qu'il faut?
        Remplissez le formulaire ci-dessous et nous vous contacterons.
      </p>
      <form action>
        <h2>Athlete individuel ou en équipe</h2>
        <div class="input-form">
          <input type="text" />
          <h2>Nom et Prénom</h2>
        </div>
        <div class="input-form">
          <input type="text" />
          <h2>Adresse email</h2>
        </div>
        <div class="input-form">
          <input type="text" />
          <h2>Pays et Ville</h2>
        </div>
        <div class="input-form">
          <input type="text" />
          <h2>Liens vers vos vidéos</h2>
        </div>
        <p>(veuillez en fournir au moins une)</p>
        <div class="rules">
          <p>Ce que nous voulons voir:</p>
          <p>- La vitesse</p>
          <p>- Agilité</p>
          <p>- Capacité à négocier des obstacles</p>
        </div>
        <div class="rules">
          <div class="input-form">
            <p>Ce que nous voulons vraiment voir:</p>
            <p>Images de vous impliqué dans une poursuite de 20 secondes.</p>
            <p>Trouvez un endroit sympa.</p>
            <p>Trouvez quelqu'un pour vous poursuivre.</p>
            <p>Enregistrez-le.</p>
            <p>Mettez-le en ligne.</p>
            <p>Envoyez-nous le lien.</p>
            <p>Facile.</p>
          </div>

          <input type="text" />
        </div>
        <div class="input-form">
          <h2>Je dois participer car...</h2>
          <input type="text" class="input-big" />
        </div>
        <h2></h2>
        <input type="button" value="M'inscrire" class="button" />
      </form>
    </section>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  margin-left: $margin-content;
  margin-right: $margin-content;
  h1{
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
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 32px; 
    text-align: left;
    line-height: 20px;
  }
  iframe{
    margin: auto;
  }
  form{
    width: 80%;
    margin: auto;
  }
  .grid-container {
    grid-gap: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ". . ." ". . .";
    margin-bottom: 60px;

    img {
      position: relative;
    }
    .text {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: #fff;
      opacity: 0;
    }

    .text:hover {
      transition: all 0.8s ease;
      background: rgba(0, 0, 0, 0.6);
      opacity: 1;
    }
    .overlay:hover {
      cursor: pointer;
    }
    div:hover div {
      visibility: visible;
      opacity: 0.7;
    }
  }

  .input-form {
    text-align: left;
    margin-top: 10px;
    .rules {
      text-align: left;
      margin-left: 10%;
      margin-top: 10px;
      p {
        margin-bottom: 4px;
      }
    }
  }
  input {
    width: 100%;
    height: 24px;
  }
  .input-big {
    height: 70px;
  }
  .button {
    border: 1px solid #ff1313;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: transparent;
    color: white;
    margin-bottom: 20px;
  }
}
</style>