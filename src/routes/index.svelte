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
    var geometry,
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
      light4;

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

      geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      material = new THREE.MeshNormalMaterial();
      mesh = new THREE.Mesh(geometry, material);
      mesh2 = new THREE.Mesh(geometry, material);
      mesh3 = new THREE.Mesh(geometry, material);
      mesh4 = new THREE.Mesh(geometry, material);

      // sphereGeo = new THREE.SphereGeometry(0.2, 32, 32);
      // sphereMaterial = new THREE.MeshNormalMaterial();
      // sphere = new THREE.Mesh(sphereGeo, sphereMaterial);

      var sphere = new THREE.SphereBufferGeometry(0.05, 16, 8);

      light1 = new THREE.PointLight(0xff0040, 0.2, 50);
      light1.add(
        new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x807efa }))
      );
      light2 = new THREE.PointLight(0xff0040, 0.2, 50);
      light2.add(
        new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x807efa }))
      );
      light3 = new THREE.PointLight(0xff0040, 0.2, 50);
      light3.add(
        new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x807efa }))
      );
      light4 = new THREE.PointLight(0xff0040, 0.2, 50);
      light4.add(
        new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x807efa }))
      );

      scene.add(mesh, mesh2, mesh3, mesh4);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.querySelector(".svelte-1uhnsl8");
      // .setAttribute("style", "padding: 0;");
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
    border: 0.15rem solid #585bd9;
    border-radius: 15px;
    color: white;
    min-height: 65vh;
  }

  .footer {
    background: #000000f0;
    border-top: 0.15rem solid #585bd9;
    color: white;
    min-height: 20vh;
    position: relative;
    z-index: 2;
    color: antiquewhite;
    text-align:center;
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
    color: #585bd9;
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
  }

  #about-section {
    margin-top: 20vh;
    position: relative;
    z-index: 2;
  }

  .chipette {
    background-color: #585bd9;
  }
  .outline {
    text-shadow: -0.5px -0.5px 0 #585bd9, 0 -0.5px 0 #585bd9, 0.5px -0.5px 0 #585bd9,
      0.5px 0 0 #585bd9, 0.5px 0.5px 0 #585bd9, 0 0.5px 0 #585bd9, -0.5px 0.5px 0 #585bd9,
      -0.5px 0 0 #585bd9;
  }
  .outline-black {
    text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000,
      1px 0 0 #000, 1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000,
      -1px 0 0 #000;
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
    <!-- <div class="column col-12" style="height:91.5vh">
      <div class="hero">
        <h1 class="outline-black">
          I'm a <br>
          <span>full stack</span>
          dev
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
    </div> -->
    <div class="column col-12" style="height:91.5vh">
      <div class="hero">
        <h1 class="outline-black">
          I'm a <br>
          <span>full stack</span>
          dev
        </h1>
        <div style="text-align:center">
          <button
            class="btn btn-primary"
            on:click={() => animateScroll.scrollTo({
                element: '#projects-section',
                duration: 1000
              })}>
            View my work
          </button>
          <button class="btn" href=".">Contact me</button>
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
        <div class="columns">
          <div
            class="column col-12 col-mx-auto"
            style="margin-top:5vh; margin-bottom:5vh">
            <div class="columns">
              <div class=" projects-title column col-8 col-xs-12 col-mx-auto">
                <h4 class="outline-black" style="text-align:center; font-size:1.8em; font-weight:500">
                  {activeProjectContent.title}
                </h4>
              </div>
              <div class="column col-4 col-xs-12" style=" text-align:center;">
                <button
                  class="btn "
                  style="background-color:#000;"
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
                style="display: flex; justify-content: center; margin-top: 2vh;"
                class="column col-12 col-mx-auto">
                <button class="btn btn-primary" href=".">View code</button>
                <button class="btn btn-link" href=".">live version</button>
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
        <div class="column col-xs-8 col-6 col-mx-auto">
          <p style="color:white;" class="outline-black">about me sdjfndsbgjlndsl</p>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="column col-12 col-mx-auto footer">
      <div class="columns" style="margin-top: 8vh">
        <div class="column col-6">
          <h4 class="outline" style="margin:none">Tamari gray</h4>
          <p>full stack software developer</p>
        </div>
        <div class="column col-2" style="text-align: left">
          <button class="btn btn-primary ">Get in touch</button>
        </div>
        <div class="column col-2" style="text-align: left">
          <button class="btn">View resume</button>
        </div>
      </div>
    </div>
  </div>
</div>
