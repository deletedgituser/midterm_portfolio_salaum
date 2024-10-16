// src/directives/intersection.js

export default {
    mounted(el, binding) {
      const options = {
        root: null, // Defaults to viewport
        threshold: binding.value || 0.1, // Threshold passed as value or default 0.1
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('visible'); // Add the visible class when the element is in view
          } else {
            el.classList.remove('visible'); // Remove the visible class when out of view
          }
        });
      }, options);
  
      observer.observe(el);
  
      // Store the observer for cleanup
      el._observer = observer;
    },
  
    beforeUnmount(el) {
      if (el._observer) {
        el._observer.disconnect(); // Disconnect the observer when the component is destroyed
      }
    }
  };
  