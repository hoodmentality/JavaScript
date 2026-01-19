// Example - 1

var i = 10;

function outer() {
    var j = 20;
    console.log(i,j);
    var inner = function() {
        var k = 30;
        console.log(j,k);
        k++;
    }
    return inner;
}

var inner = outer();
inner();
inner();

// Example - 2

var i = 10;

function outer() {
    var j = 20;
    var inner = function() {
        var k = 30;
        console.log(j,k);
        j++;
        k++;
    }
    return inner;
}

var inner = outer();
inner();
inner();

// Example - 3

var i = 10;

function outer() {
    var j = 20;
    var inner = function() {
        var k = 30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;
}

var inner = outer();
inner();
inner = outer();
inner();