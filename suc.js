
document.addEventListener('DOMContentLoaded', function() {
  console.log('Página "Sucursales" cargada correctamente');
  

  const branchCards = document.querySelectorAll('.branch-card');
  
  branchCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.backgroundColor = this.style.backgroundColor === 'rgb(255, 245, 245)' ? 'white' : '#fff5f5';
    });
  });
  

  const branchesSection = document.querySelector('.branches');
  
  if (branchesSection) {
    branchesSection.style.opacity = '0';
    setTimeout(() => {
      branchesSection.style.transition = 'opacity 0.5s ease';
      branchesSection.style.opacity = '1';
    }, 100);
  }
});