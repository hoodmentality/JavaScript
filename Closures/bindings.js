// Example - 1

function Person(name) {
    this.name = name;
    console.log(this);
    setTimeout(function() {
        console.log(this);
    }, 1000);
}

var p = new Person("Dhara");

// Example - 2
function Person(name) {
    this.name = name;
    console.log(this);
    setTimeout(() => console.log(this),1000);
}

var p = new Person("Dhara");