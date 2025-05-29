"use strict";
/*************************************
 * LECTURE 3; VARIABLES IN TYPESCRIPT
 **************************************/
function calcArea(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius * 3.14 * shape.radius;
        case "square":
            return shape.length * shape.length;
    }
}
console.log(calcArea({ kind: "square", length: 12 }));
console.log(calcArea({ kind: "circle", radius: 9 }));
