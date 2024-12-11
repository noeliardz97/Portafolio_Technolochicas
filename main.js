var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString('Desarrolladora Frontend Jr.')
  .pauseFor(2500)
  .deleteAll()
  .typeString('<strong>Si lo puedes imaginar lo puedes crear</strong>')
  .pauseFor(2500)
  .deleteChars(6)
  .typeString('<strong> Programar!</strong>')
  .pauseFor(2500)
  .start();