var Physics = require('physicsjs');
var jQuery = require('jquery');

var world = Physics({
  timestep: 1000.0 / 160,
  maxIPF: 16,
  integrator: 'verlet'
});

var lightColors = ['#ccf', '#cfc', '#cff', '#fcc', '#fcf', '#ffc'];
var darkColors = ['#669', '#696', '#699', '#966', '#969', '#996'];

function chooseRandomly(xs) {
  return xs[Math.floor(Math.random() * xs.length)];
}

var viewWidth = 500;
var viewHeight = 300;

var renderer = Physics.renderer('canvas', {
  el: 'viewport',
  width: viewWidth,
  height: viewHeight,
  meta: false
});
world.add(renderer);
world.on('step', function () {
  world.render();
});

var vieiwportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
world.add(Physics.behavior('edge-collision-detection', {
  aabb: vieiwportBounds,
  restitution: 0.99,
  cof: 0.99
}));

for (var i = 0; i < 20; i++) {
  var strokeColor = chooseRandomly(darkColors);
  world.add(
    Physics.body('circle', {
      x: Math.random() * viewWidth,
      y: Math.random() * viewHeight,
      vx: Math.random() * 10 - 5,
      vy: Math.random() * 10 - 5,
      radius: Math.floor(Math.random() * 8 + 1) * viewWidth / 160,
      styles: {
        strokeStyle: strokeColor,
        lineWidth: 1,
        fillStyle: chooseRandomly(lightColors),
        angleIndicator: strokeColor
      }
    })
  );
}

world.add(Physics.behavior('body-impulse-response'));
world.add(Physics.behavior('body-collision-detection'));
world.add(Physics.behavior('sweep-prune'));
world.add(Physics.behavior('constant-acceleration'));

Physics.util.ticker.on(function (time) {
  world.step(time);
});
Physics.util.ticker.start();
