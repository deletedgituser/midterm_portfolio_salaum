<template>
    <li class="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-125 hover:z-10">
          <a href="#" class="block">
            <slot name='image'></slot>
            <div class="p-4 bg-white">
              <slot name='info'></slot>
            </div>
          </a>
    </li>
</template>
    
<script>
    export default {
        name: 'ListProject'
    }
</script>

<style>
</style>