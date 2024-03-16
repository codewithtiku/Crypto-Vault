
document.getElementById('btn-login').addEventListener('click', LoginFunc)
function LoginFunc() {
    let email = document.getElementById('input-Email').value;
    let password = document.getElementById('input-Password').value;
    if (email === 'harshrao@gmail.com' && password === 'harshrao') {
        localStorage.setItem('Amount', '15,63,43,25,32,19,844.56')
    } else {
        localStorage.setItem('Amount', '0.00')
    }
    window.location.href = 'after-login.html';
}


