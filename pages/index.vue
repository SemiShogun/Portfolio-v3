<template>
  <main>
    <!-- Intro part of the page -->
    <div class="intro">
      <div class="intro__description">
        <h1>
          <b>Heya!
            <br>
            I'm <span class="intro--highlight">Jamie</span>
            <br>
            Former Fullstack Developer
          </b>
        </h1>
        <p>
          I’m a 20 year old student currently studying in the Berufsmaturitätsschule Zürich.
        </p>
      </div>
      <div class="intro__animation">
        Animation
      </div>
    </div>

    <!-- About Me -->
    <div class="about">
      <h2>> About Me</h2>
      <div class="about__container">
        <span class="about__description">Hello everyone! NectoJ here. I’m a developer from the snowy alps of Zürich, Switzerland. I have a fond interest when it comes to learning programming, technologies, tools and especially JS/TS frameworks. You’ll discover some of my various blog posts on this website regarding my current projects, ideas, reviews, writings, et cetera. </span>
        <img src="~/assets/img/portrait.jpg" class="about__portrait">
      </div>
    </div>

    <!-- Where I've worked -->
    <div class="worked">
      <h2>> Where I worked for</h2>
      <div class="worked__container">
        {{ jobList }}
      </div>
    </div>
  </main>
</template>

<script setup>

const companies = ref([]);

const { data: jobList } = useAsyncData("jobList", () => {
  const jobs = queryContent("/jobs").find();
  return jobs;
}).then((jobs) => {
  companies.value = jobs.data._rawValue.map(job => job.company);
});

</script>

<style lang="scss" scoped>
.intro {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__description {
    flex-direction: column;
    flex-basis: 65%;

    h1 {
      margin-bottom: 2rem;
    }
  }

  &__animation {
    flex-basis: 35%;
    background-color: #fff;
    border-radius: 50%;
    padding: 2rem;
    margin-top: 2rem;
    animation: intro-animation 1s ease-in-out infinite;
  }

  &--highlight {
    color: #A9D2A7;
  }
}

.about {
  margin-bottom: 20vh;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-left: 2px solid #FFFFFF;
    margin-top: 1rem;
    padding: 0.5rem 1rem 1rem 1rem;
  }

  &__description {
    flex-basis: 65%;
  }

  &__portrait {
    flex-basis: 35%;
    max-width: 10rem;
    height: auto;
    object-fit: cover;
    margin: auto;
  }
}
</style>
