document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.visible');

    elements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      const elementCenterX = elementRect.left + elementRect.width / 2;
      const elementCenterY = elementRect.top + elementRect.height / 2;

      document.addEventListener('mousemove', (e) => {
        const distance = Math.sqrt(
          Math.pow(e.clientX - elementCenterX, 2) + 
          Math.pow(e.clientY - elementCenterY, 2)
        );

        const proximityThreshold = 100; // Adjust this value to change proximity sensitivity

        if (distance < proximityThreshold) {
          element.classList.add('active');
          document.removeEventListener('mousemove', arguments.callee); // Remove listener after animation starts
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.moveright');
  
    elements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      const elementCenterX = elementRect.left + elementRect.width / 2;
      const elementCenterY = elementRect.top + elementRect.height / 2;
  
      document.addEventListener('mousemove', (e) => {
        const distance = Math.sqrt(
          Math.pow(e.clientX - elementCenterX, 2) + 
          Math.pow(e.clientY - elementCenterY, 2)
        );
  
        const proximityThreshold = 100; // Adjust this value to change proximity sensitivity
  
        if (distance < proximityThreshold) {
          element.classList.add('active');
          document.removeEventListener('mousemove', arguments.callee); // Remove listener after animation starts
        }
      });
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.moveup');

    elements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      const elementCenterX = elementRect.left + elementRect.width / 2;
      const elementCenterY = elementRect.top + elementRect.height / 2;

      document.addEventListener('mousemove', (e) => {
        const distance = Math.sqrt(
          Math.pow(e.clientX - elementCenterX, 2) + 
          Math.pow(e.clientY - elementCenterY, 2)
        );

        const proximityThreshold = 100; // Adjust this value to change proximity sensitivity

        if (distance < proximityThreshold) {
          element.classList.add('active');
          document.removeEventListener('mousemove', arguments.callee); // Remove listener after animation starts
        }
      });
    });
  });