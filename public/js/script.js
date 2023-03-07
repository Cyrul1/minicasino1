const rulette = document.querySelector('.rulette');
const startButtons = document.querySelectorAll('.start'); 

let state = {
  clickedButton: null,
  activeButton: null,
  isAnimationRunning: false
};

function startRotation() {
  const clickedButton = event.target; 
  startButtons.forEach(button => {
    if (button !== clickedButton) {
      button.style.pointerEvents = 'none'; 
    }
  });
  clickedButton.style.pointerEvents = 'auto'; 
  deg = Math.floor(5000 + Math.random()*5000);
  rulette.style.transition = 'all 10s ease';
  rulette.style.transform = `rotate(${deg}deg)`;
  state = {
    clickedButton,
    activeButton: null,
    isAnimationRunning: true
  };
}


startButtons.forEach(button => {
  button.addEventListener('click', startRotation);
});

function enableButton() {
  startButtons.forEach(button => {
    button.style.pointerEvents = 'auto'; 
  });
  state = {
    clickedButton: null,
    activeButton: null,
    isAnimationRunning: false
  };
}


rulette.addEventListener('transitionend', enableButton);