import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';

$(() => {
  cats.forEach(c => {
    $('body').append($('<div>').text(c));
  });
});
