var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('')
    .typeString('HTML')
    .pauseFor(1500)
    .deleteChars(4)
    .pauseFor(1500)
    .typeString('CSS')
    .pauseFor(1500)
    .deleteChars(3)
    .pauseFor(1500)
    .typeString('PHP')
    .pauseFor(1500)
    .deleteChars(3)
    .pauseFor(1500)
    .typeString('JavaScript')
    .pauseFor(1500)
    .deleteChars(10)
    .pauseFor(1500)
    .start();