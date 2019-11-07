<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style global lang="scss">
  @import "./style/main.scss";
</style>

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>

<!-- <Footer/> -->
