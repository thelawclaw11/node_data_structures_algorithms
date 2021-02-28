//functional - no mutate, no side effects,

//procedural -

//object oriented - combine data and behavior, side effects ok, access through interface

// const rect = {
//     length: 2,
//     width : 4
// }
//
// function makeRect (width, length){
//     return {
//         width, length
//     }
// }
//
// function area(rect){
//     return rect.length * rect.width
// }
//
// function perimeter(rect){
//     return 2 * rect.length + 2 * rect.width
// }

class Rect {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }

    grow(newLength) {
        this._length = newLength;
    }

    get area() {
        return this._length * this._width;
    }

    get perimeter() {
        return this._length * 2 + this._width * 2;
    }

    alpha() {
        return alpha();
    }
}

function alpha(shape) {
    if (shape instanceof Square) {
        //
    }
    if (shape instanceof Square) {
        //
    }
}

class Square extends Rect {
    constructor(length) {
        super();
        this._width = length;
        this._length = length;
    }
}

const square = new Square(4);

console.log(square.area);
console.log(square.perimeter);

// const myRect = new Rect(2, 4);
//
// console.log(myRect.area);
//
// myRect.grow(4);
//
// console.log(myRect.area);
