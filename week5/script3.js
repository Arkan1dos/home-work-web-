function std() {
    var table = document.getElementById('students');
    if (document.getElementById("name").value == "")
    {
        document.getElementById("name").style.border = "solid red";

    }
    else if (document.getElementById("surname").value == "")
    {
        document.getElementById("surname").style.border = "solid red";

    }
    else if(document.getElementById("faculty").value=="-1")
    {
        document.getElementById("faculty").style.border="solid red";
    }
    else
        {
        var row = table.insertRow();
        var new1 = document.createTextNode(document.getElementById("name").value);
        var new2 = document.createTextNode(document.getElementById("surname").value);
        var new3 = document.createTextNode(document.getElementById("faculty").value);
        row.insertCell(0).appendChild(new1);
        row.insertCell(1).appendChild(new2);
        row.insertCell(2).appendChild(new3);
        console.log(5)

    }
    console.log(5)

}
const btn = document.querySelector('button');
btn.addEventListener('click',std)