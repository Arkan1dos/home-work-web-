function err()
{
    document.getElementById("loading").style.display = "none";
    const btn = document.querySelectorAll('button');
    btn[0].textContent = "Error";
}
function onResponse(response)
{
    if(response.ok) {return response.json();}
    else
        {
        err()
        return ;
    }
}
class Car
{
    constructor(carContainer, nameOfCar, model, price)
    {
        const card = document.createElement('div');
        const n = document.createElement('span');
        const m = document.createElement('span');
        const pr = document.createElement('span');
        n.innerHTML = nameOfCar;
        n.className = "title";
        m.innerHTML = model;
        m.className = "title";
        pr.innerHTML = price;
        pr.className = "price";
        card.className = "card";
        card.appendChild(n)
        card.appendChild(m)
        card.appendChild(pr);
        carContainer.appendChild(card);
    }
}
function onJsonReady(data)
{
    this.carInfo = data;
    this.printCars();
}
function printCars()
{
    const carContainer = document.querySelector('#cards');
    carContainer.innerHTML = '';
    for(const info of this.carInfo)
    {
        const car = new Car(carContainer, info.nameOfCar, info.model, info.price);
    }
    const btn = document.querySelectorAll('button');
    btn[0].textContent = "Loaded";
}
function load()
{
    document.getElementById("loading").style.display = "flex";
    const btn = document.querySelectorAll('button');
    btn[0].textContent = "Loading";
    fetch("http://demo4296963.mockable.io/listCars").catch(err).then(onResponse).then(onJsonReady);
}
const btn = document.querySelectorAll('button');
for (const i of btn)
{
    i.addEventListener('click', load);
}