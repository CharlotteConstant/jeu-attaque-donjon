let arme = {
  bois: 2,
  fer: 5,
  magique: 10,
};

let armure = {
  bois: 1,
  fer: 3,
  magique: 5,
};

let player = {
  pointVie: 20,
  dommages: "",
  armure: "",
};

let maitreDonjon = {
  pointVie: 30,
  dommages: 6,
  armure: 4,
};

let armeUser;

let form = document.querySelector("form");
let log = document.querySelector("#log");
form.addEventListener("submit", logSubmit);

function logSubmit(event) {
  let checked1 = document.querySelector('input[name="choixArme"]:checked');
  let checked2 = document.querySelector('input[name="choixArmure"]:checked');
  let armeP = checked1.dataset.title;
  let armureP = checked2.dataset.title;
  let value1 = checked1.value;
  let value2 = checked2.value;
  event.preventDefault();
  log.textContent = `Vous avez choisi une arme ${armeP} qui infligera ${value1} de dégâts et une armure ${armureP} qui vous protegera de ${value2} points`;

  let tour = document.querySelector("#tour ul");
  combat(maitreDonjon, player);
  resultat();
}

//combat

function combat(maitreDonjon, player) {
  let play = 1;
  let ul = document.querySelector(".list");
  let li = document.createElement("li");
  ul.appendChild(li);
  let checked1 = document.querySelector('input[name="choixArme"]:checked');
  let checked2 = document.querySelector('input[name="choixArmure"]:checked');
  let value1 = checked1.value;
  let value2 = checked2.value;
  player.dommages = value1;
  player.armure = value2;
  let degatsMaitreDonjon = player.dommages - maitreDonjon.armure;
  let degatsPlayer = maitreDonjon.dommages - player.armure;

  while (maitreDonjon.pointVie > 0 && player.pointVie > 0) {
    if (play % 2 == 0) {
      maitreDonjon.pointVie = maitreDonjon.pointVie - degatsMaitreDonjon;
      if (degatsMaitreDonjon > 0) {
        li.innerHTML += `Vous attaquez et infligez ${degatsMaitreDonjon} de dégâts, il reste ${maitreDonjon.pointVie} de points de vie au maitre du donjon <br>`;
      } else {
        li.innerHTML += `Vous n'infligez pas de dégâts au maitre du donjon <br>`;
      }
    } else {
      player.pointVie = player.pointVie - degatsPlayer;
      if (degatsPlayer > 0) {
        li.innerHTML += `le maitre du donjon vous attaque et vous inflige ${degatsPlayer} de dégâts, il vous reste ${player.pointVie} point de vie<br>`;
      } else {
        li.innerHTML += `le maitre du donjon ne vous inflige pas de dégâts<br>`;
      }
    }
    play++;
  }
}

//fin du jeu
function resultat() {
  let resultat = document.querySelector("#resultat h2");
  if (maitreDonjon.pointVie > 0) {
    resultat.innerHTML = `Vous avez perdu contre le maitre du Donjon qui est bien trop fort pour vous!`;
  } else if (player.pointVie > 0) {
    resultat.innerHTML = `Bravo, vous avez gagné contre le maitre du Donjon! Recommencez pour être sur que ce n'est pas la chance du débutant!`;
  }
}
