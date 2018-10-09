function det() {
    let x = 0;
    let a = document.querySelector('#s11').value;
    let b = document.querySelector('#s12').value;
    let c = document.querySelector('#s13').value;
    let d = document.querySelector('#s21').value;
    let e = document.querySelector('#s22').value;
    let f = document.querySelector('#s23').value;
    let g = document.querySelector('#s31').value;
    let h = document.querySelector('#s32').value;
    let i = document.querySelector('#s33').value;

    x = a *(e*i - f*h) - b * (d*i - f*g) + c * (d*h - e*g);

    document.getElementById('result').innerText = x;
    console.log(x);

}
const button = document.querySelector('button');
button.addEventListener('click', det)
