// Example - 1
console.log(this);

// Example - 2
var demo2 = function () {
    console.log(this);
}

// Example - 3
function demo1() {
    console.log(this);
}

demo1();
demo2();

// Example - 4
var obj = {
    'prop': 12,
    'print': function () {
        console.log(this);
    },
};

obj.print();