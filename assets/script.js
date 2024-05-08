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