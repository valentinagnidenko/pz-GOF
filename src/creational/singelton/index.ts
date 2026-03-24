class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log("Singleton created");
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public sayHello() {
    console.log("Hello from Singleton");
  }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();

a.sayHello();

console.log("Same instance:", a === b);