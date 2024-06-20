const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const reverseButton = document.getElementById("reverseButton");
const calculationText = document.getElementById("calculationText");
const conversionInfo = document.getElementById("conversionInfo");
const formulaText = document.getElementById("formulaText");
const celsiusLabel = document.getElementById("celsiusLabel");
const fahrenheitLabel = document.getElementById("fahrenheitLabel");

let isCelsiusToFahrenheit = true;

function convertTemperature() {
  const value = parseFloat(celsiusInput.value);

  // Check for empty input before proceeding
  if (isNaN(value)) {
    alert("Masukan nilai dahulu!");
    return; // Exit the function if no input is provided
  }

  let formula;
  if (isCelsiusToFahrenheit) {
    formula = "°F = (°C × 9/5) + 32";
    fahrenheitInput.value = (value * 9/5) + 32;
    conversionInfo.textContent = "Konversi dari Celsius (°C) ke Fahrenheit (°F)";

    calculationText.value = `Suhu ${value}°C sama dengan ${fahrenheitInput.value}°F \n\nRumus: ${formula} \n\nPenjelasan:
  
    ->${value}°C × 9/5 = ${(value * 9/5).toFixed(2)}°F
  
    ->${(value * 9/5).toFixed(2)}°F + 32 = ${fahrenheitInput.value}°F
  
      `;
  } else {
    formula = "°C = (°F - 32) × 5/9";
    celsiusInput.value = (value - 32) * 5/9;
    conversionInfo.textContent = "Konversi dari Fahrenheit (°F) ke Celsius (°C)";

    calculationText.value = `Suhu ${value}°F sama dengan ${celsiusInput.value}°C \n\nRumus: ${formula} \n\nPenjelasan:
  
    ->${value}°F - 32 = ${(value - 32).toFixed(2)}°F
  
    ->${(value - 32).toFixed(2)}°F × 5/9 = ${celsiusInput.value}°C
  
      `;
  }
  formulaText.textContent = formula;
}

function resetInputs() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  calculationText.value = "";
  conversionInfo.textContent = "";
  formulaText.textContent = "";
}

function toggleConversion() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  if (isCelsiusToFahrenheit) {
    celsiusInput.removeAttribute("readonly");
    fahrenheitInput.setAttribute("readonly", true);
    celsiusLabel.style.fontWeight = "bold";
    fahrenheitLabel.style.fontWeight = "normal";
  } else {
    celsiusInput.setAttribute("readonly", true);
    fahrenheitInput.removeAttribute("readonly");
    celsiusLabel.style.fontWeight = "normal";
    fahrenheitLabel.style.fontWeight = "bold";
  }
}

convertButton.addEventListener("click", convertTemperature);
resetButton.addEventListener("click", resetInputs);
reverseButton.addEventListener("click", toggleConversion);
