window.addEventListener('keydown', playSound)

function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio)
    return; //stops the function if there's no audio element for pressed key
  audio.currentTime = 0; //allows audio to be played instantly on keydown
  audio.play();

  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform')
    return; //skip event property if not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
