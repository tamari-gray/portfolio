<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  
</script>

<style>
  /* ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  } */
  h1 {
    font-size: 2.4em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
  .main {
    height: 80vh;
    display: flex;
    flex-direction: row;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  img {
    width: 350px;
    height: 200px;
  }

  .technologies {
    flex-grow: 2;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="main">

  <div class="left">
    <h1>Cleaner homes website</h1>
    <img src="cleanerHomes.png" alt="cleaner homes website design" />
    <div>description.</div>
    <div class="technologies">technologies</div>
  </div>

  <div class="right">
    <div>my role</div>
    <div>problems</div>
    <div>solutions</div>
    <div>notable features</div>
  </div>

</div>

<!-- <ul>
  {#each posts as post} -->
<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
<!-- <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul> -->
