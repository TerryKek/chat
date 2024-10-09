function Check(){
    var nev = document.getElementById('NEV2').value
    var nevhiba = document.getElementById('hiba_nev')

    var email = document.getElementById('EMAIL2').value
    var emailhiba = document.getElementById('hiba_email')

    var jelszo = document.getElementById('JELSZO2').value
    var jelszohiba = document.getElementById('hiba_jelszo')

    console.log(nev.length)

    if(nev.length <= 3){
        nevhiba.innerHTML = "A névnek legalább 4 karakternek kell lennie!!!"
    }
    else if(nev.length > 3) {
        nevhiba.innerHTML = " "
    }

    if(!email.includes("@gmail.com")){
        emailhiba.innerHTML = "Valós Email címet adj meg!!!"
    }
    else if(email.includes("@gmail.com")){
        emailhiba.innerHTML = " "
    }

    if(jelszo.length < 1){
        jelszohiba.innerHTML = "Adj meg valami jelszót!!!"
    }
    else if(jelszo.length < 6){
        jelszohiba.innerHTML = "Erősebb jelszót adj meg!!!"
    }
    else if(jelszo.length >= 6){
        jelszohiba.innerHTML = " "
    }
}