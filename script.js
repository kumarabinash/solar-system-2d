// Get window Height & Width
const windowHeight = window.innerHeight - 70;
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
const moon = $("#moon");

// Center coordinates
// Find the center 2D plain (Solar System)
const center_x = parseFloat($(sun).css('left').split('px')[0]);
const center_y = parseFloat($(sun).css('top').split('px')[0]);

// Initial Position of earth
var earth_position_x = center_x + innerRadius;
var earth_position_y = center_y;

var earth_timer;
var moon_timer;

// Set earth at initial position
$(earth).css('left',earth_position_x).css('top', earth_position_y);




$("#btn-toggle-animation").on('click', function(e){
  e.preventDefault();
  toggleRevolutionEarth();
});

$("#btn-toggle-labels").on('click', function(e){
  e.preventDefault();
  $(".celestial-bodies .label").toggleClass('hidden');
});

$("#btn-toggle-moons").on('click', function(e){
  e.preventDefault();
  toggleMoons();
});



function toggleRevolutionEarth(){
  if(earth_timer){
    clearInterval(earth_timer);
    earth_timer = false;
    return
  }

  // Initial radian of earth
  const theta = 0; 

  // Formula get x & y coordinates
  //(𝑥,𝑦) = (𝑎 + 𝑟cos𝜃, 𝑏 + 𝑟sin𝜃)
  // Where a & b are initial coordinates
  // r is radius
  // 𝜃 is the new angle in radian

  // To get coordinate in our code it will be
  // (center_x, center_y) = (center_x + innerRadius * Math.cos(theta + radian_increment), center_y + innerRadius * Math.sin(theta + radian_increment))

  var degree = 0;

  earth_timer = setInterval(function(){
    degree += 0.5;

    // If degree reaches 361, bring it back to zero
    if(degree === 360.5)
      degree = 0;

    // Conver degree into radian
    radian = degree *  Math.PI / 180;

    earth_position_x = center_x + innerRadius * Math.cos(theta + radian);
    earth_position_y = center_y + innerRadius * Math.sin(theta + radian);
    $(earth).css('left',earth_position_x).css('top', earth_position_y);
  }, 25)
}



function toggleMoons(){
  $(moon).toggleClass('hidden');
  if(moon_timer){
    clearInterval(moon_timer);
    moon_timer = false;
    return
  }


  // Center coordinates
  const innerRadiusMoon = 45;
  // Find the center 2D plain (Solar System)
  // const center_earth_x = parseFloat($(earth).css('left').split('px')[0]);
  // const center_earth_y = parseFloat($(earth).css('top').split('px')[0]);

  const center_earth_x = 15 / 2;
  const center_earth_y = 15 / 2;

  // Initial Position of earth
  var moon_position_x = center_earth_x + 2.5 + innerRadiusMoon;
  var moon_position_y = center_earth_y + 2.5;

  // Set earth at initial position
  $(moon).css('left',moon_position_x).css('top', moon_position_y);

  // Initial radian of earth
  const theta = 0; 

  // Formula get x & y coordinates
  //(𝑥,𝑦) = (𝑎 + 𝑟cos𝜃, 𝑏 + 𝑟sin𝜃)
  // Where a & b are initial coordinates
  // r is radius
  // 𝜃 is the new angle in radian

  // To get coordinate in our code it will be
  // (center_x, center_y) = (center_x + innerRadius * Math.cos(theta + radian_increment), center_y + innerRadius * Math.sin(theta + radian_increment))

  var degree = 0;

  moon_timer = setInterval(function(){
    degree += 1;

    // If degree reaches 361, bring it back to zero
    if(degree === 361)
      degree = 0;

    // Conver degree into radian
    radian = degree *  Math.PI / 180;

    moon_position_x = center_earth_x + innerRadiusMoon * Math.cos(theta + radian);
    moon_position_y = center_earth_y + innerRadiusMoon * Math.sin(theta + radian);
    $(moon).css('left',moon_position_x).css('top', moon_position_y);
  }, 2)
}
