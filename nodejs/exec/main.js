const Personne = require('../classes/Personnes.js')
const Manager = require('../classes/Manager.js')
const Client = require('../classes/Client.js')
const Caissie = require('../classes/Caissier.js')
const Batiment = require('../classes/Batiment.js')
const Restaurateur = require('../classes/Restaurateur.js')
const readlineSync = require('readline-sync');
let listeAttraction = [];
let listeRestaurant = [];
let listeManager = [];
let listeEmploye = [];

let manage = new Manager('Boss', 'test');
let caisse = new Caissie('Calvin', 'test', manage.getName());
let test = new Client("Moi", "demem", 200, 4);
let rest = new Restaurateur("Molly", "Malone", manage.getName());
let manson = new Batiment('train fantome', caisse.getName(), 5, 5, 0, 0);
let molly = new Batiment('mangez', rest.getName(), 0, 0, 15, 10);

listeAttraction.push(manson);
listeRestaurant.push(molly);
listeManager.push(manage);
listeEmploye.push(caisse);
listeEmploye.push(rest);

// console.log(manson.getEmploye());
// console.log(manson.appelleEmploye(caisse));

// console.log(test.participerAttraction(manson,test));
// console.log(caisse.traiterAttraction(manson, test, manson));
while (test.getBudget() >= 0) {
    console.log("Plusieurs choix s'offre à vous que voulez vous faire ?");
    console.log("Tapez 1, si vous souhaitez faire une attraction.");
    console.log("Tapez 2, si vous voulez manger au restaurant");
    console.log("Tapez 3, si vous voulez vous plaindre et demander un remboursement");
    console.log("Tapez 4, si vous voulez partir");
    let nombre = readlineSync.questionInt('Que souhaitez-vous donc faire ?');
    if (nombre == 1) {
        console.log("Plusieurs attractions sont disponibles laquelle souhaitez vous faire ?");
        for (let i=0; i < listeAttraction.length; i++) {
            console.log((i+1) + ": " + listeAttraction[i].getName());
        }
        let action = readlineSync.questionInt('Que souhaitez-vous donc faire ?');
        for (let i=0; i < listeEmploye.length; i++) {
            if (listeEmploye[i].getName() == listeAttraction[action-1].getEmploye()) {
                listeAttraction[action-1].appelleEmployeAttraction(listeEmploye[i], listeAttraction[action-1], test, );
            }
        }
    }else if (nombre == 2) {
        console.log("On va à quelle restaurant maintenant ?");
        for (let i=0; i < listeRestaurant.length; i++) {
            console.log((i+1) + ": " + listeRestaurant[i].getName());
        }
        let action = readlineSync.questionInt('Que souhaitez-vous donc faire ?');
        for (let i=0; i < listeEmploye.length; i++) {
            if (listeEmploye[i].getName() == listeRestaurant[action-1].getEmploye()) {
                listeRestaurant[action-1].appelleEmployeRestaurant(listeEmploye[i], listeRestaurant[action-1], test);
            }
        }
    }else if (nombre == 3) {
        console.log("A qui allez vous vous plaindre ?");
        for (let i=0; i < listeManager.length; i++) {
            console.log((i+1) + ": " + listeManager[i].getName());
        }
        let action = readlineSync.questionInt('Que souhaitez-vous donc faire ?');
        for (let i=0; i < listeEmploye.length; i++) {
            for (let j=0; j < listeRestaurant.length; j++) {
                if (listeEmploye[i].getName() == listeRestaurant[j].getEmploye()) {
                    listeManager[action-1].probleme(listeEmploye[j], listeRestaurant[action-1], test);
                    break;
                }
            }
            for (let k=0; k < listeAttraction.length; k++) {
                if (listeEmploye[i].getName() == listeAttraction[k].getEmploye()) {
                    listeManager[action-1].probleme(listeEmploye[k], listeAttraction[action-1], test)
                    break;
                }
            }
        }
        
    }else if (nombre == 4) {
        console.log("Merci de votre visite et à bientôt.");
        break;
    }else {
        console.log("Je ne comprends pas veuillez retaper un numéro.");
    }
}


