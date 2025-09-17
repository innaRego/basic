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
    
       

            


