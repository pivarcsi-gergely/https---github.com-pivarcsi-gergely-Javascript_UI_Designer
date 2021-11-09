function szoveg() {
    let szoveg = document.getElementById("inputSzoveg").value;
 
    document.getElementById("elonezet").innerHTML = szoveg;

 }

 function betumeret() {
     let inputBetumeret = document.getElementById("inputBetumeret").value;
     document.getElementById("elonezet").style.fontSize = inputBetumeret + "pt";
 }

function init() {
    document.getElementById("inputSzoveg").addEventListener("input", szoveg);
    document.getElementById("inputBetumeret").addEventListener("input", betumeret);
}

document.addEventListener("DOMContentLoaded", init);