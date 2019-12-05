<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`/projects.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;

  import { onMount } from "svelte";
  import * as THREE from "three";

  onMount(() => {
    initThreeJs();
  });

  function initThreeJs() {
    var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      scene = new THREE.Scene();

      geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      material = new THREE.MeshNormalMaterial();

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.querySelector(".svelte-1uhnsl8");
      // .setAttribute("style", "padding: 0;");
      renderer.domElement.setAttribute("style", "width: 100vw; height: 100vh");
      document.querySelector(".scene").appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
    }
  }
</script>

<style>
  .scene {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    height: 100%;
  }

  .hero {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 80vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: antiquewhite;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    text-align: center;
  }

  h3 {
    font-size: 1.2em;
  }

  span {
    text-decoration: underline;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
    h3 {
      font-size: 1.6em;
    }
  }
</style>

<svelte:head>
  <title>Tamari gray</title>
</svelte:head>

<div class="scene" />

<div class="hero">
  <h1>
    Im a
    <span>full stack developer</span>
  </h1>
  <button class="btn " href=".">view my work</button>
  <button class="btn" href=".">
    <span class="text-dark">contact me</span>
  </button>
</div>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="projects/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
