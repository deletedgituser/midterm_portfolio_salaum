<template>
  <header class="pattern">
    <div class="px-6 mx-auto">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block" href="#">
              <span class="sr-only">Home</span>
              <img
                class="w-24 h-20 sm:w-40 md:w-48 sm:h-28 md:h-40 name-logo"
                src="../assets/images/Black_Outline_Street_Brand_Modern_Typography_Logo-removebg-preview.png"
                alt="logo"
              />
            </a>
          </div>

          <div class="flex lg:hidden px-6">
            <button
              @click="toggleMenu"
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-1.5 text-gray-300"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div class="hidden lg:flex lg:gap-x-12">
            <ul class="flex items-center gap-6">
              <li
                class="hover:scale-125 transition-transform hover:shadow-md hover:shadow-sky-700"
              >
                <a class="nav-link" href="#about">About</a>
              </li>
              <li
                class="hover:scale-125 transition-transform hover:shadow-md hover:shadow-sky-700"
              >
                <a class="nav-link" href="#engagements">Engagements</a>
              </li>
              <li
                class="hover:scale-125 transition-transform hover:shadow-md hover:shadow-sky-700"
              >
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li
                class="hover:scale-125 transition-transform hover:shadow-md hover:shadow-sky-700"
              >
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <!-- Mobile menu, show/hide based on menu open state -->
          <div v-if="isMenuOpen" class="fixed inset-0 z-20">
            <div
              class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div class="flex lg:hidden px-8 items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Home</span>
                </a>
                <button
                  type="button"
                  @click="toggleMenu"
                  class="inline-flex items-center justify-center rounded-md p-1.5 text-gray-700"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div class="mt-6 flow-root bg-white">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a
                      @click="toggleMenu"
                      href="#about"
                      class="mobile-menu-link"
                    >
                      About
                    </a>
                    <a
                      @click="toggleMenu"
                      href="#engagements"
                      class="mobile-menu-link"
                    >
                      Engagements
                    </a>
                    <a
                      @click="toggleMenu"
                      href="#projects"
                      class="mobile-menu-link"
                    >
                      Projects
                    </a>
                    <a
                      @click="toggleMenu"
                      href="#contact"
                      class="mobile-menu-link"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of Mobile menu, show/hide based on menu open state -->
        </div>
      </div>

      <div class="flex flex-col items-center py-6">
        <div
          class="mx-auto max -w-screen-xl px-4 justify-center text-center flex h-screen items-center"
        >
          <div class="mx-auto max-w-3xl text-center -mt-60">
            <div class="glitch-wrapper">
              <h1
                data-text="Wendel Rey Salaum"
                class="name glitch text-gray-100 bg-clip-text font-normal lg:text-9xl text-7xl tracking-wider font-effect-anaglyph custom-font-1"
              >
                Wendel Rey Salaum
              </h1>
            </div>

            <div>
              <TyperComponent
                baseText="A CyberSecurity Enthusiast"
                search="A CyberSecurity Enthusiast"
                :replace="[
                  'A CyberSecurity Enthusiast',
                  'A Passionate Programmer',
                  'An Idea Generator',
                  'A Code Writer',
                  'A Problem Solver',
                  'But most of the time, I am the Problem',
                ]"
                :delay="2000"
                :scrollSpeed="300"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Back to Top button -->
      <button
        @click="scrollToTop"
        class="animate-bounce fixed bottom-6 right-4 z-50 bg-gray-700 text-white font-bold py-2 px-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import TyperComponent from "./TyperComponent.vue";

export default {
  components: {
    TyperComponent,
  },
  data() {
    return {
      isMenuOpen: false, // Reactive property to track menu state
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top with smooth animation
    },
  },
};
</script>

<style scoped>
.name-logo {
  filter: drop-shadow(0px 5px 20px rgba(25, 190, 255, 0.747));
}

.nav-link {
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* text-sm */
  font-weight: 300; /* font-light */
  color: white; /* Text color */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Light background on hover */
  transform: scale(1.05); /* Slightly scale up */
  border-radius: 0.25rem; /* Round corners */
}

.mobile-menu-link {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* Dark text color for mobile */
  transition: background-color 0.3s; /* Smooth transition */
}

.mobile-menu-link:hover {
  background-color: rgba(156, 163, 175, 0.5); /* Light background on hover */
}

.glitch {
  animation: shadowMove 4s linear infinite;
}

@keyframes shadowMove {
  0% {
    filter: drop-shadow(-100px 0px 100px rgba(25, 190, 255, 0.747));
  }
  12.5% {
    filter: drop-shadow(-70px 70px 100px rgba(25, 190, 255, 0.747));
  }
  25% {
    filter: drop-shadow(0px 100px 100px rgba(25, 190, 255, 0.747));
  }
  37.5% {
    filter: drop-shadow(70px 70px 100px rgba(25, 190, 255, 0.747));
  }
  50% {
    filter: drop-shadow(100px 0px 100px rgba(25, 190, 255, 0.747));
  }
  62.5% {
    filter: drop-shadow(70px -70px 100px rgba(25, 190, 255, 0.747));
  }
  75% {
    filter: drop-shadow(0px -100px 100px rgba(25, 190, 255, 0.747));
  }
  87.5% {
    filter: drop-shadow(-70px -70px 100px rgba(25, 190, 255, 0.747));
  }
  100% {
    filter: drop-shadow(-100px 0px 100px rgba(25, 190, 255, 0.747));
  }
}

</style>
