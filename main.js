function szoveg() {
    let szoveg = document.getElementById("inputSzoveg").value;
    document.getElementById("elonezet").innerHTML = szoveg;

 }

 function betumeret() {
     let inputBetumeret = document.getElementById("inputBetumeret").value;
     document.getElementById("elonezet").style.fontSize = inputBetumeret + "pt";
 }

 function szovegszin() {
     let inputSzovegszin = document.getElementById("inputSzovegszin").value;
     document.getElementById("elonezet").style.color = inputSzovegszin;
 }

 function hatterszin() {
     let inputHatterszin = document.getElementById("inputHatterszin").value;
     document.getElementById("elonezet").style.backgroundColor = inputHatterszin;
 }

function init() {
    document.getElementById("inputSzoveg").addEventListener("input", szoveg);
    document.getElementById("inputBetumeret").addEventListener("input", betumeret);
    document.getElementById("inputSzovegszin").addEventListener("input", szovegszin);
    document.getElementById("inputHatterszin").addEventListener("input", hatterszin);
}

document.addEventListener("DOMContentLoaded", init);