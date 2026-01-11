var i = 10;

function outer() {
    var j = 20;
    console.log(i, j);
    function inner() {
        var k = 30;
        console.log(j, k);
    }
    inner();
}

outer();

var i = 10;

function outer() {
    var j = 20;
    console.log(i, j);
    var inner = function() {
        var k = 30;
        console.log(j, k);
    }
    return inner;
}

var inner = outer();
inner();