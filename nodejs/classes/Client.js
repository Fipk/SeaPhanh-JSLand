const Personnes = require('./Personnes')
const readlineSync = require('readline-sync');

class Client extends Personnes {
    constructor(nom, prenom, budget, famille) {
        super(nom,prenom)
        this.budget = budget;
        this.famille = famille;
        let transaction;
        let montantRembourser;
        this.listeFamille = []
    }
    getBudget() {
        return this.budget;
    }
    getName() {
        return this.nom;
    }

    getFamille(){
        return this.famille + 1;
    }
    getTrans() {
        return this.transaction;
    }

    getListe(){
        return this.listeFamille;
    }

    getMontant() {
        return this.montantRembourser;
    }

    payezAttraction(montant, attraction) {
        this.budget = this.budget - montant;
        this.montantRembourser = montant;
        this.transaction = attraction.getName();
    }

    payezRestaurant(menus1, menus2, restaurant) {
        this.budget = this.budget - (menus1 * restaurant.getMenus1());
        this.budget = this.budget - (menus2 * restaurant.getMenus2());
        this.montantRembourser = (menus1 * restaurant.getMenus1()) + (menus2 * restaurant.getMenus2());
        this.transaction = restaurant.getName();
    }

    affichage() {
        if (this.famille == 0) {
            return this.listeFamille[0];
        }else if (this.famille == 1) {
            return this.listeFamille[0] + " " + this.listeFamille[1];
        }else if (this.famille == 2) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2];
        }else if (this.famille == 3) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3];
        }else if (this.famille == 4) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3] + " " + this.listeFamille[4];
        }else if (this.famille == 5) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3] + " " + this.listeFamille[4] +
             " " + this.listeFamille[5];
        }else if (this.famille == 6) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3] + " " + this.listeFamille[4] +
             " " + this.listeFamille[5] + " " + this.listeFamille[6];
        }else if (this.famille == 7) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3] + " " + this.listeFamille[4] +
             " " + this.listeFamille[5] + " " + this.listeFamille[6] + " " + this.listeFamille[7];
        }else if (this.famille == 8) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3] + " " + this.listeFamille[4] +
             " " + this.listeFamille[5] + " " + this.listeFamille[6] + " " + this.listeFamille[7] + " " + this.listeFamille[8];
        }else if (this.famille == 9) {
            return this.listeFamille[0] + " " + this.listeFamille[1] + " " + this.listeFamille[2] + " " + this.listeFamille[3] + " " + this.listeFamille[4] +
            " " + this.listeFamille[5] + " " + this.listeFamille[6] + " " + this.listeFamille[7] + " " + this.listeFamille[8] + " " + this.listeFamille[9];
        }else {
            console.log("probleme");
        }
    }

    participerAttraction(employe,attraction,client) {

        console.log("Client : Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres de ma famille :")
        for (let i=0; i < this.famille; i++) {
            let username = readlineSync.question(' ');
            this.listeFamille.push(username);
        }
        this.listeFamille.push(this.nom)
        client.affichage();
        employe.traiterAttraction(attraction,client);
    }

    mangerRestaurant(employe, restaurant, client) {
        console.log("Client : Bonjour, je mangerai bien dans ce restaurant, le " + restaurant.getName());
        employe.recupererCommande(client, restaurant)
    }
}
module.exports = Client