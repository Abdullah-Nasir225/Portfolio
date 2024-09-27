  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }
    
    // Function to add the active class when the section is in the viewport
    function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('active');
      } else {
        section.classList.remove('active'); // Optional: remove class if section goes out of view
      }
    });
    }
    
    // Listen for scroll event
    window.addEventListener('scroll', handleScroll);





          // Function to check if an element is in the viewport
          function isInViewports(element) {
            const rect = element.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            }
            
            // Function to add the active class when the section is in the viewport
            function handleScrolls() {
            const sections2 = document.querySelectorAll('.sections');
            sections2.forEach(section => {
              if (isInViewports(section)) {
                section.classList.add('actives');
              } else {
                section.classList.remove('actives'); // Optional: remove class if section goes out of view
              }
            });
            }
            
            // Listen for scroll event
            window.addEventListener('scroll', handleScrolls);




          // Function to check if an element is in the viewport
          function isInViewported(element) {
            const rect = element.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            }
            
            // Function to add the active class when the section is in the viewport
            function handleScrolled() {
            const sections2 = document.querySelectorAll('.section-contact');
            sections2.forEach(section => {
              if (isInViewported(section)) {
                section.classList.add('active-contact');
              } else {
                section.classList.remove('active-contact'); // Optional: remove class if section goes out of view
              }
            });
            }
            
            // Listen for scroll event
            window.addEventListener('scroll', handleScrolled);
            // Contact form visibility
            const appear = () =>{
              document.querySelector('#contact').classList.remove('hidden');
            }

   // Get the hamburger icon and the nav links
   const menuIcon = document.getElementById('menu-icon');
   const navLinks = document.getElementById('nav-links');
   
   // Add an event listener to toggle the menu on click
   menuIcon.addEventListener('click', () => {
     navLinks.classList.toggle('active');
   });
  