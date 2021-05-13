// const letsGo = () => {
//     let person = prompt("Welkom! Wat is je naam?", "Poedeliewoepsie");
//     if (person != null) {
//         return prompt("Hé " + person + "!" + " Voer een getal in tussen 0 en 25 om te beginnen met raden...", "Getal");
//     }
// };

// let min = 1;
// let max = 25;

// const getRandomNumber = (min, max) => {
//     return Math.random() * (max - min) + min;
// };

// const letsGuess = () => {
//     if (number = getRandomNumber) {
//         return alert("Gefeliciteerd " + person + "!" + " Je hebt het spel gewonnen! Ga je door voor de koelkast?")
//     } else if (number != null) {
//         return prompt("Helaas " + person + ", dit is niet het getal! Wil je nog een poging wagen?");
//     } else {
//         return prompt("Helaas " + person + ", dit is niet het getal! Wil je nog een poging wagen?");
//     }
// };

// document.getElementById("begin").innerHTML =
//     "Hé " + person + "!";


// const letsGuess = function () {
//     let number = prompt("Voer een getal in tussen 0 en 25 om te beginnen met raden...", "Getal");
//     if (number != null) {
//         document.getElementById("raden").innerHTML =
//             number + " is misschien wel goed!";
//     }
// };
// setTimeout(letsGuess, 5000);

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


// --------------------------------------------------------

// VOORLOPIGE VERSIE

// const person = prompt("Welkom! Wat is je naam?", "Poedeliewoepsie");

// if (person != null) {
//     alert("Hé " + person + "!");
// }

// for (i = 0; i < 5; i++) {
//     const guessNumber = prompt(`Voer een getal in tussen 0 en 10 om te beginnen met raden ... je hebt ${5 - i} pogingen!`);
//     const getRandomInteger = (min, max) => {
//         min = Math.ceil(1);
//         max = Math.floor(6);
//         return Math.floor(Math.random() * (6 - 1) + 1);
//     }

//     getRandomInteger();

//     if (guessNumber == getRandomInteger) {
//         alert("GEFELICITEERD" + person + ", je hebt het getal geraden!");
//         break;
//     } else if (i !== 4) {
//         alert("Helaas " + person + ", dit is niet het getal. Probeer nog een keer!");
//     } else {
//         alert("Helaas " + person + ", dit was de laatste poging. Volgende keer meer succes!");
//     }
// }

// --------------------------------------------------------

// Versie Martin de Bes

// function getName() {
//     let person = prompt("Wat is jouw naam", "");
//     if (person != null) {
//         document.getElementById("name").innerText =
//             "Hallo " +
//             person +
//             ", hoe gaat het vandaag? <br> Zullen we een spelletje doen?";
//         document.getElementById("game").innerText = "Ja";
//     }
//     console.log("naam");
// }
// function getRandomInt(min, max) {
//     console.log("random");
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }
// function newGame() {
//     console.log(person);
//     console.log("new game");
//     document.getElementById("thanks").innerText =
//         "Bedankt voor het spelen " + person + ". <br> Wil je nog een keer?";
//     document.getElementById("new").innerText = "Ja";
//     playGame();
// }
// function playGame() {
//     console.log("playgame");
//     let NumberToGuess = getRandomInt(1, 25);
//     console.log(NumberToGuess);
//     let UserGuess = undefined;
//     while (UserGuess != NumberToGuess) {
//         console.log("niet geraden");
//         UserGuess = prompt("Welk nummer tussen 1 en 25 denk je dat ik heb?");
//         if (UserGuess != NumberToGuess) {
//             console.log("geen match");
//             alert("nee, " + UserGuess + " is niet goed. Probeer opnieuw");
//         } else {
//             console.log("wel een match");
//             alert("ja! goed");
//         }
//     }
// }

// --------------------------------------------------------

// POGING ZOVEEL

// const letsGo = () => {
//     let person = prompt("Welkom! Wat is je naam?", "Poedeliewoepsie");
//     if (person != null) {
//         alert("Hé " + person + "!");
//     }
//     console.log("naam");
// }; // Blijft hier hangen!

// const getRandomInteger = (min, max) => {
//     console.log("doe mij een getal");
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// };

// const guessNumber = () => {
//     console.log("raad het getal");
//     let userGuess = getRandomInteger(1, 10);
//     const userGuess = prompt("Om te raden voer een getal in tussen 0 en 10");
//     if (userGuess == getRandomInteger) {
//         alert("GEFELICITEERD" + person + ", je hebt het getal geraden!");
//     } else if (userGuess !== getRandomInteger) {
//         alert("Helaas " + person + ", dit is niet het getal. Probeer nog een keer!");
//     } else {
//         alert("Helaas " + person + ", dit was de laatste poging. Volgende keer meer succes!");
//     }
// };

// --------------------------------------------------------

// davidbau

// let x = Math.floor(Math.random() * 25) + 1;
// let turns = 5;
// let hint = 'Raad het getal tussen 0 en 25!';

// while (turns > 0) {
//     let guess = prompt(hint + ' Je hebt nog ' + turns + ' pogingen.');
//     if (!guess) break;
//     guess = Number(guess);
//     if (guess == x) {
//         document.getElementById('gelukt').innerText = 'GEFELICITEERD! Je hebt het getal geraden!';
//         turns = 0;
//     } else {
//         hint = 'Helaas,';
//         if (guess < x) hint += ' te laag!';
//         if (guess > x) hint += ' te hoog!';
//         turns = turns - 1;
//     }
// }
// alert('Het geheime getal was ' + x + '.');

// --------------------------------------------------------

// LAATSTE VERSIE


const letsGo = () => {
    let person = prompt("Welkom! Wat is je naam?", "Poedeliewoepsie");
    if (person != null) {
        alert("Hé " + person + "!");
    }

    let x = Math.floor(Math.random() * 25) + 1;
    let turns = 5;
    let hint = 'Raad het getal tussen 0 en 25!';

    while (turns > 0) {
        let guess = prompt(hint + ' Je hebt nog ' + turns + ' pogingen.');
        if (!guess) break;
        guess = Number(guess);
        if (guess == x) {
            document.getElementById('gelukt').innerText = 'GEFELICITEERD ' + person + ', je hebt het getal geraden!';
            turns = 0;
        } else {
            hint = 'Helaas,';
            if (guess < x) hint += ' te laag!';
            if (guess > x) hint += ' te hoog!';
            turns = turns - 1;
        }
    }
    alert('Het geheime getal was ' + x + '.');
};