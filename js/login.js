
document.getElementById('btn-login').addEventListener('click', LoginFunc)
function LoginFunc(){
let email = document.getElementById('input-Email').value;
let password = document.getElementById('input-Password').value;
if (email === 'harshrao@gmail.com' && password === 'harshrao') {
    localStorage.setItem('Amount', '$450000.00')
} else {
    localStorage.setItem('Amount', '$0.00')
}
window.location.href='index.html';
}


