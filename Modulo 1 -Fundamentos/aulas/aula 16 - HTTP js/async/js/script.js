window.addEventListener("load", () => {
  doFetch();
  doFetchAsync();
  executeDivisionPromise();
  executeDivisionPromiseAwait();
});

function doFetch() {
  //primeiro parametro é o  res, que são estruturas e binarios da request
  fetch("https://api.github.com/users/rrgomide")
    .then((res) => {
      //entao pegamos a reposta, passamos para JSON e depois fazemos mais uma promise pegando os dados
      res.json().then((data) => {
        //data será o retorno dos dados requisitados
        showData(data);
      });
    })
    .catch((error) => {
      console.log("Error na requisição" + error);
    });
}
async function doFetchAsync() {
  const res = await fetch("https://api.github.com/users/rrgomide");
  const json = await res.json();
  console.log(json);
}

function showData(data) {
  const user = document.querySelector("#user");
  user.textContent = data.login + " " + data.name;
}

function divisionPromise(a, b) {
  // o resolve e o reject são parametos padrão do Promise
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("não é possivel dividir por 0");
    }
    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(12, 6)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("falha na divisão " + error);
    });
}

async function executeDivisionPromiseAwait() {
  const division = await divisionPromise(12, 4);
  console.log(division);
}
