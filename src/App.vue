<template>
  <HeaderComponent />
  <AboutComponent />
  <SkillsComponent />
  <ExperienceComponent />
  <ProjectsComponent />
  <ContactComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import ExperienceComponent from "./components/ExperienceComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.pattern {
  /* background-image: url("https://placehold.co/1280x720"); */
  background-color: #001F3F;
  /* background: #001f3f;
  background: -webkit-linear-gradient(174deg, #001f3f 0%, #46016e 100%);
  background: linear-gradient(174deg, #001f3f 0%, #46016e 100%); */ 
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  opacity: 5;
}
#me {
  opacity: 0.9;
}

.custom-font-1 {
  font-family: "Raleway", sans-serif;
}

.custom-font-2 {
  font-family: "Urbanist", sans-serif;
}

#backToTopBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-size: 0;
  /* Hide any text inside the button */
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

#backToTopBtn:hover {
  opacity: 1;
}
</style>
