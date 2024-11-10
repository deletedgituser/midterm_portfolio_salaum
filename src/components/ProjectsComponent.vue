<template>
  <section id="projects">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2
          class="text-4xl font-bold text-gray-900 md:text-5xl font-effect-anaglyph"
        >
          My Projects
        </h2>
        <p class="max-w-lg mx-auto mt-4 text-gray-700">
          I have had the opportunity to work on a diverse range of projects,
          each demonstrating my ability to apply my technical skills in
          practical and innovative ways. My projects span various domains,
          including web development, cybersecurity, and software engineering,
          reflecting my versatility and passion for technology.
        </p>
      </header>

      <ul
        class="grid grid-cols-1 w-4/5 sm:w-full gap-6 mt-8 sm:grid-cols-3 h-auto mx-auto"
      >
        <ListProject>
          <template #image>
            <img
              src="../assets/images/business-concept-consulting-illustration.jpg"
              alt="Project 1 - Organization System"
              class="w-full h-80 object-cover"
            />
          </template>
          <template #info>
            <h3 class="text-lg font-semibold text-gray-800">
              CSU Orgs Management System
            </h3>
            <p class="mt-2 text-gray-600">
              A project in ITE-18 to guide the Organizations in CSU in managing
              requests and responses.
            </p>
          </template>
        </ListProject>

        <ListProject>
          <template #image>
            <img
              src="../assets/images/istockphoto-1374485813-612x612.jpg"
              alt="Project 2 - Todo List"
              class="w-full h-80 object-cover"
            />
          </template>
          <template #info>
            <h3 class="text-lg font-semibold text-gray-800">Todo List</h3>
            <p class="mt-2 text-gray-600">
              Utilizing Vue and Vuetify to create a functional Todo List
              application.
            </p>
          </template>
        </ListProject>

        <ListProject>
          <template #image>
            <img
              src="../assets/images/istockphoto-1131418344-612x612.jpg"
              alt="Project 3 - NASA API"
              class="w-full h-80 object-cover"
            />
          </template>
          <template #info>
            <h3 class="text-lg font-semibold text-gray-800">The Galaxy</h3>
            <p class="mt-2 text-gray-600">
              Utilizing NASA's API to access and retrieve data from NASA.
            </p>
          </template>
        </ListProject>
      </ul>
    </div>
  </section>
</template>

<script>
import ListProject from "./ListProject.vue";

export default {
  name: "ProjectsComponent",
  components: {
    ListProject,
  },
};
</script>

<style scoped></style>
