<template>
  <section class="py-12 px-4 sm:px-6 lg:px-8" id="contact">
    <div class="max-w-2xl mx-auto text-center">
      <h2
        class="text-3xl font-extrabold text-white sm:text-5xl font-effect-anaglyph"
      >
        Contact Me
      </h2>
      <p class="mt-4 mb-2 text-lg leading-6 text-gray-300">
        Feel free to reach out by sending an email or message. I’d love to hear
        from you!
      </p>
      <div v-show="toggled" class="mt-8 max-w-xl mx-auto">
        <form @submit.prevent="submitForm" class="space-y-6" ref="myForm">
          <div>
            <label for="email_id" class="block sm:text-2xl text-lg text-white font-extrabold font-effect-anaglyph"
              >Email</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email_id"
                type="email"
                autocomplete="email"
                v-model="form.email_id"
                required
                class="block w-full px-4 py-3 bg-white text-black placeholder-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
          </div>

          <div>
            <label for="from_name" class="block sm:text-2xl text-lg text-white font-extrabold font-effect-anaglyph"
              >Name</label
            >
            <div class="mt-1">
              <input
                id="name"
                name="from_name"
                v-model="form.from_name"
                required
                class="block w-full px-4 py-3 bg-white text-black placeholder-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <label for="message" class="block sm:text-2xl text-lg text-white font-extrabold font-effect-anaglyph"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="5"
                v-model="form.message"
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
      <button
        @click="toggleEmail"
        class="transition duration-5 ease-in-out my-4 rounded-md text-white py-2 px-4 hover:bg-cyan-700 bg-gray-700 hover:scale-105"
        type="button"
      >
        {{ toggled ? "Close" : "Send Email" }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form :{
        from_name: '',
        email_id: '',
        message: '',
      },
      toggled: false,
      statusMessage: ''
    };
  },
  methods: {
    toggleEmail() {
      this.toggled = !this.toggled;
    },
    async submitForm() {
      // Create FormData object and append form inputs and EmailJS parameters
      const formData = new FormData(this.$refs.myForm);
      formData.append('service_id', 'service_q6qln5q');
      formData.append('template_id', 'template_4k3bwlt');
      formData.append('user_id', 'H2450ePDW3hgk2r22');

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
      }
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          this.statusMessage = 'Your mail is sent!';
          alert(this.statusMessage);
          this.form = { name: '', email: '', message: '' }; // Reset the form
        } else {
          this.statusMessage = 'Failed to send email. Please try again later.';
          alert(this.statusMessage);
          console.error('EmailJS error:', response.statusText);
        }
      } catch (error) {
        this.statusMessage = 'An error occurred. Please try again later.';
        alert(this.statusMessage);
        console.error('EmailJS error:', error);
      }
    },
  },
};
</script>

<style scoped>
section {
  background-color: #001f3f;
}
</style>
