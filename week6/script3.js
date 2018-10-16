let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
//console.log(cars[0].year);
var sum = 0;
var count = 0;
for (i in cars) {
    console.log(cars[i].brand + cars[i].model);
    Div = document.createElement('div');
    Div.className = 'card';
    image = document.createElement("img");
    image.src = cars[i].image_url;
    image.width = 100;
    txt1 = document.createElement('span');
    txt1.innerText = cars[i].brand;
    txt1.className = 'name';
    txt2 = document.createElement('span');
    txt2.innerText =cars[i].model;
    Icon = document.createElement('img');
    Icon.src = 'https://image.freepik.com/free-icon/download_318-140743.jpg';
    Icon.width = 20;
    Icon.className = 'basket';
    Div.appendChild(image);
    Div.appendChild(txt1);
    Div.appendChild(txt2);
    Div.appendChild(Icon);
    document.getElementById('cars').appendChild(Div);


}

function Btn(e) {

    var Sum = document.querySelector('#sum');
    var Count = document.querySelector('#items');
    par = e.target.parentNode;
    n = par.querySelector('.name').innerText;
    //console.log(n);
    if(e.target.src == 'https://image.freepik.com/free-icon/download_318-140743.jpg') {
        e.target.src = "https://image.freepik.com/free-icon/accepted_318-11000.jpg";
        for(let i in cars)
        {
            //console.log(cars[i].price);
            if(cars[i].brand == n)
            {
                sum += cars[i].price;
                count++;
            }
        }
    }
    else if(e.target.src == 'https://image.freepik.com/free-icon/accepted_318-11000.jpg') {
        e.target.src = "https://image.freepik.com/free-icon/download_318-140743.jpg";
        for(let i in cars)
        {
            if(cars[i].brand == n)
            {
                sum -= cars[i].price;
                count--;
            }
        }
    }
    Sum.innerHTML = sum;
    Count.innerHTML = count;
    //console.log(sum);
}


var btn = document.querySelectorAll('.basket');

for (let i of btn)
{
    i.addEventListener('click', Btn);
}


/* Write your code here */