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

  import * as animateScroll from "svelte-scrollto";

  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";

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

      // mesh.position.y = 1

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

  // toggle projects
  let activeProject = 0;

  $: activeProjectContent = posts[activeProject];

  $: console.log(activeProject, activeProjectContent);

  function handleProjectToggle() {
    const length = posts.length - 1;

    activeProject = activeProject + 1;

    activeProject > length ? (activeProject = 0) : false;
  }

  // navbar
  let y = 0;
  $: if (y >= 500) {
    // console.log(y);
    document.getElementById("burger-nav").style.color = "585bd9";
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

  .full-height {
    height: 100%;
  }

  .heading {
    font-size: 2.4em;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    text-align: center;
  }
  span {
    text-decoration: underline;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  #projects-section {
    margin-top: 5vh;
  }

  .projects-nav {
    margin-bottom: 5vh;
  }

  img {
    width: 350px;
    height: 200px;
  }

  .accordian-tam {
    width: 40vw;
    margin: auto;
  }
  .accordian-content {
    margin-left: 2em;
    font-size: 1em;
  }
  .accordian-title {
    font-size: 1.4em;
  }

  @media (max-width: 480px) {
    .accordian-tam {
      width: 80vw;
    }
  }

  #about-section {
    margin-top: 5vh;
  }

  .get-in-touch {
    margin-top: 7.1vh;
    /* height: 25vh; */
    color: white;
  }
  .test {
    text-align: center;
    margin: auto;
    width: 80vw;
    height: 1pt;
    background-color: #5a6175;
  }
</style>

<svelte:head>
  <title>Tamari gray</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<div class="scene" />
<div class="container">
  <div class="columns" style="min-width:100vw">
    <!-- hero section -->
    <div class="column col-12" style="height:91.5vh">
      <div class="hero">
        <h1>
          A
          <span>full stack</span>
          developer
        </h1>
        <div style="display:flex">
          <button
            class="btn btn-primary"
            on:click={() => animateScroll.scrollTo({
                element: '#projects-section',
                duration: 1000
              })}>
            View my work
          </button>
          <button class="btn" href=".">contact me</button>
        </div>
      </div>
    </div>
    <!-- projects section -->
    <div id="projects-section" class="column col-12 full-height">
      <div class="projects columns">
        <div class=" projects-nav column col-12">
          <div class="columns">
            <div
              class="column col-sm-6 col-4 heading"
              style=" text-align:center">
              My work
            </div>
            <div
              class="column col-4 col-ml-auto heading"
              style=" text-align:center; height: 50px">
              <i
                class="icon icon-forward mr-1"
                style="color:#585bd9"
                on:click={handleProjectToggle} />
            </div>
          </div>
        </div>
      </div>
      <div class="project-comp column col-12">
        <div class="columns">
          <div
            class="column col-xs-12 col-7 col-mx-auto"
            style="margin-top:5vh">
            <div class="columns">
              <!-- <div style="max-height: 300px; overflow-y:scroll"> -->
              <img
                class=" column col-12 col-mx-auto"
                src={'/' + activeProjectContent.img}
                alt="" />
              <!-- </div> -->
              <div class=" projects-title column col-12 col-mx-auto">
                <h4 style="text-align:center; font-size:1.4em; font-weight:400">
                  {activeProjectContent.title}
                </h4>
              </div>
              <div
                style="display: flex; justify-content: center; margin-top: 2vh;"
                class="column col-12 col-mx-auto">
                <button class="btn btn-primary" href=".">View code</button>
                <button class="btn" href=".">live version</button>
              </div>
            </div>
          </div>
          <div
            class="column col-xs-12 col-5 col-mx-auto"
            style="margin-top:5vh">
            <div class="accordion accordian-tam">
              <input
                type="checkbox"
                id="accordion-0"
                name="accordion-checkbox"
                hidden />
              <label class="accordion-header accordian-title" for="accordion-0">
                <i class="icon icon-arrow-right mr-1" />
                Description
              </label>
              <div class="accordion-body accordian-content">
                {activeProjectContent.description}
              </div>
            </div>
            <div class="accordion accordian-tam">
              <input
                type="checkbox"
                id="accordion-1"
                name="accordion-checkbox"
                hidden />
              <label class="accordion-header accordian-title" for="accordion-1">
                <i class="icon icon-arrow-right mr-1" />
                My role
              </label>
              <div class="accordion-body accordian-content">
                <!-- Accordions content -->
                {activeProjectContent.myRole}
              </div>
            </div>
            <div class="accordion accordian-tam">
              <input
                type="checkbox"
                id="accordion-2"
                name="accordion-checkbox"
                hidden />
              <label class="accordion-header accordian-title" for="accordion-2">
                <i class="icon icon-arrow-right mr-1" />
                Technologies used
              </label>
              <div class="accordion-body accordian-content">
                <!-- <ul> -->
                {#each activeProjectContent.techUsed as tech}
                  <span class="chip" style="text-decoration: none">{tech}</span>
                {/each}
                <!-- </ul> -->
              </div>
            </div>
            <div class="accordion accordian-tam">
              <input
                type="checkbox"
                id="accordion-3"
                name="accordion-checkbox"
                hidden />
              <label class="accordion-header accordian-title" for="accordion-3">
                <i class="icon icon-arrow-right mr-1" />
                Key learnings
              </label>
              <div class="accordion-body accordian-content">
                <ul>
                  {#each activeProjectContent.learnings as learning}
                    <li>{learning}</li>
                  {/each}
                </ul>
              </div>
            </div>
            <div class="accordion accordian-tam">
              <input
                type="checkbox"
                id="accordion-4"
                name="accordion-checkbox"
                hidden />
              <label class="accordion-header accordian-title" for="accordion-4">
                <i class="icon icon-arrow-right mr-1" />
                Notable features
              </label>
              <div class="accordion-body">
                <ul>
                  {#each activeProjectContent.features as feature}
                    <li>{feature}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- get in touch section -->
    <div class="column col-12 get-in-touch">
      <!-- <h1>how can I be of service?</h1> -->
      <div class="test" />
    </div>
    <!-- about section -->
    <div class="divider" />
    <div id="about-section" class="column col-12 about full-height">
      <div class="about columns">
        <div class=" projects-nav column col-12">
          <div class="columns">
            <div
              class="column col-sm-6 col-4 heading"
              style=" text-align:center">
              About me
            </div>
            <div
              class="column col-4 col-ml-auto heading"
              style=" text-align:center; height: 50px">
              <a href="mailto:tamarigray97@gmail.com" target="_blank">
                <button class="btn">
                  <i class="icon icon-arrow-right" />
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="column col-xs-10 col-8 col-mx-auto">description</div>
      </div>
    </div>
  </div>
</div>
