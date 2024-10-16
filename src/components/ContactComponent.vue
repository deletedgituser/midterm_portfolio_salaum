<template>
    <section class="py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-5xl font-effect-anaglyph">Contact Me</h2>
        <p class="mt-4 text-lg leading-6 text-gray-300">
          Feel free to reach out by sending an email or message. I’d love to hear from you!
        </p>
      </div>
  
      <div class="mt-8 max-w-xl mx-auto">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                v-model="email"
                required
                class="block w-full px-4 py-3 bg-white text-black placeholder-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
          </div>
  
          <div>
            <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="5"
                v-model="message"
                required
                class="block w-full px-4 py-3 bg-white text-black placeholder-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        if (this.email && this.message) {
          // Simulate a form submission process
          alert(`Email: ${this.email}\nMessage: ${this.message}`);
          this.email = '';
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  section {
    background-color: #001F3F;
  }
  </style>
  