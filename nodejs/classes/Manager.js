const Personnes = require('./Personnes')

class Manager extends Personnes {
    constructor(nom, prenom) {
        super(nom,prenom)
    }

    getName() {
        return this.nom;
    }
    probleme(employe, batiment, client) {
        if (employe.getManager() === this.nom) {
            console.log("Manager : Quoi ?! Votre derniere experience au " + batiment.getName() + " avec " + employe.getName() + " ne vous a pas convaincu ?? "
            + "Laissez moi vous dédommager. Tenez voilà " + client.getMontant());
        } else {
            console.log("Je ne connais pas cet employe, je ne suis pas son manager.");
        }
    }

}
module.exports = Manager