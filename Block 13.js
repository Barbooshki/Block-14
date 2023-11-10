function createMessage(fahrenheit, celsius) {
  if (celsius < -10) {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's extremely cold!`;
  } else if (celsius >= -10 && celsius < 0) {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's very cold.`;
  } else if (celsius >= 0 && celsius < 10) {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's cold.`;
  } else if (celsius >= 10 && celsius < 20) {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's a bit chilly.`;
  } else if (celsius >= 20 && celsius < 30) {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's a comfortable temperature.`;
  } else if (celsius >= 30) {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's getting warm!`;
  } else {
    return `The temperature of ${fahrenheit}°F is ${celsius}°C. It's in between temperature ranges.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Wait for the document to be fully loaded

  const fahrenheitInput = document.getElementById("fahrenheitInput");
  const celsiusDisplay = document.getElementById("celsiusDisplay");
  const messageDisplay = document.getElementById("messageDisplay");

  fahrenheitInput.addEventListener("input", function() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusDisplay.textContent = `Celsius: ${celsius}°C`;
    const message = createMessage(fahrenheit, celsius);
    messageDisplay.textContent = message;
  });

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
});


// Example usage:
var fahrenheitTemperature = 68; // Change this to the temperature in Fahrenheit you want to convert
var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
var message = createMessage(fahrenheitTemperature, celsiusTemperature);
console.log(message);

function rand(limit) {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const randomFraction = Math.random();

  // Scale the randomFraction to the range [0, limit)
  const randomNumber = Math.floor(randomFraction * limit);

  return randomNumber;
}

// Example usage:
const limit = 30; // Change this to your desired limit
const randomNum = rand(limit);
console.log(`Random number between 0 and ${limit - 30}: ${randomNum}`);
