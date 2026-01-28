// Example - 1
for (var i=1; i<=5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
console.log("After for loop ", i);

// Example - 2
function test() {
    for (var i=1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
    console.log("After for loop ", i);
}

test();

// Example - 3
for (let i=1; i<=5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// Example - 4
function test() {
    for (let i=1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

test();