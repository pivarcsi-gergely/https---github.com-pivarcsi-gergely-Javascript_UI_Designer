function szoveg() {
    let szoveg = document.getElementById("inputSzoveg").value;
 
    document.getElementById("elonezet").innerHTML = szoveg;

 }

function init() {
    document.getElementById("inputSzoveg").addEventListener("input", szoveg);
}

document.addEventListener("DOMContentLoaded", init);