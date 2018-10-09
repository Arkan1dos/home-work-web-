function big(e)
{
    document.getElementsByTagName('img')[0].src = e.target.src;
}
const im = document.querySelectorAll('img');
im[1].addEventListener('click',big,);
im[2].addEventListener('click',big,);
im[3].addEventListener('click',big);
im[4].addEventListener('click',big);
im[5].addEventListener('click',big);

