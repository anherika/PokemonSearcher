// Espera a que todo el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.querySelector('.navigation');
    const navContainer = document.querySelector('.nav-charizard');
  
    if (hamburger && navMenu && navContainer) {
      // Restaurar estado anterior del menú si se guardó
      const isMenuOpen = localStorage.getItem('menu-open') === 'true';
      if (isMenuOpen) {
        navMenu.classList.add('active');
        navContainer.classList.add('wrap-enabled');
      }
  
      // Alternar menú y guardar estado en localStorage
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navContainer.classList.toggle('wrap-enabled');
  
        const isNowOpen = navMenu.classList.contains('active');
        localStorage.setItem('menu-open', isNowOpen);
      });
  
      // Ya no se cierra el menú al hacer clic en los enlaces
    }
  });

