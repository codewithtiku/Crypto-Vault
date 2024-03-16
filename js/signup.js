document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.querySelector('button');

    continueButton.addEventListener('click', function () {
        const inputFields = document.querySelectorAll('input');
        let allFieldsEntered = true;

        // Check if any input field is empty
        inputFields.forEach(input => {
            if (input.value.trim() === '') {
                allFieldsEntered = false;
            }
        });

        // If any input field is empty, display error message
        if (!allFieldsEntered) {
            const errorMessage = document.createElement('p');
            errorMessage.innerHTML = 'Please fill in all the fields.';
            errorMessage.classList.add('Text-red')
    const signUpDiv = document.querySelector('.signup');
            signUpDiv.appendChild(errorMessage);
        } else {
            // Clear input field values and redirect
            inputFields.forEach(input => {
                input.value = '';
            });
            window.location.href = 'index.html';
        }
    });
});
document.querySelector('button').addEventListener('click', SignupFunc);
function SignupFunc(){
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-pass').value;
    localStorage.setItem(email, password);
}