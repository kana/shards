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

var circles = [];
for (var i = 0; i < 20; i++) {
  var strokeColor = chooseRandomly(darkColors);
  var isStatic = Math.floor(Math.random() * 2) == 0;
  var c = Physics.body('circle', {
    x: Math.random() * viewWidth,
    y: Math.random() * viewHeight,
    vx: isStatic ? 0 : Math.random() * 10 - 5,
    vy: isStatic ? 0 : Math.random() * 10 - 5,
    radius: Math.floor(Math.random() * 8 + 1) * viewWidth / 160,
    treatment: isStatic ? 'static' : 'dynamic',
    styles: {
      strokeStyle: strokeColor,
      lineWidth: 1,
      fillStyle: chooseRandomly(lightColors),
      angleIndicator: strokeColor
    }
  });
  world.add(c);
  circles.push(c);
}

var borderStyles = {
  strokeStyle: '#666',
  lineWidth: 1,
  fillStyle: '#666',
  angleIndicator: '#666'
};
world.add(Physics.body('rectangle', {
  x: 0,
  y: viewHeight / 2,
  width: 0,
  height: viewHeight,
  treatment: 'static',
  styles: borderStyles
}));
world.add(Physics.body('rectangle', {
  x: viewWidth,
  y: viewHeight / 2,
  width: 0,
  height: viewHeight,
  treatment: 'static',
  styles: borderStyles
}));
world.add(Physics.body('rectangle', {
  x: viewWidth  / 2,
  y: -(viewWidth * 8 / 160),
  width: viewWidth,
  height: 0,
  treatment: 'static',
  styles: borderStyles
}));

world.add(Physics.behavior('body-impulse-response'));
world.add(Physics.behavior('body-collision-detection'));
world.add(Physics.behavior('sweep-prune'));
world.add(Physics.behavior('constant-acceleration'));

function wrapY() {
  for (var i = 0, l = circles.length; i < l; i++) {
    var c = circles[i];
    if (c.state.pos.y > viewHeight + c.radius) {
      c.state.pos.y -= viewHeight + c.radius * 2;
      c.state.vel.y = 0;
    }
  }
}
world.on('step', wrapY);
setTimeout(
  function () {
    world.off('step', wrapY);
    world.add(Physics.body('rectangle', {
      x: viewWidth  / 2,
      y: viewHeight,
      width: viewWidth,
      height: 0,
      treatment: 'static',
      styles: borderStyles
    }));
    for (var i = 0, l = circles.length; i < l; i++) {
      var c = circles[i];
      c.treatment = 'dynamic';
    }
  },
  10 * 1000
);

Physics.util.ticker.on(function (time) {
  world.step(time);
});
Physics.util.ticker.start();
