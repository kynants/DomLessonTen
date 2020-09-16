// MY ATTEMPT
// Note: My comment on line 40
// function calc() {

//   event.preventDefault();
  
//   // Takes in user input
//   var radiusVar = document.getElementById("radius");

//   console.log(radiusVar);
//   console.log(typeof radiusVar);
  
//   // Uses the formula V = 4/3 * Pi * r^3 to calculate the volume
//   var volumeVar = (4/3) * Math.PI * Math.pow(radiusVar, 3);

//   console.log(volumeVar);
//   console.log(typeof volumeVar);

//   document.getElementById("volume").innerHTML = volumeVar;

// }

// ============================================================================

// ONLINE SOLUTION - DID NOT WORK
// https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-10.php
// function volume_sphere() {
//   event.preventDefault();
//   var volume;
//   var radius = document.getElementById('radius').value;
//   radius = Math.abs(radius);
//   volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById('volume').value = volume;
//   return false;
// }
// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// ============================================================================

// SOLUTION BY ROMICHG
// https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-10.php
function calculate() {
  var r = document.getElementById("rad").value; // Note: Forgot to use .value in my attempt!
  document.getElementById("vol").value = ((3 / 4) * Math.PI * (Math.pow(parseInt(r), 3))).toFixed(4)
}