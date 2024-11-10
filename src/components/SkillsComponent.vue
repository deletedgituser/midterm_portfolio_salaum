<template>
    <section id="skillset" class="bg-[#001F3F] py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-1">
            <h2 class="text-4xl font-semibold text-white mb-4 font-effect-anaglyph">
              My Technical Skillset
            </h2>
            <p class="text-gray-300 mb-8">
              With a strong foundation in programming, I bring a diverse set of technical
              skills and expertise to the table. My experience encompasses a broad range of
              programming languages, development tools, and methodologies, allowing me to
              tackle complex challenges and contribute effectively to various projects.
            </p>
          </div>
          <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="skill in skills" :key="skill.name" class="bg-white bg-opacity-10 rounded-lg p-4">
              <h3 class="text-lg font-semibold text-white mb-2">{{ skill.name }}</h3>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-gray-300">{{ getSkillLevel(skill.level) }}</span>
                <span class="text-sm text-gray-300">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const skills = ref([
    { name: "Cryptography", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "C++", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 70 },
    { name: "Git", level: 80 },
  ])
  
  const getSkillLevel = (level) => {
    if (level < 50) return "Basic"
    if (level < 75) return "Intermediate"
    return "Advanced"
  }
  </script>
  
  <style scoped>
  .font-effect-anaglyph {
    text-shadow: -0.06em 0 red, 0.06em 0 cyan;
  }
  </style>