<script context="module">
  export async function preload({ params, query }) {
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
  let activeTab = post.tabs[0]

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
      <h1 class="title" style="">{post.title}</h1>
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
        {#each post.tabs as tab}
          <li class="tab-item" class:active="{activeTab.name === tab.name}" on:click="{() => activeTab = tab }">
            <a href="/projects/{post.slug}">{tab.name}</a>
          </li>
        {/each}
      </ul>

    </div>

    <!-- content -->
    <div class="column col-sm-11 col-10 col-mx-auto ">
      <p>{activeTab.content} content</p>
    </div>
  </div>
</div>
