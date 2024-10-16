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

      <ul class="grid grid-cols-1 w-4/5 sm:w-full gap-6 mt-8 sm:grid-cols-3 h-auto mx-auto">
        <ListProject>
          <template #image>
            <img
              src="../assets/images/240488c97e712778d2c6b5f7c6d1900f.jpeg"
              alt="Project 1 - Brief description"
              class="w-full h-80 object-cover"
            />
          </template>
          <template #info>
            <h3 class="text-lg font-semibold text-gray-800">Project Title 1</h3>
            <p class="mt-2 text-gray-600">
              Brief description of Project 1, highlighting its main features and
              technologies used.
            </p>
          </template>
        </ListProject>

        <ListProject>
          <template #image>
            <img
              src="../assets/images/240488c97e712778d2c6b5f7c6d1900f.jpeg"
              alt="Project 1 - Brief description"
              class="w-full h-80 object-cover"
            />
          </template>
          <template #info>
            <h3 class="text-lg font-semibold text-gray-800">Project Title 1</h3>
            <p class="mt-2 text-gray-600">
              Brief description of Project 1, highlighting its main features and
              technologies used.
            </p>
          </template>
        </ListProject>

        <ListProject>
          <template #image>
            <img
              src="../assets/images/240488c97e712778d2c6b5f7c6d1900f.jpeg"
              alt="Project 1 - Brief description"
              class="w-full h-80 object-cover"
            />
          </template>
          <template #info>
            <h3 class="text-lg font-semibold text-gray-800">Project Title 1</h3>
            <p class="mt-2 text-gray-600">
              Brief description of Project 1, highlighting its main features and
              technologies used.
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
