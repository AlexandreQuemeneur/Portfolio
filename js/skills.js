var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('')
    .typeString('<span style="color: #dd4b25"> HTML</span>')
    .pauseFor(1700)
    .deleteChars(4)
    .pauseFor(1700)
    .typeString('<span style="color: #0068ba"> CSS</span>')
    .pauseFor(1700)
    .deleteChars(3)
    .pauseFor(1700)
    .typeString('<span style="color: #7377ad"> PHP</span>')
    .pauseFor(1700)
    .deleteChars(3)
    .pauseFor(1700)
    .typeString('<span style="color: #efd81d"> JavaScript</span>')
    .pauseFor(1500)
    .deleteChars(10)
    .pauseFor(1700)
    .start();