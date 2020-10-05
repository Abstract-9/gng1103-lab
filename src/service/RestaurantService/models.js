export class Restaurant {
    id;
    name;
    address;
    items;

    constructor(id, name, address, items) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.items = items;
    }
}

export class Item {
    name = "";
    description = "";
    price = 0;
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}