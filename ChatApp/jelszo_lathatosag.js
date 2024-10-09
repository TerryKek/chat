function jelszo_lathato(){
    var img = document.getElementById('csukva')
    var input = document.getElementById('JELSZO')

    if(input.type == "password"){
        img.src = "szemnyit.png"
        input.type = "text"
    }
    else{
        img.src = "szemcsuk.png"
        input.type = "password"
    }

}