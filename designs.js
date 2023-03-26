const colorInput = document.getElementById("colorPicker");
const heightInput = document.getElementById("inputHeight");
const widthInput = document.getElementById("inputWidth");
const form = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
let color = colorInput.value;

// Add event listener for color change
colorInput.addEventListener("change", function (e) {
  color = e.target.value;
});

// Add event listener for form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  makeGrid(heightInput.value, widthInput.value);
});

// Function paint the grid of given size
function makeGrid(n, m) {
  canvas.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const row = document.createElement("tr");
    for (let k = 0; k < m; k++) {
      const cell = document.createElement("td");
      cell.addEventListener("click", function (e) {
        e.target.style.backgroundColor = color;
      });
      row.appendChild(cell);
    }``
    canvas.appendChild(row);
  }
}
