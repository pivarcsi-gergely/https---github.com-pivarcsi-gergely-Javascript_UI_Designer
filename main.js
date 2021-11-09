function szoveg() {
    let szoveg = document.getElementById("inputSzoveg").value;
    if (szoveg == "" || !szoveg.trim()) {
        document.getElementById("szovegHiba").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("elonezet").innerHTML = "";
    }
    else {
        document.getElementById("elonezet").innerHTML = szoveg;
        document.getElementById("szovegHiba").innerHTML = "";
    }
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

 function alaphelyzet() {
     document.getElementById("inputSzoveg").value = "Árvíztűrő tükörfúrógép";
     document.getElementById("inputBetumeret").value = 12;
     document.getElementById("inputSzovegszin").value = "#000000";
     document.getElementById("inputHatterszin").value = "#ffffff";
     document.getElementById("elonezet").innerHTML = "";
     document.getElementById("szovegHiba").innerHTML = "";
 }

function init() {
    document.getElementById("inputSzoveg").addEventListener("input", szoveg);
    document.getElementById("inputBetumeret").addEventListener("input", betumeret);
    document.getElementById("inputSzovegszin").addEventListener("input", szovegszin);
    document.getElementById("inputHatterszin").addEventListener("input", hatterszin);
    document.getElementById("alaphelyzet_gomb").addEventListener("click", alaphelyzet);
}

document.addEventListener("DOMContentLoaded", init);