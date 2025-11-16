"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we dont need to ananotate types explicitly, TypeScript can infer the type automatically
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
// so, we can write the above code as:
let sales1 = 123_456_789;
let course1 = "TypeScript";
let is_published1 = true;
// But what if we dont assign any value to a variable?
let level; // implicitly of type 'any'
// It becomes of type 'any', which means it can hold any type of value 
function render(document) {
    console.log(document);
}
//# sourceMappingURL=dataType.js.map