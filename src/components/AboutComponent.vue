<template>
  <section id="about">
    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <img
              id="me"
              alt="my picture"
              src="../assets/images/Picsart_24-10-16_00-45-59-746.png"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div class="relative flex items-center text-background"  @mousemove="handleMouseMove" @mouseleave="resetTilt">
          <div class="p-8 sm:p-16 lg:p-24">
            <h2
              class="text-4xl font-semibold sm:text-4xl md:text-5xl text-white font-effect-anaglyph"
            >
              About Me
            </h2>

            <h3 class="text-2xl mt-3 font-bold text-white">
              I'm Wendel Rey Salaum.
            </h3>
            <p class="mt-0 text-white">
              I am a passionate 3rd-year student with a strong interest in
              technology and programming. My enthusiasm for the field extends to
              cybersecurity, where I've actively engaged in various
              cybersecurity events, gaining hands-on experience and deepening my
              knowledge. I thrive on exploring new technologies, solving complex
              problems, and continuously learning to stay ahead in this
              ever-evolving landscape.
            </p>
            <a
              href="https://drive.google.com/file/d/1ephvDcasTPdssTJx6CPJdZZ_9v7lC_15/view?usp=sharing"
              download="WR.CV_CV.pdf"
              class="bg-cyan-950 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 inline-block"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tilt: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    transformStyle() {
      return {
        transform: `rotateY(${this.tilt.x}deg) rotateX(${this.tilt.y}deg)`,
      };
    },
  },
  methods: {
    handleMouseMove(event) {
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = event.currentTarget;
      const x = (clientX / offsetWidth) * 100; // Percentage of the width
      const y = (clientY / offsetHeight) * 100; // Percentage of the height

      const tiltX = ((x - 50) / 50) * 10; // Adjust tilt value
      const tiltY = ((y - 50) / 50) * 10; // Adjust tilt value

      this.tilt.x = tiltX;
      this.tilt.y = tiltY;
    },
    resetTilt() {
      this.tilt.x = 0;
      this.tilt.y = 0;
    },
  },
};
</script>

<style>
.text-background {
  background-color: #001f3f;
}
</style>
