function meuNivel() {
    document.getElementById("nivel").innerHTML = ""
    var nickName = document.getElementById("nickname").value;
    var XP = document.getElementById("xp").value;
    var nivel;

    if(XP <= 1000){ 

        nivel = "Ferro";

    }else if(XP <= 2000){

        nivel = "Bronze";

    }else if(XP <= 5000){

        nivel = "Prata";

    }else if(XP <= 7000){

        nivel = "Ouro";

    }else if(XP <= 8000){

        nivel = "Platina";

    }else if(XP <= 9000){

        nivel = "Ascendente";

    }else if(XP <= 10000){

        nivel = "Imortal";

    }else if(XP >= 10001){

        nivel = "Radiante";

    }

    
    if(nickName.length > 14){

        document.getElementById("nivel").innerHTML = "<h2>Por favor, Coloque um nome menor</h2>";

       
    }else if(nickName != "" && XP != 0){

        document.getElementById("nivel").innerHTML = "<h2>O Herói de nome <b>"+nickName+"</b> <br> está no nível de <b>"+nivel+"</b></h2>";

    }

}