// Создайте классы Circle , Rectangle , Square и Triangle . 
// У каждого из них есть общедоступный метод calculateArea . 
// У каждой фигуры есть общедоступные свойства – цвет и название, которые нельзя изменять после создания. 
// У Square и Rectangle со своей стороны есть еще дополнительный метод print , выводящий строку с формулой расчета площади

interface Shape {
    readonly name: string;
    readonly color: string;

    calculateArea(): number;
}

class Circle implements Shape {
    readonly name: string;
    readonly color: string;
    private radius: number;

    constructor(color: string, radius: number) {
        this.name = 'Circle';
        this.color = color;
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    readonly name: string;
    readonly color: string;
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        this.name = 'Rectangle';
        this.color = color;
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

class Square implements Shape {
    readonly name: string;
    readonly color: string;
    private side: number;

    constructor(color: string, side: number) {
        this.name = 'Square';
        this.color = color;
        this.side = side;
    }

    calculateArea(): number {
        return this.side * this.side;
    }

    print(): void {
        console.log(`Area = side * side = ${this.side} * ${this.side}`);
    }
}

class Triangle implements Shape {
    readonly name: string;
    readonly color: string;
    private base: number;
    private height: number;

    constructor(color: string, base: number, height: number) {
        this.name = 'Triangle';
        this.color = color;
        this.base = base;
        this.height = height;
    }

    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}
