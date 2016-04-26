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

var ball1 = Physics.body('circle', {
  x: 50,
  y: 30,
  vx: 0.2,
  vy: 0.01,
  radius: 20,
  styles: {
    strokeStyle: '#933',
    lineWidth: 1,
    fillStyle: '#fcc',
    angleIndicator: '#c66'
  }
});
world.add(ball1);

var ball2 = Physics.body('circle', {
  x: viewWidth * 0.8,
  y: viewHeight * 0.7,
  vx: -0.3,
  vy: 0.4,
  radius: 25,
  styles: {
    strokeStyle: '#339',
    lineWidth: 1,
    fillStyle: '#ccf',
    angleIndicator: '#66c'
  }
});
world.add(ball2);

var ball3 = Physics.body('circle', {
  x: viewWidth * 0.3,
  y: viewHeight * 0.9,
  vx: 0.8,
  vy: -0.1,
  radius: 25,
  styles: {
    strokeStyle: '#393',
    lineWidth: 1,
    fillStyle: '#cfc',
    angleIndicator: '#6c6'
  }
});
world.add(ball3);

world.add(Physics.behavior('body-impulse-response'));
world.add(Physics.behavior('constant-acceleration'));

Physics.util.ticker.on(function (time) {
  world.step(time);
});
Physics.util.ticker.start();
