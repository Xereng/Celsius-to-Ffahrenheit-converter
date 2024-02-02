function convertTempreture() {
  const celsius = document.getElementById('celsius').value;
  if (celsius === '') {
    alert('Please enter a valid Celsius temperature.');
    return;
  }
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('result').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
}

document.getElementById('btn').addEventListener('click', convertTempreture);
