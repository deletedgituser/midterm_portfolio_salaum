<template>
  <div class="floating-circles-background">
    <div class="circle large"></div>
    <div class="circle medium"></div>
    <div class="circle small"></div>
    <div class="circle large"></div>
    <div class="circle medium"></div>
    <div class="circle small"></div>
    <div class="circle large"></div>
    <div class="circle medium"></div>
    <div class="circle small"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundComponent',
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 200vh; /* Increased height for scrolling */
  overflow: auto; /* Enable scrolling */
  background-color: #000; /* Full black background */
}

/* Floating circles background */
.floating-circles-background {
  position: fixed; /* Fixed position */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Behind other elements */
  overflow: hidden; /* Hide overflow */
}

.circle {
  position: absolute;
  background: rgba(255, 255, 255, 0.3); /* White transparent background */
  border-radius: 50%; /* Make it circular */
  animation: float 6s ease-in-out infinite; /* Animation for floating effect */
}

/* Define sizes and durations */
.large {
  width: 150px;
  height: 150px;
  animation-duration: 8s; /* Longer duration for larger circles */
}

.medium {
  width: 100px;
  height: 100px;
  animation-duration: 5s; /* Medium duration for medium circles */
}

.small {
  width: 70px;
  height: 70px;
  animation-duration: 4s; /* Shorter duration for smaller circles */
}

/* Floating Animation */
@keyframes float {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.2); /* Floating effect */
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

/* Randomize circle positions */
.circle:nth-child(1) {
  top: 10%; left: 10%;
  animation-delay: 0s;
}

.circle:nth-child(2) {
  top: 20%; left: 30%;
  animation-delay: 1s;
}

.circle:nth-child(3) {
  top: 30%; left: 50%;
  animation-delay: 2s;
}

.circle:nth-child(4) {
  top: 40%; left: 70%;
  animation-delay: 3s;
}

.circle:nth-child(5) {
  top: 50%; left: 80%;
  animation-delay: 4s;
}

.circle:nth-child(6) {
  top: 60%; left: 20%;
  animation-delay: 5s;
}

.circle:nth-child(7) {
  top: 70%; left: 10%;
  animation-delay: 6s;
}

.circle:nth-child(8) {
  top: 80%; left: 60%;
  animation-delay: 7s;
}

.circle:nth-child(9) {
  top: 90%; left: 40%;
  animation-delay: 8s;
}

/* Content styles (if you have any content) */
.content {
  position: relative; /* Ensures content is above background */
  z-index: 1;
  color: #fff; /* Change text color for contrast */
  padding: 20px; /* Padding for content */
}
</style>
