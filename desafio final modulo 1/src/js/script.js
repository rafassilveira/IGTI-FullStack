let allUsers = [],
  newUsers = [],
  listUsers,
  inputValue,
  buttonSearch,
  usersHTML,
  userHTML,
  totalUsers,
  totalFemale = 0,
  totalMale = 0,
  totalAge = 0,
  totalAvg = 0,
  statistics;

window.addEventListener("load", () => {
  inputValue = document.querySelector("#input");
  buttonSearch = document.querySelector("#buttonSearch");
  listUsers = document.querySelector(".listUsers");
  totalUsers = document.querySelector("#totalUsers");
  male = document.querySelector("#totalMale");
  female = document.querySelector("#totalFemale");
  sumAge = document.querySelector("#sumAge");
  avgAge = document.querySelector("#avgAge");
  statistics = document.querySelector("#statistics");
  fetchUsers();
});

async function fetchUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  allUsers = json.results.map((user) => {
    const { name, dob, picture, gender } = user;
    return {
      name: name.first + " " + name.last,
      age: dob.age,
      picture: picture.medium,
      gender,
    };
  });
  render();
}
function render() {
  searchClickted();
  enterPressed();
}
function enterPressed() {
  inputValue.addEventListener("keyup", (key) => {
    if (key.key == "Enter") {
      catchUsers();
    }
  });
}
function searchClickted() {
  buttonSearch.addEventListener("click", () => {
    catchUsers();
  });
}
function catchUsers() {
  newUsers = [];
  allUsers.map((user) => {
    if (user.name.search(new RegExp(`${inputValue.value}`, "i")) !== -1) {
      newUsers.push(user);
    }
  });
  renderUsers();
  renderStatistic();
}
function renderUsers() {
  totalUsers.textContent = `${newUsers.length} usuário(s) encontado(s)`;
  console.log(totalUsers);

  let usersHTML = `<div> <h3>${totalUsers.textContent}</h3>`;
  newUsers.forEach((user) => {
    const { name, age, gender, picture } = user;
    const userHTML = `    
    <div class="user">
      <img src="${picture}" alt="${name}">
      <span >${name}, ${age}</span>
      
    </div>
    
    `;
    usersHTML += userHTML;
  });

  usersHTML += "</div>";
  listUsers.innerHTML = usersHTML;
}
function renderStatistic() {
  statistics.textContent = "Estatística";
  calcGenders();
  calcAge();
  calcAvg();
}
function calcGenders() {
  newUsers.filter((user) => {
    if (user.gender == "male") {
      totalMale += 1;
    } else {
      totalFemale += 1;
    }
  });
  female.innerHTML = `Sexo feminino: <strong>${totalFemale}</strong>`;
  male.innerHTML = `Sexo masculino: <strong>${totalMale}</strong>`;
}
function calcAge() {
  totalAge = newUsers.reduce((acc, user) => {
    return acc + user.age;
  }, 0);
  sumAge.innerHTML = `Somas das idades:<strong>${totalAge}</strong>`;
}
function calcAvg() {
  totalAvg = Math.round(totalAge / newUsers.length);

  avgAge.innerHTML = `Média das idades:<strong>${totalAvg}</strong>`;
}
