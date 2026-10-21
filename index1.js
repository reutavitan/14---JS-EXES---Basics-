let a = "some string";
let b = "other string";

function swap(a, b) {
    return [b, a];
}

[a, b] = swap(a, b);

console.log(a);
console.log(b);