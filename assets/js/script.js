// APRICOT VELVET JAVASCRIPT CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.av-mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.querySelector('.av-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  // Accordion Controller
  const accordionHeaders = document.querySelectorAll('.av-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const isOpen = parent.classList.contains('active');
      
      document.querySelectorAll('.av-accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isOpen) {
        parent.classList.add('active');
      }
    });
  });
});
