// Абстрактні продукти
interface Button {
  render(): void;
}

interface Checkbox {
  check(): void;
}

// Конкретні продукти (Windows)
class WindowsButton implements Button {
  render(): void {
    console.log("Windows кнопка 🪟");
  }
}

class WindowsCheckbox implements Checkbox {
  check(): void {
    console.log("Windows чекбокс 🪟");
  }
}

// Конкретні продукти (Mac)
class MacButton implements Button {
  render(): void {
    console.log("Mac кнопка 🍎");
  }
}

class MacCheckbox implements Checkbox {
  check(): void {
    console.log("Mac чекбокс 🍎");
  }
}

// Абстрактна фабрика
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Конкретні фабрики
class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Використання
function runApp(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.check();
}

// запуск
const factory = new WindowsFactory(); // поміняй на MacFactory
runApp(factory);