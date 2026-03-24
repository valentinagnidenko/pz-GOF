interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver(): void {
    console.log("Доставка вантажівкою 🚚");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("Доставка кораблем 🚢");
  }
}

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery() {
    const transport = this.createTransport();
    transport.deliver();
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// запуск
const road = new RoadLogistics();
road.planDelivery();

const sea = new SeaLogistics();
sea.planDelivery();
