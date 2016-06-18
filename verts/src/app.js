import 'babel-polyfill';
import $ from 'jquery';

function makeBox()
{
  var height = 100 + Math.floor(Math.random() * 31) * 8;
  var r = (height * 140 + 128) % 256;
  var g = (height * 510 + 739) % 256;
  var b = (height * 618 + 140) % 256;
  return $('<div>').addClass('box').css({
    height: height,
    background: 'rgb(' + r + ',' + g + ',' + b + ')'
  });
}

function push($line, $box)
{
  $line.append($box);
}

$(() => {
  push($('.line:nth-child(1)'), makeBox());
  push($('.line:nth-child(2)'), makeBox());
  push($('.line:nth-child(3)'), makeBox());
  push($('.line:nth-child(4)'), makeBox());
});
