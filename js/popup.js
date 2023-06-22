

const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

popupOverlay.addEventListener('click', function(event) {
  if (event.target === popupClose) {
    popupOverlay.style.display = 'none';
    popupOverlay.classList.remove('active');
    window.location.href = 'about.html';
  }
});

setTimeout(function() {
  popupOverlay.classList.add('active');
}, 1000);



  