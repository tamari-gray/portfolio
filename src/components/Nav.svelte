<script>
  export let segment;
  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import FaLinkedinIn from "svelte-icons/fa/FaLinkedinIn.svelte";

  import * as animateScroll from "svelte-scrollto";
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

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
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
</style>

<div class="overlay" />

<nav id="full-nav">
  <ul style="text-decoration:none">
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">
        Tamari Gray
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        on:click={() => animateScroll.scrollTo({
            element: '#projects-section',
            duration: 1000
          })}
        class={segment === 'projects' ? 'selected' : ''}
        href=".">
        my work
      </a>
    </li>
    <li>
      <a
        class={segment === 'about' ? 'selected' : ''}
        on:click={() => animateScroll.scrollTo({
            element: '#about-section',
            duration: 1000
          })}
        href=".">
        about
      </a>
    </li>
    <li>
      <a class={segment === 'resume' ? 'selected' : ''} href=".">resume</a>
    </li>
    <li class="icons">
      <a class="icon-navbar" href="https://github.com/tamari-gray">
        <DiGithubBadge />
      </a>
    </li>
    <li class="icons">
      <a class="icon-navbar" href="https://github.com/tamari-gray">
        <DiGithubBadge />
      </a>
    </li>
    <li class="icons">
      <a
        class="icon-navbar"
        href="https://www.linkedin.com/in/tamari-gray-44128618a/">
        <FaLinkedin />
      </a>
    </li>
  </ul>
</nav>

<div id="burger-nav" class="s-circle">
  <i class="icon icon-2x icon-menu" style="color:white" />
</div>
