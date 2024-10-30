<template>
    <div class="typer">
      <p
        :style="style"
        class="text-gray-300 mx-auto mt-4 max-w-xl sm:text-xl md:text-2xl tracking-wider font-bold"
      >
        {{ currentText }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      baseText: {
        type: String,
        required: true
      },
      search: {
        type: String,
        required: true
      },
      replace: {
        type: Array,
        required: true
      },
      delay: {
        type: Number,
        default: 3000
      },
      scrollSpeed: {
        type: Number,
        default: 500
      }
    },
    data() {
      return {
        currentText: '',
        index: 0,
        style: {
          position: 'relative',
          top: '20px',
          opacity: 0,
          transition: `top ${this.scrollSpeed}ms ease, opacity ${this.scrollSpeed}ms ease`
        }
      };
    },
    mounted() {
      this.updateText();
    },
    methods: {
      updateText() {
        const indexOf = this.baseText.indexOf(this.search);
        const normal = this.baseText.substring(0, indexOf);
  
        const animateText = () => {
          // Update text with base + replacement word
          this.currentText = normal + this.replace[this.index];
  
          // Reset animation style
          this.style.top = '20px';
          this.style.opacity = 0;
  
          // Trigger transition after a small delay to ensure visibility
          setTimeout(() => {
            this.style.top = '0px';
            this.style.opacity = 1;
          }, 50);
  
          // Cycle through the `replace` array
          this.index = (this.index + 1) % this.replace.length;
  
          // Call animateText again after delay
          setTimeout(animateText, this.delay);
        };
  
        animateText();
      }
    }
  };
  </script>
  
  <style scoped>
  .typer p {
    transition: top 0.3s ease, opacity 0.3s ease;
  }
  </style>
  