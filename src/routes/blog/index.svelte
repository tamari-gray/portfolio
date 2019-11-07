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
  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";

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
  img {
    width: 250px;
    height: 150px;
  }
  .techs {
    width: 250px;
  }
  .next-project {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<div class="container">
  <div class="columns">
    <!-- title -->
    <div class="column col-12">
      <div class="columns">
        <div class="column col-xs-12 col-8">
          <h1 style="margin-bottom:0.25em">Cleaner Homes website</h1>
          <h5>Design & development</h5>
        </div>
        <div class="column col-2 col-mx-auto hide-sm next-project">
          <button class="btn btn-primary btn-lg">
            <i class="icon icon-arrow-right" />
             next project >
          </button>
        </div>
      </div>
    </div>
    <!-- left side -->
    <div class="column col-sm-12" style="border: thin solid red">
      <div class="columns">
        <img
          class="column col-10 col-mx-auto"
          src="cleanerHomes.png"
          alt="cleaner homes website design" />
        <div
          class="column col-10 col-mx-auto btn-group btn-group-block"
          style="width:250px">
          <button class="btn btn-primary" href=".">view code</button>
          <button class="btn " href=".">live version</button>
        </div>
        <div class="column col-10 col-mx-auto techs">techs used</div>
      </div>
    </div>
    <!-- right side -->
    <div class="column col-sm-12 " style="border: thin solid red">col-6</div>
  </div>
</div>
<!-- <div class="main">
  <div class="left">
    <div>
      <h1 style="margin-bottom:0.25em">Cleaner Homes website</h1>
      <h3>Design & development</h3>
    </div>
    <img src="cleanerHomes.png" alt="cleaner homes website design" />
    <div class="buttons">
      <button>view code</button>
      <button>live version</button>
    </div>
    <div class="technologies">technologies</div>
  </div>

  <div class="right">
    <div>my role</div>
    <div>problems</div>
    <div>solutions</div>
    <div>notable features</div>
  </div>

</div> -->

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
