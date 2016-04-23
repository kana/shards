var Physics = require('physicsjs');
var jQuery = require('jquery');

var world = Physics({
  timestep: 1000.0 / 160,
  maxIPF: 16,
  integrator: 'verlet'
});

var viewWidth = 500;
var viewHeight = 300;

var renderer = Physics.renderer('canvas', {
  el: 'viewport',
  width: viewWidth,
  height: viewHeight,
  meta: false,
  styles: {
    'circle': {
      strokeStyle: 'hsla(60, 37%, 17%, 1)',
      lineWidth: 1,
      fillStyle: 'hsla(60, 37%, 57%, 0.8)',
      angleIndicator: 'hsla(60, 37%, 17%, 0.4)'
    }
  }
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

var ball = Physics.body('circle', {
  x: 50,
  y: 30,
  vx: 0.2,
  vy: 0.01,
  radius: 20
});
world.add(ball);

world.add(Physics.behavior('body-impulse-response'));
world.add(Physics.behavior('constant-acceleration'));

Physics.util.ticker.on(function (time) {
  world.step(time);
});
Physics.util.ticker.start();
