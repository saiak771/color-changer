const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('change-button');
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  let colorCombo = '#';
  for (let i = 0; i < 6; i++) {
    const randomizedNum = getRandomNum();
    colorCombo += hex[randomizedNum];
  }
  document.body.style.backgroundColor = colorCombo;
  color.textContent = colorCombo;
});

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}
