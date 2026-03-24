"use strict";
class Truck {
    deliver() {
        console.log("Доставка вантажівкою 🚚");
    }
}
class Ship {
    deliver() {
        console.log("Доставка кораблем 🚢");
    }
}
class Logistics {
    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}
class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}
// запуск
const road = new RoadLogistics();
road.planDelivery();
const sea = new SeaLogistics();
sea.planDelivery();
