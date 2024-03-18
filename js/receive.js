if(localStorage.getItem('History')){
    document.querySelector('.rec-img').innerHTML = `<img src="img/qrcode.jpg" alt="QR Code" width="193vh" height="193vh">`;
    let p = document.createElement('p');
    p.innerHTML = `Ending with 2U1tJct`;
    p.classList.add("my-2", "text-white");
    document.querySelector('.rec-text-2').appendChild(p)
}
else{
    document.querySelector('.rec-img').innerHTML = `<img src="img/qr.png" alt="QR Code" width="193vh" height="193vh">`
    let p = document.createElement('p');
    p.innerHTML = `Ending with f5tgb9a`;
    p.classList.add("my-2", "text-white");
    document.querySelector('.rec-text-2').appendChild(p)
}