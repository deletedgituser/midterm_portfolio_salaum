<template>
  <li class="group bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
    <a href="#" class="h-full flex flex-col">
      <div class="relative overflow-hidden aspect-video">
        <slot name="image">
          <img 
            src="/placeholder.svg?height=200&width=300" 
            alt="Project thumbnail" 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </slot>
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span class="text-white text-lg font-semibold">View Project</span>
        </div>
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between">
        <slot name="info"></slot>
        <div class="mt-4">
          <slot name="technologies"></slot>
        </div>
      </div>
    </a>
  </li>
</template>

<script setup>

</script>

<style scoped>

</style>