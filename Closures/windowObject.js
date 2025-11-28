var a = 10;

function outer() {
    var b = 40;
    console.log(b);
}

// VS Code Version
console.log(a);
outer();

// Browser Version
console.log(a);
// console.log(window.a);
outer();
// window.outer();