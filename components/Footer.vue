<template>
  <div class="footer">
    <div class="footer__social-media">
      <!-- use email svg from the assets folder -->
      <a href="https://github.com/SemiShogun" target="_blank">
        <div class="footer__github" />
      </a>
      <a href="mailto:nectoj@gmail.com" target="_blank">
        <div class="footer__email" />
      </a>
      <a href="https://www.linkedin.com/in/jamie-lam-123abc/" target="_blank">
        <div class="footer__linkedin" />
      </a>
    </div>
    <div class="footer__text">
      <span>Made with 💖 | Copyright © 2021 Jamie. </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;

  &__social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    > a:not(:last-child) {
      margin-right: 3rem;
    }
  }

  &__email,
  &__github,
  &__linkedin {
    background-color: white;
    height: 2rem;
    width: 2rem;
  }

  &__email {
    -webkit-mask: url(~/assets/svg/email.svg) no-repeat center;
    mask: url(~/assets/svg/email.svg) no-repeat center;
  }

  &__github {
    -webkit-mask: url(~/assets/svg/github.svg) no-repeat center;
    mask: url(~/assets/svg/github.svg) no-repeat center;
  }

  &__linkedin {
    -webkit-mask: url(~/assets/svg/linkedin.svg) no-repeat center;
    mask: url(~/assets/svg/linkedin.svg) no-repeat center;
  }

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
}
</style>
