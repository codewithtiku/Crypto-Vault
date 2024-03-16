let amount = localStorage.getItem('Amount');
document.getElementById('amount').innerHTML = `Tether USDt - ` + amount

document.getElementById('crypto-chart').addEventListener('click', FuncCrypto);
function FuncCrypto() {
    window.location.href = 'after-login.html'
}