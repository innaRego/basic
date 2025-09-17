//oop -парадигма програмирования,
// которая использует "обьекты" для представления 
// данных и методов для работы с этими данными.

//1.Класс и Обьект (Class & Objekt)
//класс - чертеж для создания обьектов
//обьект - экземпляр класса с собственными данными.
//objekt - instance of class

class Animal { 
    //конструктор - специальный метод
    //для создания и инциализации обьекта
    //spesial method for creating and
    //initializing an object created with a class

  constructor(name, age) { 
        //this - ссылка на текущий обьект
        //reference to the current object
        this.name = name;
        this.age = age;
     }
     //метод - это функция внутри обьекта
     //method - a function inside an object
    speak() {
        console.log(`${this.name} издает какой-то звук.`);
    }
    displayInfo() {
        console.log(`Имя: ${this.name},Возраст: ${this.age}`);
     }
    }

    const genericAnimal = new Animal(`Some animal`, 5);
    const myDog = new Animal ("Шарик", 8)

    genericAnimal.displayInfo();
    myDog.displayInfo();
    myDog.speak();


    //Инкапсуляция (Encapsulation)
    //инкапсуляция  - скрытие внутренней реализации от внешнего мира
    //encapsulation - hiding internal implementation
    //или же - объединение данных и методов
    //и работы с этими данными в одном классе

    console.log(`---- Инкапсуляция----`);

    class BankAccount {
        //# - означает, что свойство приватное
        //private property

        
    #balance =0; //приватное свойство
    //private property
    constructor(initialBalance) { 
        if(initialBalance > 0) { 
            this.#balance = initialBalance;
        }    
     }
       //публичный метод для внесения денег
       //public method for depositing money
       deposit(amount) { 
        if(amount > 0) { 
            this.#balance += amount;
            console.log(`Внесено: ${amount}. Новый баланс: ${this.#balance}`);
        }
    }
       //публичный метод для внесения денег
       //public method for withdrawing money
       withdraw(amount) { 
        if(amount > 0 && amount <= this.#balance) { 
            this.#balance -= amount;
            console.log(`Снято: ${amount}. Новый баланс: ${this.#balance}`);
        } else { 
            console.log(`Недостаточно средств или неверная сумма.`);
        }

            


