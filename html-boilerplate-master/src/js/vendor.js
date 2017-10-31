/*Polyfill object-fit/object-position on <img>*/
import objectFitImages from 'object-fit-images';
/* Use external SVG sprite */
import svg4everybody from 'svg4everybody';
/* jQuery */
window.jQuery = require('jquery');
window.$      = require('jquery');
/* A responsive image polyfill. */
window.picturefill = require('picturefill');
/* jQuery Validate */
require('./vendor/jquery.validate');

$(function(){
  svg4everybody();
  objectFitImages();
});