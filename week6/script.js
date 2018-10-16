function f(e) {
    n = e.target.parentNode;
    n.setAttribute('data-status','done')
    console.log(n);
}
const btn = document.querySelectorAll('button');
for (const i of btn)
{
    i.addEventListener('click',f);
}