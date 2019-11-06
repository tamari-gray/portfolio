<script>
  export let segment;
  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
	import MdEmail from "svelte-icons/md/MdEmail.svelte";
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    height: 8.5vh;
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

  .icon {
    width: 32px;
    height: 32px;
		padding: 1em 0.5em 0.5em 0.5em
  }

</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">
        Tamari Gray
      </a>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        projects
      </a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>
		<li>
      <a class={segment === 'resume' ? 'selected' : ''} href="resume">resume</a>
    </li>
		<li>
      <a class={segment === 'contact' ? 'selected' : ''} href="contact">contact</a>
    </li>

    <li class="icons">
      <a class="icon" href="https://github.com/tamari-gray">
        <DiGithubBadge />
      </a>
    </li>
    <li class="icons">
      <a class="icon" href="https://www.linkedin.com/in/tamari-gray-44128618a/">
        <FaLinkedin />
      </a>
    </li>
  </ul>
</nav>
