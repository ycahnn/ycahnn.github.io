var text = "Hello, world!"
var outputElement = document.getElementById('text');
var cursorElement = document.getElementById('cursor');

function typeWriter(text, i) {
    if (i < text.length) {
        outputElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 150);
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter(text, 0);
});