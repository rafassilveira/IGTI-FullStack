const rangeVermelho = document.querySelector("#rangeVermelho");
const rangeVerde = document.querySelector("#rangeVerde");
const rangeAzul = document.querySelector("#rangeAzul");
const inputVermelho = document.querySelector("#inputVermelho");
const inputVerde = document.querySelector("#inputVerde");
const inputAzul = document.querySelector("#inputAzul");
window.addEventListener("load", start);

function start() {
  rangeVermelho.addEventListener("change", (event) => {
    inputVermelho.value = rangeVermelho.value;
    renderColor();
  });
  rangeVerde.addEventListener("change", (event) => {
    inputVerde.value = rangeVerde.value;
    renderColor();
  });
  rangeAzul.addEventListener("change", (event) => {
    inputAzul.value = rangeAzul.value;
    renderColor();
  });

  renderColor();
  function renderColor() {
    const newColor = (document.querySelector(
      ".quadrado"
    ).style.backgroundColor = `rgb(${inputVermelho.value},${inputVerde.value},${inputAzul.value})`);
    return newColor;
  }
}
