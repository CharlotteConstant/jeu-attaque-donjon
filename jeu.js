console.log(
  `Bienvenue dans le donjon ou vous allez affronter le maitre des lieux`
);

let arme = {
  bois: 3,
  fer: 5,
  magique: 10,
};

let armure = {
  bois: 1,
  fer: 3,
  magique: 5,
};

let player = {
  pointVie: 40,
  dommages: "",
  armure: "",
};

let maitreDonjon = {
  pointVie: 50,
  dommages: 6,
  armure: 4,
};

let armeUser;

while (armeUser != `bois` && armeUser != `fer` && armeUser != `magique`) {
  armeUser = prompt(`Veuillez choisir votre arme: bois, fer ou magique`);
}

console.log(`Vous avez choisi arme ${armeUser}`);

let armureUser;

while (armureUser != `bois` && armureUser != `fer` && armureUser != `magique`) {
  armureUser = prompt("Veuillez choisir votre armure: bois, fer ou magique");
}

console.log(`Vous avez choisi armure ${armureUser}`);

console.log("le combat va commencer");

// combat
let play = 1;

player.dommages = arme[armeUser];
player.armure = armure[armureUser];

let degatsMaitreDonjon = player.dommages - maitreDonjon.armure;
let degatsPlayer = maitreDonjon.dommages - player.armure;

while (maitreDonjon.pointVie > 0 && player.pointVie > 0) {
  if (play % 2 == 0) {
    maitreDonjon.pointVie = maitreDonjon.pointVie - degatsMaitreDonjon;
    if (degatsMaitreDonjon > 0) {
      console.log(
        `Vous attaquez et infligez ${degatsMaitreDonjon} de dégâts, il reste ${maitreDonjon.pointVie} de points de vie au maitre du donjon`
      );
    } else {
      console.log(`Vous n'infligez pas de dégâts au maitre du donjon`);
    }
  } else {
    player.pointVie = player.pointVie - degatsPlayer;
    if (degatsPlayer > 0) {
      console.log(
        `le maitre du donjon vous attaque et vous inflige ${degatsPlayer} de dégâts, il vous reste ${player.pointVie} point de vie`
      );
    } else {
      console.log(`le maitre du donjon ne vous inflige pas de dégâts`);
    }
  }
  play++;
}

//fin du jeu
if (maitreDonjon.pointVie > 0) {
  console.log(
    `Vous avez perdu contre le maitre du Donjon qui est bien trop fort pour vous!`
  );
} else if (player.pointVie > 0) {
  console.log(
    `Bravo, vous avez gagné contre le maitre du Donjon! Recommencez pour être sur que ce n'est pas la chance du débutant`
  );
}
