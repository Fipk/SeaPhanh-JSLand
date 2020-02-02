const Personnes = require('./Personnes')
const readlineSync = require('readline-sync');

class Restaurateur extends Personnes {
    constructor(nom, prenom, manager) {
        super(nom,prenom)
        this.manager = manager;
    }

    getManager() {
        return this.manager;
    }
    getName() {
        return this.nom;
    }
    recupererCommande(client, restaurant) {
        let menus1 = 0;
        let menus2 = 0;
        while ((menus1 + menus2) != client.getFamille()) {
            let nombre = readlineSync.questionInt('Restaurant : Ah bonjour ! Combien etes vous ?');
            let nombreMenus = readlineSync.question("Restaurant : Tres bien, vous etes donc " + nombre + ". Combien y aura t-il de menus 1 ? Et combien de menus 2 ?");
            let menus1 = parseInt(nombreMenus[0]);
            let menus2 = parseInt(nombreMenus[2]);
            let res = menus1 + menus2;
            if (res == nombre && nombre == client.getFamille()){
                client.payezRestaurant(menus1, menus2, restaurant);
                return "";
            }else {
                console.log("Restaurateur : J'ai du mal noter quelque chose... On recommence !")
            }
        }
    }

}
module.exports = Restaurateur