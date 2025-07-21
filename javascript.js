// 1. Напиши класс Book, который имеет поля title, author и pages. 
// Добавь метод для вывода краткой информации о книге;

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    printInfo() {
        console.log(`Название книги: ${this.title}`);
        console.log(`Автор книги: ${this.author}`);
        console.log(`Количество страниц: ${this.pages}`);
    }
}

// 2. Создай класс User с полями name и email, методом displayInfo, который выводит информацию о пользователе. 
// Создай несколько экземпляров и вызови метод displayInfo;
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Имя пользователя ${this.name} и электронная почта: ${this.email}`);
    }
}

const user1 = new User('Alice', 'alice@mail.ru');
const user2 = new User('Alex', 'alex@gmail.com');

user1.displayInfo();
user2.displayInfo();

//3. В классе Rectangle из примера добавь геттер perimeter, который вычисляет и возвращает периметр прямоугольника. 
// Добавь сеттер height. Он должен проверять, что устанавливаемое значение высоты height больше 0. 
// Если значение не положительное, то выводится сообщение об ошибке в консоль, а высота остается неизменной.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return this.width * 2 + this.height * 2;
    }

    set _height(value) {
        if(value <= 0) {
            console.error('Высота не может быть меньше 0 и равной 0');
        }
        else {
            this.height = value;
        }
    }

    get _height() {
        return this.height
    }
}

const newForm = new Rectangle(10, 5);
console.log(newForm.perimeter);
newForm._height = -3;
console.log(newForm._height);
