'use strict';

// Example - 1
function demo1() {
    console.log(this);
}

demo1(); 

// Example - 2
var obj1 = {
    'prop': 12,
    'print': function () {
        console.log(this);
    },
};

obj1.print();

// Example - 3
function demo2() {
    console.log(this);
}

var obj2 = {
    'prop': 8131,
    'print': function () {
        console.log(this);
    },
};

demo2.call(obj2);
demo2.apply(obj2);

// Example - 4
function demo3(a, b) {
    console.log(this);
    console.log(a+b);
}

var obj3 = {
    'prop': 8131,
    'print': function () {
        console.log(this);
    },
};

demo3.call(obj3,4,5);
demo3.apply(obj3, [4,5]);