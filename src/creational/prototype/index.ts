class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  clone(): User {
    return new User(this.name, this.age);
  }

  show() {
    console.log(`User: ${this.name}, ${this.age}`);
  }
}

// оригінал
const user1 = new User("Valya", 20);

// копія
const user2 = user1.clone();

// змінюємо копію
user2.name = "Oleg";

// перевірка
user1.show();
user2.show();