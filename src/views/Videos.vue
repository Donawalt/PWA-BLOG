<template>
  <div class="videos">
    <section class="header">
      <img alt src="../assets/head.png" />
    </section>
    <section class="body">
    <h1>Les videos</h1>
      <div class="grid-container">
        <iframe
        width="176"
        height="176"
        src="https://www.youtube.com/embed/miiVpTdcsrU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
        <iframe
          width="176"
          height="176"
          src="https://www.youtube.com/embed/fFgT9vt2sJM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <iframe
          width="176"
          height="176"
          src="https://www.youtube.com/embed/6CDNKNaxJSA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <iframe
          width="176"
          height="176"
          src="https://www.youtube.com/embed/mgwNlAHYMt8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe><iframe
        width="176"
        height="176"
        src="https://www.youtube.com/embed/miiVpTdcsrU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
        <iframe
          width="176"
          height="176"
          src="https://www.youtube.com/embed/fFgT9vt2sJM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <iframe
          width="176"
          height="176"
          src="https://www.youtube.com/embed/6CDNKNaxJSA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <iframe
          width="176"
          height="176"
          src="https://www.youtube.com/embed/mgwNlAHYMt8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
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
  .grid-container {
    grid-gap: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ". . ." ". . .";
    margin-bottom: 60px;
  }
  iframe{
    margin: auto;
  }
}
</style>