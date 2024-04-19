// Global variables
let length; // Length of the cuboid
let height; // Height of the cuboid
let width; // Width of the cuboid
let paraDisplay = document.getElementById("para");
// Function that takes input
function valuelnput() {
height = parseInt(document.getElementById("input2").value);
length = parseInt(document.getElementById("input1").value); width = parseInt(document.getElementById("input3").value); }
// Function to check if any input is null or not a number
function isNull() {
valuelnput();
if (isNaN(height) || isNaN(length) || isNaN(width)) {
paraDisplay.style.display = "block";
paraDisplay.innerHTML = "Please enter the details correctly.";
return false;
} else {
return true;
}
}

// Callback function for calculating volume
function calculateVolume() {
if (isNull()) {
var cuboidVolume = length * height * width;
paraDisplay.style.display = "block";
paraDisplay.innerHTML = "Volume of Cuboid is " + cuboidVolume + " cm<sup>3</sup>.";
}
}

// Callback function for calculating TSA
function calculateTSA() {
if (isNull()) {
var cuboidTSA = 2 * ((length * width) + (width * height) + (height * length));
paraDisplay.style.display = "block";
paraDisplay.innerHTML = "T.S.A of Cuboid is " + cuboidTSA + " cm<sup>2</sup>.";
}
}

// Callback function for calculating LSA
function calculateLSA() {
if (isNull()) {
var cuboidLSA=2 * (length + width) * height;
paraDisplay.style.display = "block";
paraDisplay.innerHTML = "L.S.A of Cuboid is " + cuboidLSA + " cm<sup>2</sup>.";
}
}
// Adding event listeners to the buttons
document.getElementById("btn1").addEventListener("click", calculateVolume);
document.getElementById("btn2").addEventListener("click", calculateTSA); document.getElementById("btn3").addEventListener("click", calculateLSA);