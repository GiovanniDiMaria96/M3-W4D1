//FUNZIONE PER LO SCORRIMENTO MANUALE DELLO SNAP - SCROLL
document.querySelectorAll('.carousel-arrow').forEach(function(button) {
    button.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      var targetContainer = document.getElementById(targetId);
  
      if (this.classList.contains('left')) {
        // Scorrimento a sinistra
        targetContainer.scrollLeft -= 350;
      } else {
        // Scorrimento a destra
        targetContainer.scrollLeft += 350;
      }
    });
  });


//FUNZIONE PER LO SCORRIMENTO AUTOMATICO DELLO SNAP - SCROLL
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 50 && scrollPosition < 70) {
        document.querySelector('.carousel-arrow[data-target="scroll-container1"].right').click();
    } else if (scrollPosition > 500 && scrollPosition < 520) {
        document.querySelector('.carousel-arrow[data-target="scroll-container2"].right').click();
    } else if (scrollPosition > 1000 && scrollPosition < 1050) {
        document.querySelector('.carousel-arrow[data-target="scroll-container3"].right').click();
    }
});



//FUNZIONE PER FAR PARTIRE TUTTI GLI SNAP - SCROLL SEMPRE DA SINISTRA VERSO DESTRA
window.onload = function() {
  window.scrollTo(0, 0);
};





