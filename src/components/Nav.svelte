<script>
  export let segment;
  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaLinkedinIn from "svelte-icons/fa/FaLinkedinIn.svelte";
  import FaEnvelope from "svelte-icons/fa/FaEnvelope.svelte";

  import * as animateScroll from "svelte-scrollto";

  let showOverlay = false;

  function handleOverlayToggle() {
    showOverlay = !showOverlay;
  }

  function handleScrollToFromOverlay(element) {
    handleOverlayToggle();
    animateScroll.scrollTo({
      element: "#" + element,
      duration: 1000
    });
  }
</script>

<style>
  #burger-nav {
    display: none;
    position: relative;
    width: 50px;
    height: 8.5vh;
    top: 2.5vh;
    left: 5vw;
    z-index: 110;
  }

  @media (max-width: 480px) {
    #full-nav {
      display: none;
    }

    #burger-nav {
      display: block;
    }
  }

  nav {
    font-weight: 300;
    padding: 0 1em;
    height: 8.5vh;
    position: relative;
    z-index: 100;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  /* .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #4b48d6;
    display: block;
    bottom: -1px;
  } */

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
      1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
    font-size: 1em;
    color: #4b48d6;
  }

  .nav-hover:hover {
    border-bottom: #4b48d6;
    padding-bottom: 3px;
  }

  .icons {
    float: right;
  }

  .icon-navbar {
    min-width: 32px;
    min-height: 32px;
    max-width: 32px;
    max-height: 32px;
    padding: 1em 0.5em 0.5em 0.5em;
  }

  .overlay {
    display: none;
    background-color: black;
    color: white;
    position: fixed;
    z-index: 200;
  }
  .overlay-content {
    text-align: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    align-content: center;
  }
  #burger-nav-exit {
    position: relative;
    width: 50px;
    height: 8.5vh;
    top: 2.5vh;
    left: 5vw;
    z-index: 110;
  }

  .show {
    display: block;
  }

  .overlay-icons {
    display: flex;
    justify-content: center;
  }

  
</style>

<div class="overlay" class:show={showOverlay === true}>
  <div id="burger-nav-exit" on:click={handleOverlayToggle}>
    <i class="icon icon-2x icon-cross" style="color:white" />
  </div>

  <div class="overlay-content">

    <h1>Tamari gray</h1>
    <a style="font-size:1.3em" href="." on:click={() => handleScrollToFromOverlay('projects-section')}>
      My work
    </a>
    <a style="font-size:1.3em" href="." on:click={() => handleScrollToFromOverlay('about-section')}>
      About me
    </a>
    <a style="font-size:1.3em" href="mailto:tamarigray97@gmail.com" target="_blank">Contact me</a>
    <a
      style="font-size:1.3em"
      href="https://drive.google.com/file/d/1Y1ymhF-pP317_AxlDax674kRrwntzSrP/view?usp=sharing"
      target="_blank">
      My resume
    </a>
    <div class="overlay-icons">
      <a
        class="icon-navbar"
        href="https://github.com/tamari-gray"
        target="_blank">
        <DiGithubBadge />
      </a>
      <a
        class="icon-navbar"
        href="mailto:tamarigray97@gmail.com"
        target="_blank">
        <FaEnvelope />
      </a>
      <a
        class="icon-navbar"
        href="https://www.linkedin.com/in/tamari-gray-44128618a/"
        target="_blank">
        <FaLinkedin />
      </a>
    </div>

  </div>
</div>

<nav id="full-nav">
  <ul style="text-decoration:none">
    <li>
      <a class=" nav-hover " href=".">Tamari Gray</a>
    </li>
    <li>
      <a
        rel="prefetch"
        on:click={() => animateScroll.scrollTo({
            element: '#projects-section',
            duration: 1000
          })}
        class=" nav-hover"
        href=".">
        my work
      </a>
    </li>
    <li>
      <a
        class="nav-hover"
        on:click={() => animateScroll.scrollTo({
            element: '#about-section',
            duration: 1000
          })}
        href=".">
        about
      </a>
    </li>
    <li>
      <a
        class={segment === 'resume' ? 'selected' : ''}
        href="https://drive.google.com/file/d/1Y1ymhF-pP317_AxlDax674kRrwntzSrP/view?usp=sharing"
        target="_blank">
        resume
      </a>
    </li>
    <li class="icons">
      <a
        class="icon-navbar"
        href="https://www.linkedin.com/in/tamari-gray-44128618a/"
        target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li class="icons">
      <a
        class="icon-navbar"
        href="mailto:tamarigray97@gmail.com"
        target="_blank">
        <FaEnvelope />
      </a>
    </li>
    <li class="icons">
      <a
        class="icon-navbar"
        href="https://github.com/tamari-gray"
        target="_blank">
        <DiGithubBadge />
      </a>
    </li>
  </ul>
</nav>

<div
  id="burger-nav"
  class:show={showOverlay === false}
  on:click={handleOverlayToggle}>
  <i class="icon icon-2x icon-menu" style="color:white" />
</div>
