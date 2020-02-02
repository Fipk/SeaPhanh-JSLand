
class Batiment {
    constructor(nom, employe, places, prix, menus1, menus2) {
        this.nom = nom;
        this.employe = employe;
        this.places = places;
        let placesOccupes = 0;
        this.prix = prix;
        this.menus1 = menus1;
        this.menus2 = menus2;
    }

    getPlaces() {
        return this.places;
    }

    getMenus1() {
        return this.menus1;
    }

    getMenus2() {
        return this.menus2;
    }

    setPlaces(place) {
        this.placesOccupes = this.placesOccupes + place;
        this.places = this.places - place;
    }

    freeplaces() {
        this.places = this.places + this.placesOccupes;
        this.placesOccupes = 0;
    }

    getPrix() {
        return this.prix;
    }

    getName() {
        return this.nom;
    }

    getEmploye() {
        return this.employe;
    }

    appelleEmployeAttraction(employe, attraction, client) {
        return client.participerAttraction(employe,attraction, client);
    }
    appelleEmployeRestaurant(employe, restaurant, client) {
        return client.mangerRestaurant(employe, restaurant, client);
    }
    
}
module.exports = Batiment;