// Here we are going to create a function that will play the sound when key is pressed

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  /**
   * A querySelector returns the first element within the document that matches the specified selector. null is returned if there is no match
   * data-key is a custom attribute. rather than use a class selector we use the attribute selector as you would in css.
   * keyCode is depreciated, a better alternative is KEY but only if the browser supports it. keyCode will still work.
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
   * */
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing'); // highlight keys when pressed
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // return it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
