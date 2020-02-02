const Personnes = require('./Personnes')

class Caissier extends Personnes {
    constructor(nom, prenom, manager) {
        super(nom,prenom);
        this.manager = manager;
    }

    getManager() {
        return this.manager;
    }
    traiterAttraction(attraction, client) {
        let placesRestantes = attraction.getPlaces();
        let liste = client.getListe();
        if (placesRestantes >= 1) {
            console.log("Caissier : Ah enchanté de vous rencontrer : " + client.affichage() +" Il y aura donc " + client.getFamille() + " tickets soit " + (attraction.getPrix() *client.getFamille())  + " euros s'il vous plaît.")
            let montant = attraction.getPrix() * 5; 
            if (client.getBudget() > montant) {
                client.payezAttraction(montant, attraction);
                for (let i=0; i < client.getFamille(); i++) {
                    liste.pop();
                }
                attraction.setPlaces(client.getFamille());
            }else {
                console.log("Caissier : Ah... Il semblerait que vous n'avez pas assez sur votre compte.");
            }
        }else {
            console.log("Caissier : Il n'y a plus assez de places disponibles, veuillez attendre votre tour.")
            attraction.freeplaces();

        }
    }
    
    getName() {
        return this.nom;
    }

}
module.exports = Caissier;