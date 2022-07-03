<template>
  <header class="nav-bar">
    <NuxtLink to="/" class="nav-bar__logo">
      Nectoj.me
    </NuxtLink>
    <nav>
      <ul class="nav-bar__links">
        <li>
          <NuxtLink to="/">
            /Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">
            /Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/tags">
            /Tags
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <button class="nav-bar__dark-mode">
      something
    </button>
  </header>
</template>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;

  &__logo {
    cursor: pointer;
    margin-right: auto;
  }

  &__links {
    li {
      display: inline-block;
      padding: 0px 20px;

      a {
        transition: all 0.3 ease 0s;

        &:hover {
          color: #A9D2A7;
        }
      }
    }
  }

  .nav-bar__dark-mode {
    margin-left: 20px;
    padding: 9px 25px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3 ease 0s;
  }
}
</style>
