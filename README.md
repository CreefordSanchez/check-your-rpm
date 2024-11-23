## Get your WPM
Welcome to the demo of my WPM (Words Per Minute) test! This tool is designed to evaluate how fast and efficient your typing speed is by challenging you to type a given text accurately within a set time frame. Perfect for testing your skills and tracking your improvement!

## Instruction
<br>
1. Click the Start button to begin the test.
<br>
2. Wait for a moment to prepare yourself.
<br>
3. Once the text appears, start typing as quickly and accurately as you can.
<br>
4. Your test result will be displayed only after the timer ends.

## Development Process
This WPM test was built using HTML, CSS, and JavaScript, focusing on real-time typing tracking, accuracy, and a timer-based system to measure performance efficiently.

```javascript
function gameStart() {
  interval();
  setTimeout(() => {
    targetText.innerHTML = cutWord(story[0], story.slice(1));
    button.innerText = 'Restart';
  },1000);
}

function interval() {
  setInterval(() => {
    if (start) {
      timer--;
      printTimer.innerText = timer;
    } 
    if (timer === 0) {
      start = !start;
      reset();
      getWPM();
    }
  }, 1000);
}
```
<br><br>
When the game starts, the gameStart() function is called to initialize the game. A setTimeout is used to introduce a 1-second delay, giving you time to prepare. This function's primary role is to start the timer and display the word you'll be typing.

```javascript
listener(input, 'input', () => {
  let inputValue = input.value;
  let inputChar = inputValue.slice(-1);
  compare(inputChar);
});

function compare(char) {
  let words = targetText.innerText;
  if (words[0] === char) {
    correctCount++;
    if (words[1] === ' ') {
      targetText.innerText = words.slice(1) + words[0];
    } else {
      targetText.innerHTML = cutWord(words[1], words.slice(2)) + words[0];
    }
  }
}
```
<br><br>
Next, an event listener listens for any input and calls the compare() function. This function checks if the typed word matches the target word. If correct, the word is removed from the input, allowing you to continue typing the next word.

```javascript
function getWPM() {
  wpm = correctCount / 5;
  result.innerText = `WPM: ${wpm}`;
}
```
Next, when the timer reaches 0, the getWPM() function is called from the interval(). This function calculates your WPM result by taking the number of correct words identified by the compare() function and dividing it by 5
