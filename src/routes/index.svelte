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
  import { fade } from "svelte/transition";

  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";

  import { onMount } from "svelte";
  import * as THREE from "three";

  onMount(() => {
    initThreeJs();
  });

  // scroll
  let y = 0;

  //transition
  let showProjects = true;

  function initThreeJs() {
    var camera, scene, renderer;
    var boxGeometry,
      material,
      mesh,
      mesh2,
      mesh3,
      mesh4,
      sphere,
      sphereGeo,
      sphereMaterial,
      light1,
      light2,
      light3,
      light4,
      geometry,
      line,
      wireframe,
      test;

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      camera.position.z = 2.5;

      scene = new THREE.Scene();

      boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      material = new THREE.MeshNormalMaterial();
      material.opacity = 0.5;
      mesh = new THREE.Mesh(boxGeometry, material);
      mesh2 = new THREE.Mesh(boxGeometry, material);
      mesh3 = new THREE.Mesh(boxGeometry, material);
      mesh4 = new THREE.Mesh(boxGeometry, material);

      scene.add(mesh, mesh2, mesh3, mesh4);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.querySelector(".svelte-1uhnsl8");
      renderer.domElement.setAttribute("style", "width: 100vw; height: 100vh");
      document.querySelector(".scene").appendChild(renderer.domElement);
    }

    window.onresize = function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    function animate() {
      requestAnimationFrame(animate);

      var time = Date.now() * 0.0005;

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
      mesh2.rotation.x += 0.01;
      mesh2.rotation.y += 0.02;
      mesh3.rotation.x += 0.01;
      mesh3.rotation.y += 0.02;
      mesh4.rotation.x += 0.01;
      mesh4.rotation.y += 0.02;

      mesh.position.x = Math.sin(time * 0.3) * 1.1;
      mesh.position.y = Math.cos(time * 0.6) * 1.1;
      mesh.position.z = Math.cos(time * 0.9) * 1.1;

      mesh2.position.x = Math.sin(time * 0.3) * -1.1;
      mesh2.position.y = Math.cos(time * 0.6) * -1.1;
      mesh2.position.z = Math.cos(time * 0.9) * -1.1;

      mesh3.position.x = Math.sin(time * 0.3) * 1.1;
      mesh3.position.y = Math.cos(time * 0.6) * -1.1;
      mesh3.position.z = Math.cos(time * 0.9) * 1.1;

      mesh4.position.x = Math.sin(time * 0.3) * -1.1;
      mesh4.position.y = Math.cos(time * 0.6) * 1.1;
      mesh4.position.z = Math.cos(time * 0.9) * -1.1;

      let cubeScale = 0.5 - y / 1500;

      mesh.scale.set(cubeScale, cubeScale, cubeScale);
      mesh2.scale.set(cubeScale, cubeScale, cubeScale);
      mesh3.scale.set(cubeScale, cubeScale, cubeScale);
      mesh4.scale.set(cubeScale, cubeScale, cubeScale);

      renderer.render(scene, camera);
    }
  }

  // toggle projects
  let activeProject = 0;

  $: activeProjectContent = posts[activeProject];

  function handleProjectToggle() {
    //transition
    showProjects = false;
    setTimeout(() => {
      showProjects = true;
    }, 250);

    // change content
    const length = posts.length - 1;
    activeProject = activeProject + 1;
    activeProject > length ? (activeProject = 0) : false;
  }
</script>

<style>
  .scene {
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    height: 100%;
  }

  .hero {
    display: flex;
    flex-direction: column;
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
    min-width: 75vw;
  }

  .full-height {
    height: 100%;
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
    position: relative;
    z-index: 2;
  }

  .content-component {
    background: #000000f0;
    border: 0.15rem solid #9b15f1;
    border-radius: 15px;
    color: white;
    min-height: 65vh;
  }

  .footer {
    background: #000000f0;
    border-top: 0.15rem solid #9b15f1;
    color: white;
    min-height: 20vh;
    position: relative;
    z-index: 2;
    color: antiquewhite;
    text-align: center;
    margin-top: 8vh;
  }

  img {
    width: 350px;
    height: 200px;
  }

  .accordian-tam {
    width: 40vw;
    margin: auto;
  }

  .accordian-title:hover {
    color: #9b15f1;
    cursor: pointer;
  }

  .accordian-content {
    margin-left: 2.25em;
    margin-right: 1em;
    font-size: 1em;
  }
  .accordian-title {
    font-size: 1.3em;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    .accordian-tam {
      width: 80vw;
    }
    .project-block {
      margin-top: 5vh;
    }

    .footer {
      padding-bottom: 1.5em;
    }

    .footer-buttons {
      text-align: center;
    }
  }

  .footer-buttons {
    text-align: left;
  }

  #about-section {
    margin-top: 20vh;
    position: relative;
    z-index: 2;
  }

  .chipette {
    background-color: #9b15f1;
  }
  .outline {
    text-shadow: -0.3px -0.3px 0 #9b15f1, 0 -0.3px 0 #9b15f1,
      0.3px -0.3px 0 #9b15f1, 0.3px 0 0 #9b15f1, 0.3px 0.3px 0 #9b15f1,
      0 0.3px 0 #9b15f1, -0.3px 0.3px 0 #9b15f1, -0.3px 0 0 #9b15f1;
  }
  .outline-black {
    text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
      1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
  }

  .special {
    text-decoration: none;
    font-weight: 700;
  }

  .btn-primary-custom {
    background: #9b15f1;
    border-color: #9b15f1;
    color: #fff;
  }

  .btn-custom {
    background: #fff;

    border: 0.05rem solid #9b15f1;

    border-radius: 0.1rem;

    color: #9b15f1;

    appearance: none;
    background: #fff;
    border: 0.05rem solid #9b15f1;
    border-radius: 0.1rem;
    color: #9b15f1;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8rem;
    height: 1.8rem;
    line-height: 1.2rem;
    outline: none;
    padding: 0.25rem 0.4rem;
    text-align: center;
    text-decoration: none;
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }

  .btn-custom:hover,
  .btn-custom:focus,
  .btn-custom:active {
    background: #fff;
  }

  .btn-link-custom:focus,
  .btn-link-custom:hover,
  .btn-link-custom:active {
    color: #9822e3 !important;
    background: transparent !important;
    border-color: transparent !important;

  }
  .btn-link-custom {
    background: transparent;
    border-color: transparent;
    color: #9b15f1;
  }

  .btn:focus,
  .btn:hover {
    background: #9822e3;
    border-color: #9822e3;
    text-decoration: none;
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
        <h1 class="outline-black">
          I'm a
          <br />
          <span>full stack</span>
          dev
        </h1>
        <div style="text-align:center">
          <button
            class="btn btn-primary-custom"
            on:click={() => animateScroll.scrollTo({
                element: '#projects-section',
                duration: 1000
              })}>
            View my work
          </button>
          <a href="mailto:tamarigray97@gmail.com" target="_blank">
            <button class=" btn-custom">Contact me</button>
          </a>
        </div>
      </div>
    </div>
    <!-- projects section -->
    <div id="projects-section" class="column col-12 full-height">
      <div class="projects columns">
        <div class=" projects-nav column col-12">
          <div class="columns">
            <div class="column col-12 col-mx-auto ">
              <h1
                class="outline-black"
                style=" text-align:center; font-weight:700; font-size:3em;
                color:white ">
                My work
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="content-component column col-10 col-mx-auto">
        {#if showProjects}
          <div transition:fade={{ duration: 250 }} class="columns">
            <div
              class="column col-12 col-mx-auto"
              style="margin-top:5vh; margin-bottom:5vh">
              <div class="columns">
                <div class=" projects-title column col-6 col-xs-12 col-mx-auto">
                  <h4
                    class="outline-black"
                    style="text-align:center; font-size:1.8em; font-weight:500">
                    {activeProjectContent.title}
                  </h4>
                </div>
                <div class="column col-6 col-xs-12" style=" text-align:center;">
                  <button
                    class="btn btn-primary-custom"
                    on:click={handleProjectToggle}>
                    next project
                    <i class="icon icon-forward icon-small" />
                  </button>
                </div>
              </div>
            </div>
            <div class="column col-xs-12 col-6 col-mx-auto ">
              <div class="columns">
                <img
                  class=" column col-12 col-mx-auto"
                  src={'/' + activeProjectContent.img}
                  alt="" />
                <div
                  style="display: flex; justify-content: center; margin-top:
                  2vh;"
                  class="column col-12 col-mx-auto">
                  <a href={activeProjectContent.codeLink} target="_blank">
                    <button class="btn btn-primary-custom">View code</button>
                  </a>
                  <a href={activeProjectContent.liveLink} target="_blank">
                    <button class="btn btn-link-custom">live version</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="column col-xs-12 col-6 col-mx-auto project-block">
              <div class="accordion accordian-tam">
                <input
                  type="checkbox"
                  id="accordion-0"
                  name="accordion-checkbox"
                  hidden />
                <label
                  class="accordion-header accordian-title"
                  for="accordion-0">
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
                <label
                  class="accordion-header accordian-title"
                  for="accordion-1">
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
                <label
                  class="accordion-header accordian-title"
                  for="accordion-2">
                  <i class="icon icon-arrow-right mr-1" />
                  Technologies used
                </label>
                <div class="accordion-body accordian-content">
                  <!-- <ul> -->
                  {#each activeProjectContent.techUsed as tech}
                    <span class="chip chipette" style="text-decoration: none">
                      {tech}
                    </span>
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
                <label
                  class="accordion-header accordian-title"
                  for="accordion-3">
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
                <label
                  class="accordion-header accordian-title"
                  for="accordion-4">
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
        {/if}
      </div>
    </div>
    <!-- about section -->
    <div id="about-section" class="column col-12 about" style="">
      <div class="columns">
        <div class="column about-title col-12">
          <h1
            class="outline-black"
            style=" text-align:center; font-weight:700; font-size:3em;
            color:white ">
            About me
          </h1>
        </div>
        <div
          class="column col-xs-10 col-7 col-mx-auto"
          style="background: #000000f0;border-radius:15px;">
          <p
            style="color:white;margin:1em; font-size:1.2em"
            class="outline-black">
            Im a driven dev that wants to fully understand the product
            development lifecycle. Ive studied and self-taught myself enough to
            build creative products with the latest tech stacks. I hope that
            with the skills I have gathered from these endeavours, I can learn
            from and
            <span class="special outline">provide real</span>
            <span class="special outline">value</span>
            <span class="special outline">to</span>
            <span class="special outline">you</span>
            r company.
          </p>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="column col-12 col-mx-auto footer">
      <div class="columns" style="margin-top: 8vh">
        <div class="column col-xs-12 col-6">
          <h4 class="outline" style="margin:none">Tamari gray</h4>
          <p>full stack software developer</p>
        </div>
        <div class="column col-xs-12 col-4 ">
          <div class="columns">
            <div class="column col-6 col-xs-4 col-mx-auto footer-buttons">
              <a href="mailto:tamarigray97@gmail.com" target="_blank">
                <button class="btn btn-primary-custom ">Get in touch</button>
              </a>
            </div>
            <div class="column col-6 col-xs-4 col-mx-auto footer-buttons">
              <a
                href="https://drive.google.com/file/d/1vOPgsS8N7pr3jS-mL8S5EEcj7nrhijQA/view?usp=sharing"
                target="_blank">
                <button class=" btn-custom">View resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
