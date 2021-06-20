// Here we are going to create a function that will play the sound when key is pressed
window.addEventListener('keydown', function (e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  /**
   * A querySelector returns the first element within the document that matches the specified selector. null is returned if there is no match
   * data-key is custom attribute. rather than use a class selector we use the attribute selector as you would in css.
   * keyCode is depreciated, a better alternative is key but only if the browser supports it. keyCode will still work.
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
   * */
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  console.log(key);
});
