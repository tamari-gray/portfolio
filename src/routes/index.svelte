<style>
  .hero {
		height: 80vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
		justify-content: center;
		align-content: center;
  }

  h1 {
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  span {
    text-decoration: underline;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Tamari gray</title>
</svelte:head>

<div class="hero">

  <h1>
    Im a
    <span>full stack developer</span>
  </h1>
  <h3>- making cool stuff is fun :)</h3>

</div>
