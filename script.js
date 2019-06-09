// $(document).ready(function(){
// Get Dimention of the window
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const outerRadius = Math.min(windowHeight, windowWidth);

// Get inner radius
const innerRadius = (outerRadius - 50) / 2;

// Center coordinates
const solarSystem = $("#solar-system");

$(solarSystem).height(outerRadius).width(outerRadius);

const sun = $("#sun");
const earth = $("#earth");

const center_x = parseFloat($(sun).css('left').split('px')[0]);
const center_y = parseFloat($(sun).css('top').split('px')[0]);



theta = 0;

var earth_position_x = center_x + innerRadius;
var earth_position_y = center_y;

$(earth).css('left',earth_position_x).css('top', earth_position_y);


// Formula
//(𝑥,𝑦)=(𝑎+𝑟cos𝜃,𝑏+𝑟sin𝜃)
//(center_x + radius * Math.cos(theta+radian_increment),center_y + radius * Math.sin(theta + radian_increment))
var radian_increment = 0;

setInterval(function(){
  ++radian_increment;
  earth_position_x = center_x + innerRadius * Math.cos(theta+radian_increment);
  earth_position_y = center_y + innerRadius * Math.sin(theta + radian_increment);
  $(earth).css('left',earth_position_x).css('top', earth_position_y);

  // let current_left = parseInt($(earth).css('left').split('px')[0]);
  // $(earth).css('left', current_left + 1);
}, 300)
// });