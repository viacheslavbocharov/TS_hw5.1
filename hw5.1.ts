// Создайте классы Circle , Rectangle , Square и Triangle . 
// У каждого из них есть общедоступный метод calculateArea . 
// У каждой фигуры есть общедоступные свойства – цвет и название, которые нельзя изменять после создания. 
// У Square и Rectangle со своей стороны есть еще дополнительный метод print , выводящий строку с формулой расчета площади

abstract class Shape {
    readonly name: string;
    readonly color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super('Circle', color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super('Rectangle', color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    print(): void {
        console.log(`Area = width * height = ${this.width} * ${this.height}`);
    }
}

class Square extends Shape {
    private side: number;

    constructor(color: string, side: number) {
        super('Square', color);
        this.side = side;
    }

    calculateArea(): number {
        return this.side * this.side;
    }

    print(): void {
        console.log(`Area = side * side = ${this.side} * ${this.side}`);
    }
}

class Triangle extends Shape {
    private base: number;
    private height: number;

    constructor(color: string, base: number, height: number) {
        super('Triangle', color);
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}
