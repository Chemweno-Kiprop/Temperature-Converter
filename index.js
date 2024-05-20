// Get references to HTML elements
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;  // Variable to store the temperature value

// Function to convert temperature based on selected unit
function convert() {
    // Check if the Celsius conversion option is selected
    if (toCelcius.checked) {
        temp = Number(textBox.value);  
        temp = (temp - 32) * (5 / 9);  // Convert Fahrenheit to Celsius
        result.textContent = temp.toFixed(1) + "ºC";  // Display result
    }
    // Check if the Fahrenheit conversion option is selected
    else if (toFahrenheit.checked) {
        temp = Number(textBox.value); 
        temp = temp * 9 / 5 + 32;  // Convert Celsius to Fahrenheit
        result.textContent = temp.toFixed(1) + "ºF";  // Display result in Fahrenheit
    }
    // If no conversion option is selected
    else {
        result.textContent = "Select a unit now";  // Prompt to select a unit
    }
}
