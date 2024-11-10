<template>
  <section
    id="engagements"
    class="bg-[#001F3F] py-16 px-4 sm:px-6 lg:px-8 mt-12"
  >
    <div class="max-w-4xl mx-auto">
      <h2
        class="text-4xl font-bold text-white mb-12 text-center font-effect-anaglyph"
      >
        CyberSecurity Engagement
      </h2>
      <div class="relative">
        <div class="space-y-16">
          <div
            v-for="(yearEvents, year) in events"
            :key="year"
            class="relative"
          >
            <div class="flex items-center mb-6">
              <div
                class="bg-white text-[#001F3F] font-bold py-2 px-4 rounded-full z-10"
              >
                {{ year }}
              </div>
              <div class="flex-grow border-t border-white ml-4"></div>
            </div>
            <ul class="space-y-8">
              <li
                v-for="(event, index) in yearEvents"
                :key="index"
                class="relative pl-10"
              >
                <CheckCircle class="absolute left-0 top-1 w-6 h-6 text-white" />
                <h4
                  class="font-medium text-xl text-white mb-2 font-effect-anaglyph"
                >
                  {{ event.title }}
                </h4>
                <p class="text-gray-300">{{ event.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { CheckCircle } from "lucide-vue-next";

const events = ref({
  2024: [
    {
      title: "National Hack4Gov - 3 Catch The Flag",
      description:
        "Participated in the National Catch the Flag event held last October 4, 2024, by DICT.",
    },
    {
      title: "Regional Hack4Gov - 3 Catch The Flag",
      description:
        "Participated and were hailed as champion in the Regional catch the flag event held last August, 2024, by DICT.",
    },
  ],
  2023: [
    {
      title: "DICT CyberSecurity Seminar",
      description: "Participated in Cybersecurity seminars from DICT.",
    },
    {
      title: "Advanced Security Measures Forum",
      description:
        "Engaged in an advanced security measures forum organized by SecureNet Solutions.",
    },
    {
      title: "Next-Gen Cyber Defense Symposium",
      description:
        "Participated in the Next-Gen Cyber Defense Symposium hosted by FutureSecure Inc.",
    },
  ],
});
</script>

<style scoped>
.font-effect-anaglyph {
  text-shadow: -0.06em 0 red, 0.06em 0 cyan;
}
</style>
