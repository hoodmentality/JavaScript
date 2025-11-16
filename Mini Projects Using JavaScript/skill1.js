// Smooth Scroll of Sections from Navigation
var source = document.querySelectorAll('.nav-menu li a');

for (var i=0; i<source.length; i++) {
    source[i].addEventListener('click', function(event) {
    event.preventDefault();
    var value = this.getAttribute('data-value');
    var targetSection = document.getElementById(value);

    var current = 0;
    var targetDistance = targetSection.getBoundingClientRect().top;

    var targetScroll = setInterval(function() {
        if(current<=targetDistance) {
            window.scrollBy(0,50);
            current+=50;
        } else {
            clearInterval(targetScroll);
        }
    }, 50);
    });
}

// Set Initial width of all the coloured div to zero
var colouredDiv = document.querySelectorAll('.skill-progress > div');

colouredDiv.forEach(function(element) {
    element.style.width = '0%';
});

var animationDone = false;

// Add Animation to the skill bar
window.addEventListener('scroll', function() {

    if(animationDone) return;

    var skillSection = document.querySelector('.skills-display');
    var top = skillSection.getBoundingClientRect().top;
    var bottom = skillSection.getBoundingClientRect().bottom;
    
    if(window.innerHeight>top && bottom>0) {
        animationDone = true;

    colouredDiv.forEach(function(element) {
    var current = 0;
    var target = parseFloat(element.getAttribute('data-value'));

    var bar = setInterval(function() {
        if(current<=target) {
            element.style.width = current + '%';
            current++;
        } else {
            clearInterval(bar);
        }
    }, 1);
    });     
    }
});