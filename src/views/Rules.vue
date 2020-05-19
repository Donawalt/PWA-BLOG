<template>
  <div class="rules">
    <section class="header">
      <img alt src="../assets/head.png" />
    </section>
    <section class="body">
      <h1>Les règles</h1>
      <h2>CHASE TAG™ </h2>
      <p>C'est notre format le plus populaire et utilisé lors de nos principaux événements (par exemple WCT2, WCT3, etc.)
      C'est un format d'équipe qui est joué par deux équipes et chaque équipe a un maximum de cinq athlètes.
      Chaque match consiste en un nombre prédéterminé de poursuites (généralement 16 poursuites).
      Chaque poursuite dure vingt secondes et a un athlète de chaque équipe - l'un est le Chaser et l'autre est l'Evader.
      L'athlète vainqueur dans chaque poursuite reste actif tandis que l'esquive et l'athlète perdant se détachent et sont remplacés par un coéquipier qui devient le chasseur lors de la prochaine phase.
      Une équipe obtient un point lorsque son athlète réussit à échapper à son adversaire pendant toute la durée de la poursuite (soit 20 secondes).
      L'équipe avec le plus de points après le nombre prédéterminé de poursuites remporte le match.
      Les étiquettes doivent être faites avec la main (c'est-à-dire PAS avec votre pied).
      Si un athlète sort des limites, il perd cette poursuite.
      Le jeu dangereux est interdit.</p>

      <p>Pour un aperçu, regardez la vidéo suivante : </p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/_xxfFsWpTuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <h2>CHASE TAG™ - Team MATCHPLAY™</h2>
      <p>Chaque équipe comprend jusqu'à 5 joueurs. Les matchs sont divisés en tours. Chaque tour a 2 poursuites de 20 secondes et est contesté par un joueur de chaque équipe. Tout d'abord, le joueur A poursuit le joueur B, puis le joueur B poursuit le joueur A. Celui qui marque son adversaire le plus rapidement remporte la manche et obtient un point pour son équipe. Si un tour se termine par un match nul, aucune équipe ne marque de point. Après un nombre prédéterminé de tours, l'équipe avec le plus de points gagne.</p>

      <h2>CHASE TAG™ - SINGLES Matchplay™</h2>
      <p>Il y a deux athlètes dans chaque match. Le vainqueur est le premier athlète à cumuler 10 points et il / elle doit être à deux points de son adversaire. Le match se joue par tours. Chaque manche se compose de deux périodes où chaque athlète à son tour est le tag. Chaque période dure 20 secondes ou jusqu'à ce que le tag touche l'Evader. Un point est marqué pour une étiquette réussie et un point supplémentaire est marqué par l'athlète qui remporte la manche (c'est-à-dire l'athlète qui a marqué une étiquette réussie dans le temps le plus bas).</p>

      <h2>CHASE TAG™ - Singles Sudden Death CHase off™</h2>
      <p>Il y a deux athlètes dans chaque match. Les matchs sont divisés en tours. Chaque manche a 2x poursuites de 20 secondes où les athlètes alternent comme chasseur et évader. L'athlète qui élude le plus longtemps dans la manche remporte le match. Si un tour se termine par un match nul / égalité, un deuxième tour est joué jusqu'à ce qu'il y ait un vainqueur. Le gagnant passe au tour suivant, le perdant est éliminé de la compétition.</p>

      <h2>CHASE TAG™ - Flight club - Singles WINNER-STAYS-ON™ </h2>
      <p>Peut être joué par n'importe quel nombre d'athlètes à partir de 2. Le match dure une période de temps ou un nombre de tours prédéterminé. Chaque tour a un chasseur et un évader et dure 20 secondes, ou jusqu'à ce que le tag touche l'Evader. L'athlète vainqueur dans chaque poursuite reste en tant qu'évasion. Les athlètes reçoivent 0 point pour un tag et 1 point pour une évasion réussie. L'athlète avec le plus de points après une période de temps donnée, ou un nombre de tours, gagne.</p>

      <h2>Ultimate Tag™ - MULTIPLAYER™</h2>
      <p>Il y a quatre athlètes dans chaque match. Les matchs se composent de 4 rounds de 40 secondes. Chaque tour commence avec un athlète différent sur Tag. L'athlète avec le plus petit Tag-Time accumulé gagne. Si un athlète sort des limites, il est considéré comme «Tagged».</p>


    </section>
  </div>

</template>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: auto;
  margin-left: auto;
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
  }
}
</style>
