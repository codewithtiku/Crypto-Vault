document.getElementById('btn-login').addEventListener('click', LoginFunc);

function LoginFunc() {
    let email = document.getElementById('input-Email').value;
    let password = document.getElementById('input-Password').value;
    
    let isLoggedIn = false;

    if (email === 'harshrao@gmail.com' && password === 'harshrao') {
        
        isLoggedIn = true;
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            let storedEmail = localStorage.key(i);
            let storedPassword = localStorage.getItem(storedEmail);
            if (email === storedEmail && password === storedPassword) {
                isLoggedIn = true;
                break;
            }
        }
    }

    if (isLoggedIn) {
        if (email === 'harshrao@gmail.com') {
            localStorage.setItem('Amount', '25,32,19,844.56');
        localStorage.setItem('History', true);
        } else{
            localStorage.setItem('Amount', '0.00');
            localStorage.removeItem('History');
        }
        window.location.href = 'after-login.html';
    } else {
        let error_login = document.createElement('p');
        error_login.innerHTML = 'Incorrect Email or Password';
        error_login.classList.add('Text-red');
        document.querySelector('.login').appendChild(error_login);
    }
}
