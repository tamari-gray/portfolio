<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  h1 {
    font-size: 2.4em;
    font-weight: 700;
  }
  img {
    width: 250px;
    height: 150px;
  }

  .title {
    text-align: center;
    margin: 5vh 0 5vh 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container">
  <div class="columns">
    <!-- title -->
    <div class="column col-12">
      <h1 class="title" style="">Cleaner Homes website</h1>
    </div>
    <!-- mockup -->
    <div class="column col-12" style="margin-bottom:5vh">
      <div class="columns">
        <img
          class="column col-10 col-mx-auto"
          src="cleanerHomes.png"
          alt="cleaner homes website design" />
        <div
          class="column col-10 col-mx-auto btn-group btn-group-block"
          style="width:250px;margin-top:1.3vh">
          <button class="btn btn-link" href=".">view code</button>
          <button class="btn btn-link" href=".">
            <span class="text-dark">live version</span>
          </button>
        </div>
      </div>
    </div>
    <!-- tabs-->
    <div class="column col-sm-11 col-10 col-mx-auto ">
      <ul class="tab tab-block">
        <li class="tab-item active">
          <a href="/projects/about">my role</a>
        </li>
        <li class="tab-item">
          <a href="." class="">tech</a>
        </li>
        <li class="tab-item">
          <a href=".">learnings</a>
        </li>
        <li class="tab-item">
          <a href=".">features</a>
        </li>
      </ul>
    </div>
  </div>
</div>
