// Get window Height & Width
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

// Get min value to make a square
const outerRadius = Math.min(windowHeight, windowWidth);

// Get inner radius (- 50px to give some padding around the revolution)
const innerRadius = (outerRadius - 50) / 2;

const solarSystem = $("#solar-system");

// Set solar system height and width
$(solarSystem).height(outerRadius).width(outerRadius);

const sun = $("#sun");
const earth = $("#earth");

// Center coordinates
// Find the center 2D plain (Solar System)
const center_x = parseFloat($(sun).css('left').split('px')[0]);
const center_y = parseFloat($(sun).css('top').split('px')[0]);


// Initial radian of earth
const theta = 0; 

// Initial Position of earth
var earth_position_x = center_x + innerRadius;
var earth_position_y = center_y;

// Set earth at initial position
$(earth).css('left',earth_position_x).css('top', earth_position_y);

// Formula get x & y coordinates
//(𝑥,𝑦) = (𝑎 + 𝑟cos𝜃, 𝑏 + 𝑟sin𝜃)
// Where a & b are initial coordinates
// r is radius
// 𝜃 is the new angle in radian

// To get coordinate in our code it will be
// (center_x, center_y) = (center_x + innerRadius * Math.cos(theta + radian_increment), center_y + innerRadius * Math.sin(theta + radian_increment))

var degree = 0;

setInterval(function(){
  ++degree;

  // If degree reaches 361, bring it back to zero
  if(degree === 361)
    degree = 0;

  // Conver degree into radian
  radian = degree *  Math.PI / 180;

  earth_position_x = center_x + innerRadius * Math.cos(theta + radian);
  earth_position_y = center_y + innerRadius * Math.sin(theta + radian);
  $(earth).css('left',earth_position_x).css('top', earth_position_y);
}, 50)