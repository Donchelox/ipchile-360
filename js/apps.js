
    var click1 = document.getElementById("click1");
    var click2 = document.getElementById("click2");
    var click3 = document.getElementById("click3");
    var box2 = document.querySelector("body");

    click1.onclick = function(){
        box.classList("bg1");
    }
    
    click2.onclick = function(){
        box2.style.backgroundImage = "url('img/sedes/rancagua/ran_educ.jpg')";
    }

    click3.onclick = function(){
        box2.style.backgroundImage = "url('img/sedes/rancagua/ran_enferm2.jpg')";
    }