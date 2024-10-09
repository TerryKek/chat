var keret_1 = document.getElementById('keret')
var keret_2 = document.getElementById('keret2')

function reg(){
    keret_1.style.display = "none"
    keret_2.style.display = "block"
    document.getElementById('NEV2').value = ""
    document.getElementById('hiba_nev').value = ""

    document.getElementById('EMAIL2').value = ""
    document.getElementById('hiba_email').value = ""

    document.getElementById('JELSZO2').value = ""
    document.getElementById('hiba_jelszo').value = ""
}

function Jel(){
    keret_2.style.display = "none"
    keret_1.style.display = "block"
    document.getElementById('NEV').value = ""

    document.getElementById('JELSZO').value = ""
}