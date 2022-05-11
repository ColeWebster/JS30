function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stops the function from running
    key.classList.add('playing')
    audio.currentTime = 0; // Rewind to the start for multiple presses
    audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);