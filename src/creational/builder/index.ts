class House {
  walls: string = "";
  roof: string = "";
  doors: string = "";

  show() {
    console.log("Будинок:", this);
  }
}

// Builder
interface HouseBuilder {
  buildWalls(): void;
  buildRoof(): void;
  buildDoors(): void;
  getHouse(): House;
}

// Concrete Builder
class SimpleHouseBuilder implements HouseBuilder {
  private house: House = new House();

  buildWalls(): void {
    this.house.walls = "Звичайні стіни";
  }

  buildRoof(): void {
    this.house.roof = "Простий дах";
  }

  buildDoors(): void {
    this.house.doors = "Деревʼяні двері";
  }

  getHouse(): House {
    return this.house;
  }
}

// Director (керує процесом)
class Director {
  build(builder: HouseBuilder) {
    builder.buildWalls();
    builder.buildRoof();
    builder.buildDoors();
  }
}

// запуск
const builder = new SimpleHouseBuilder();
const director = new Director();

director.build(builder);

const house = builder.getHouse();
house.show();