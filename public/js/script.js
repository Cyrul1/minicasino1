const rulette = document.querySelector('.rulette');
const startButtons = document.querySelectorAll('.start');

const redInput = document.querySelector('input[name="red"]');
const greenInput = document.querySelector('input[name="green"]');
const blackInput = document.querySelector('input[name="black"]');

const redButton = document.querySelector('.btnred');
const greenButton = document.querySelector('.btngreen');
const blackButton = document.querySelector('.btnblack');

function updateButtonDisabledState() {
  redButton.disabled = !redInput.value;
  greenButton.disabled = !greenInput.value;
  blackButton.disabled = !blackInput.value;
}

redInput.addEventListener('input', updateButtonDisabledState);
greenInput.addEventListener('input', updateButtonDisabledState);
blackInput.addEventListener('input', updateButtonDisabledState);



let state = {
  clickedButton: null,
  activeButton: null,
  isAnimationRunning: false
};

function startRotation(event) {
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
    updateButtonDisabledState(); // Call the function to update the buttons' disabled state
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
  
    const actualDeg = deg % 360;
  
    var result = document.getElementById('result');
  
    if (actualDeg >= 0 && actualDeg < 10) {
        result.textContent = "26 black";
        document.body.classList.remove('green');
        document.body.classList.remove('red');
        document.body.classList.add('black');
    }
    else if (actualDeg >= 10 && actualDeg < 18) {
        result.textContent = "3 RED";
        document.body.classList.remove('green');
        document.body.classList.remove('black');
        document.body.classList.add('red');
    }
    else if (actualDeg >= 18 && actualDeg < 28) {
        result.textContent = "35 black";
        document.body.classList.remove('green');
        document.body.classList.remove('red');
        document.body.classList.add('black');
    }
    else if (actualDeg >= 28 && actualDeg < 37) {
        result.textContent = "12 RED";
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 37 && actualDeg < 47) {
        result.textContent = "28 black";
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 47 && actualDeg < 57) {
        result.textContent = "7 RED";
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 57 && actualDeg < 67) {
        result.textContent = "29 black";
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 67 && actualDeg < 77) {
        result.textContent = "18 RED";
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 77 && actualDeg < 87){
        result.textContent="22 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');  
    }
    else if (actualDeg >= 87 && actualDeg < 97){
        result.textContent="9 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 97 && actualDeg < 107){
        result.textContent="31 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black'); 
    }
    else if (actualDeg >= 107 && actualDeg < 117){
        result.textContent="14 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 117 && actualDeg < 127){
        result.textContent="20 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black'); 
    }
    else if (actualDeg >= 127 && actualDeg < 136){
        result.textContent="1 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 136 && actualDeg < 146){
        result.textContent="33 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');  
    }
    else if (actualDeg >= 146 && actualDeg < 156){
        result.textContent="16 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red'); 
    }
    else if (actualDeg >= 156 && actualDeg < 166){
        result.textContent="24 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 166 && actualDeg < 175){
        result.textContent="5 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 175 && actualDeg < 185){
        result.textContent="10 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black'); 
    }
    else if (actualDeg >= 185 && actualDeg < 195){
        result.textContent="23 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 195 && actualDeg < 205){
        result.textContent="8 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 205 && actualDeg < 215){
        result.textContent="30 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red'); 
    }
    else if (actualDeg >= 215 && actualDeg < 224){
        result.textContent="11 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');  
    }
    else if (actualDeg >= 224 && actualDeg < 234){
        result.textContent="36 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 234 && actualDeg < 243){
        result.textContent="13 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 243 && actualDeg < 253){
        result.textContent="27 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red'); 
    }
    else if (actualDeg >= 253 && actualDeg < 263){
        result.textContent="6 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 263 && actualDeg < 273){
        result.textContent="34 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red'); 
    }
    else if (actualDeg >= 273 && actualDeg < 283){
        result.textContent="17 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 283 && actualDeg < 293){
        result.textContent="25 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');;  
    }
    else if (actualDeg >= 293 && actualDeg < 302){
        result.textContent="2 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');  
    }
    else if (actualDeg >= 302 && actualDeg < 311){
        result.textContent="21 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red'); 
    }
    else if (actualDeg >= 311 && actualDeg < 321){
        result.textContent="4 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 321 && actualDeg < 331){
        result.textContent="19 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red'); 
    }
    else if (actualDeg >= 331 && actualDeg < 340){
        result.textContent="15 black";
    
        document.classList.remove('green');
        document.classList.remove('red');
        document.classList.add('black');
    }
    else if (actualDeg >= 340 && actualDeg < 350){
        result.textContent="32 RED";
    
        document.classList.remove('green');
        document.classList.remove('black');
        document.classList.add('red');
    }
    else if (actualDeg >= 350 && actualDeg < 360){
        result.textContent="0 GREEN";
    
        document.classList.remove('red');
        document.classList.remove('black');
        document.classList.add('green');
    }
    


}

rulette.addEventListener('transitionend', enableButton);

