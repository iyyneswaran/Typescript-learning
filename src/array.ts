let numbers: number[] = [];
numbers.forEach((n) => n.toString());
// it shows all the methods available for number type


// it explicitly infers that 'names' is an array of strings so no need to implicitly annotate it
let names = ["iyynes", "adi", "sri"];


// mixed array
let mixed = [1, "iyynes", true];
console.log(mixed);