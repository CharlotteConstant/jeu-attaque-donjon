console.log(
  `Bienvenue dans le donjon ou vous allez affronter le maitre des lieux`
);

let arme = {
  bois: 2,
  fer: 5,
  magique: 10,
};

let armure = {
  bois: 1,
  fer: 3,
  margique: 5,
};

let player = {
  pointVie: 100,
  dommages: "",
  armure: "",
};

let maitreDonjon = {
  pointVie: 150,
  dommages: 6,
  armure: 4,
};

let armeUser;

while (armeUser != `bois` && armeUser != `fer` && armeUser != `magique`) {
  armeUser = prompt(`Veuillez choisir votre arme: bois, fer ou magique`);
}

console.log(`Vous avez choisi ${armeUser}`);

let armureUser;

while (armureUser != `bois` && armureUser != `fer` && armureUser != `magique`) {
  armureUser = prompt("Veuillez choisir votre armure: bois, fer ou magique");
}

console.log(`Vous avez choisi ${armureUser}`);

console.log("le combat va commencer");

// combat
let play = 1;

player.dommages = arme[armeUser];
player.armure = armure[armureUser];

/*while (maitreDonjon.pointVie > 0 && player.pointVie > 0) {
  if (play % 2 == 0) {
    maitreDonjon.pointVie = maitreDonjon.pointVie - degatsMaitreDonjon;
    console.log(
      `le joueur attaque et il te reste ${maitreDonjon.pointVie} de point de vie au maitre du Donjon`
    );
  } else {
    player.pointVie = player.pointVie - degatsPlayer;
    console.log(
      `le maitre de Donjon attaque et il te reste ${player.pointVie} de point de vie au joueur`
    );
  }
  play++;
}

let degatsMaitreDonjon = player.dommages - maitreDonjon.armure;
if (degatsMaitreDonjon > 0) {
  console.log(`Le joueur attaque et il te reste ${maitreDonjon.pointVie}`);
} else {
  console.log(`Le joueur n'inflige pas de dégats`);
}

let degatsPlayer = maitreDonjon.dommages - player.armure;
if (degatsPlayer > 0) {
  console.log(
    `le maitre du donjon vous attaque et il te reste ${player.pointVie}`
  );
} else {
  console.log(`le maitre du donjon n'inflige pas de dégats`);
}*/

let degatsMaitreDonjon = player.dommages - maitreDonjon.armure;
let degatsPlayer = maitreDonjon.dommages - player.armure;

while (maitreDonjon.pointVie > 0 && player.pointVie > 0) {
  if (play % 2 == 0) {
    maitreDonjon.pointVie = maitreDonjon.pointVie - degatsMaitreDonjon;
    if (degatsMaitreDonjon > 0) {
      console.log(`Le joueur attaque et il te reste ${maitreDonjon.pointVie}`);
    } else {
      console.log(`Le joueur n'inflige pas de dégats`);
    }
  } else {
    player.pointVie = player.pointVie - degatsPlayer;
    if (degatsPlayer > 0) {
      console.log(
        `le maitre du donjon vous attaque et il te reste ${player.pointVie}`
      );
    } else {
      console.log(`le maitre du donjon n'inflige pas de dégats`);
    }
  }
  play++;
}

//fin du jeu
if (maitreDonjon.pointVie > 0) {
  console.log(`Vous avez perdu contre le maitre du Donjon`);
} else if (player.pointVie > 0) {
  console.log(`Bravo, vous avez gagné contre le maitre du Donjon`);
}
