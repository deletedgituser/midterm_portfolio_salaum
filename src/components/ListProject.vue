<template>
  <li
    class="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:z-10 duration-300 hover:shadow-2xl"
  >
    <a href="#" class="block">
      <slot name="image"></slot>
      <div class="p-4 bg-white">
        <slot name="info"></slot>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "ListProject",
};
</script>

<style></style>
