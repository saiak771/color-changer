const colors = ["green", "red", "rgba(255,255,0)", "#0000FF"];
const button = document.getElementById('change-button');
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomizedNum = getRandomNum();
  document.body.style.backgroundColor = colors[randomizedNum];
  color.textContent = colors[randomizedNum];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
