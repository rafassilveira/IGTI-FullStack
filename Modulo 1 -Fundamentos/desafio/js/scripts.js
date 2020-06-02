window.addEventListener("load", start);

var globalNames = ["um", "dois", "tres", "quatro", "cinco", "seis"];
var currentIndex = null;
var inputName = null;
var isEditing = false;
function start() {
  inputName = document.querySelector("#inputName");
  preventFormSubmit();
  activateInput();
  render();
}

//prevenir o carregamento da pagina ao teclar enter
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
  }
  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  function handleTyping(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        //pegar o valor do input ao digitarenter
        insertName(event.target.value);
      }
      render();
      isEditing = false;
      clearInput();
    }
  }
  inputName.addEventListener("keyup", handleTyping);
  //ao recarregar a pagina, foca no input do form
  inputName.focus();
}
function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "x";

    button.addEventListener("click", deleteName);
    return button;
  }
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement("span");
    span.classList.add("clickable");
    span.textContent = name;
    span.addEventListener("click", editItem);

    return span;
  }
  var divNames = document.querySelector("#names");
  divNames.innerHTML = "";
  var ul = document.createElement("ul");

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement("li");
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
  // inputName.value = "";
}

// limpar input depois de inserir na lista
function clearInput() {
  inputName.value = "";
  inputName.focus();
}
