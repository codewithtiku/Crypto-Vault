document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code goes here
    // Function to format number with commas as per Indian numeric system
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Get all elements with the class "history-no"
const historyNos = document.querySelectorAll('.history-no');

// Loop through each element and set a random number
historyNos.forEach(element => {
    // Generate a random number between 1000000 and 9999999
    const randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;

    // Generate a random decimal between 0 and 99
    const randomDecimal = Math.floor(Math.random() * 100);

    // Combine the random number and random decimal with 2 decimal points
    const randomValue = `${formatNumber(randomNumber)}.${randomDecimal.toString().padStart(2, '0')}`;

    // Set the random value as the content of the element
    element.textContent = randomValue;
});


});
