cityKaz = ['Select city','Astana','Almaty'];
cityRus = ['Select city','Moscow','Sochi'];
let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

function f() {
    var q = document.getElementById('cities');
    for (const i in q)
    {
        q.remove(i);
    }
    for (let i in cities_by_country)
    {
        if(event.target.value ==  i)
        {
            for(let j of cities_by_country[i])
            {
                a1 = document.createElement("option");
                a1.text = j;
                q.add(a1);
            console.log(j);
            }
        }
        console.log(i);
    }

}
var c = document.getElementById('countries');

for (let i of countries)
{
    ad = document.createElement("option");
    ad.text = i;
    c.add(ad);
}
document.getElementById('countries').addEventListener('click',f);

    /**/