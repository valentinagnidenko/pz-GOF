"use strict";
class Singleton {
    constructor() {
        console.log("Singleton created");
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    sayHello() {
        console.log("Hello from Singleton");
    }
}
const a = Singleton.getInstance();
const b = Singleton.getInstance();
a.sayHello();
console.log("Same instance:", a === b);
