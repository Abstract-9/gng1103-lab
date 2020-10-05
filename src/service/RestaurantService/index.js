import {Restaurant, Item} from "./models";

class RestaurantService {
    restaurants = [];

    constructor() {
        this.restaurants.concat([
            new Restaurant(15,"Fried Chicken Co.", "141 Rideau St", [
                new Item("3 Pc.", "Just 3 pieces of golden fried chicken", 9.99),
                new Item("3 Pc. Combo", "The 3 Pc. but with fries and a drink!", 13.99)
            ]),
            new Restaurant(16,"Jimmies Pizza Parlor", "155 Bronson Ave", [
                new Item("Pepperoni Slice", "Just a pep slice, take it or leave it", 1.50),
                new Item("Pepperoni Pizza", "A whole pep pizza?! Now we're talkin!", 10.99)
            ])
        ])
    }

    getRestaurant(id) {
        return this.restaurants.filter((restaurant) => restaurant.id = id);
    }

    getAllRestaurants() {
        return this.restaurants;
    }
}

export default RestaurantService