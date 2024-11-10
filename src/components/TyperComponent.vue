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
        this.currentText = normal + this.replace[this.index];
        this.style.top = '20px';
        this.style.opacity = 0;

        setTimeout(() => {
          this.style.top = '0px';
          this.style.opacity = 1;
        }, 50);

        this.index = (this.index + 1) % this.replace.length;
        setTimeout(animateText, this.delay);
      };

      animateText();
    }
  }
};
</script>

<style scoped>
.typer {
  background-color: #001F3F;
}

.typer p {
  animation: shift 4s ease-in-out infinite alternate;
  transition: top 0.3s ease, opacity 0.3s ease;
  transform: skewX(0deg);
  z-index: 1;
}

@keyframes shift {
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
     transform: skewX(0deg);
  }

  41% {
     transform: skewX(10deg);
  }

  42% {
     transform: skewX(-10deg);
  }

  59% {
     transform: skewX(40deg) skewY(10deg);
  }

  60% {
     transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
     transform: skewX(10deg) skewY(-5deg);
  }

  70% {
     transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
     transform: skewX(10deg) skewY(-10deg);
  }
}
</style>
