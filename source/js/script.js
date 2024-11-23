'use strict';

const story = "In a world where spaghetti grows on trees and cats are the official rulers of every city, life can be a bit peculiar. Every morning, the citizens gather at the Great Pasta Grove to harvest noodles for breakfast. Meanwhile, the feline council sits on velvet thrones, deciding whether today will be a day for naps, laser pointer chases, or declaring new public holidays in honor of tuna. One day, a young dog named Barkley decided he had enough of the cats' rule. Armed with nothing but a wagging tail and a dream, he set out on an epic journey to the Forbidden Dog Park, where ancient chew toys are said to grant the wisdom of leadership. Along the way, Barkley faced many trials, like convincing a flock of geese to let him cross the Marsh of Eternal Honking and outsmarting a raccoon gang guarding the Golden Trash Can. Finally, reaching the Dog Park, Barkley found the legendary Squeaky Bone of Destiny. With it, he returned to the city and challenged the feline council to a duel of wits. To everyone's surprise, the cats conceded, declaring Barkley the new ruler of Noodle City. From that day on, dogs and cats ruled together, sharing naps and tuna in a harmonious world of barking and purring.";

function selector(selector) {
  return document.querySelector(selector);
} 

function listener(selector, event, callBack) {
  return selector.addEventListener(event, callBack);
}

const input = selector('.input');
const targetText = selector('.words');
const body = selector('body');
const button = selector('button');
const printTimer = selector('.timer');
const result = selector('.result');
let start = false;
let correctCount = 0;
let timer = 60;
let wpm = 0;

listener(body, 'click', () => {
  input.focus();
});

listener(window, 'load', () => {
  input.focus();
});

listener(input, 'input', () => {
  let inputValue = input.value;
  let inputChar = inputValue.slice(-1);
  compare(inputChar);
});

listener(button, 'click', () => {
  start = !start;
  button.innerText = 'Go!';
  if (start) {
    gameStart();
  } else {
    reset();
  } 
});

function reset() {
  targetText.innerHTML = '';
  button.innerText = 'Start';
  timer = 60;
  printTimer.innerText = '';
}

function getWPM() {
  wpm = correctCount / 5;
  result.innerText = `WPM: ${wpm}`
}

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

function cutWord(char, rest) {
  return `<span>${char}</span>${rest}`;
}

function getWords() {

}