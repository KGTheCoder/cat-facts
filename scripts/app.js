var factContent = document.getElementById("fact-content"),
  factButton = document.getElementById("fact-button");

function getRandomFact() {
  fetch("https://cat-fact.herokuapp.com/facts/random")
    .then((response) => response.json())
    .then((text) => {
      factContent.textContent = text.text;
    });
}
