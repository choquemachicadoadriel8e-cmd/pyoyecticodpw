document.addEventListener('DOMContentLoaded', function() {
  console.log('Página "Sobre Nosotros" cargada correctamente');
  
  
  const aboutSection = document.querySelector('.about');
  
  if (aboutSection) {
    aboutSection.style.opacity = '0';
    setTimeout(() => {
      aboutSection.style.transition = 'opacity 0.5s ease';
      aboutSection.style.opacity = '1';
    }, 100);
  }
});