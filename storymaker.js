// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");
const studentIdParagraph = document.getElementById("studentId");

/* Variables for pre-defined arrays
-------------------------------------------------- */
const nouns1 = [
  "a turkey",
  "mom",
  "dad",
  "the dog",
  "my teacher",
  "the elephant",
  "the cat",
];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimey",
  "a barking",
  "a fat",
];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];

/* Variables for count to grab array elements
-------------------------------------------------- */
let count = 0;

/* Functions
-------------------------------------------------- */
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function noun1_on_click() {
  const randomNoun1 = getRandomElement(nouns1);
  chosenNoun1.textContent = randomNoun1;
}

function verb_on_click() {
  const randomVerb = getRandomElement(verbs);
  chosenVerb.textContent = randomVerb;
}

function adjective_on_click() {
  const randomAdjective = getRandomElement(adjectives);
  chosenAdjective.textContent = randomAdjective;
}

function noun2_on_click() {
  const randomNoun2 = getRandomElement(nouns2);
  chosenNoun2.textContent = randomNoun2;
}

function setting_on_click() {
  const randomSetting = getRandomElement(settings);
  chosenSetting.textContent = randomSetting;
}

// Concatenate the user story and display
function playback_on_click() {
  const noun1 = chosenNoun1.textContent;
  const verb = chosenVerb.textContent;
  const adjective = chosenAdjective.textContent;
  const noun2 = chosenNoun2.textContent;
  const setting = chosenSetting.textContent;

  const story = `Once upon a time, ${noun1} ${verb} ${adjective} ${noun2} ${setting}.`;
  storyParagraph.textContent = story;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
  const randomStory = `Once upon a time, 
  ${getRandomElement(nouns1)} 
  ${getRandomElement(verbs)} 
  ${getRandomElement(adjectives)} 
  ${getRandomElement(nouns2)} 
  ${getRandomElement(settings)}.`;
  storyParagraph.textContent = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Add student ID/name dynamically
studentIdParagraph.textContent =
  "Lakehead Student ID: 1274438 | Marshall McDougall";
