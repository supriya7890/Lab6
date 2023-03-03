function submission(){
alert("Your form is submitted!");
}

function findLargestNumber(numbers) {
let largestNumber = numbers[0]; // Assuming the first number is the largest
for (var i = 1; i < numbers.length; i++) {
if (numbers[i] > largestNumber) {
largestNumber = numbers[i]; // finally updates the largest number
}
}
return largestNumber;
}

const apiKey = '39.7456,-97.0892';
const city = 'New York';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
