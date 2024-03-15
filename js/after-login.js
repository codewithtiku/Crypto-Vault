let amount = localStorage.getItem('Amount');
document.getElementById('amount').innerHTML = `<h6>Tether USDt<h6/> - ` + amount

document.getElementById('crypto-chart').addEventListener('click', FuncCrypto);
function FuncCrypto() {
    window.location.href = 'after-login.html'
}