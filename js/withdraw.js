document.getElementById('withdraw').addEventListener('click', WithdrawFunc);

function WithdrawFunc(){
    // Select all elements with class "w-i"
    var inputs = document.querySelectorAll('.w-i');

    // Loop through each element and set its value to an empty string
    inputs.forEach(function(input) {
        input.value = "";
    });
}
