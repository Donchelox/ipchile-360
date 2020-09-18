//Menu level 1
function toggleSidebar(){
    document.getElementById("scroll-menu").classList.toggle('stgo-active');
}
function toggleSidebarRancagua(){
    document.getElementById("scroll-menu").classList.toggle('rancagua-active');
}
function toggleSidebarLaSerena(){
    document.getElementById("scroll-menu").classList.toggle('laserena-active');
}
function toggleSidebarTemuco(){
    document.getElementById("scroll-menu").classList.toggle('temuco-active');
}

//Menu sidebar animation
function toggleSiderbarMenu(){
    document.getElementById("sidebar-menu").classList.toggle('close');
}
function toggleCloseSiderbar(){
    document.getElementById("close").classList.toggle('d-none');
}

var aScene = document.querySelector('a-scene');
var aSky = document.querySelector('a-sky');
var aText = document.querySelector('a-text');
var pausaVideo = function(){    document.querySelector('iframe').setAttribute('src', '');}

//Rancagua 360

function ranEducacion(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_educ.jpg');
    aText.setAttribute('value','Taller Educacion - Sede Rancagua');
    pausaVideo();
}
function ranElectro(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_electro.jpg');
    aText.setAttribute('value','Taller Electronica - Sede Rancagua');
    pausaVideo();
}
function ranEnfermeria1(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_enferm1.jpg');
    aText.setAttribute('value','Taller Enfermeria 1 - Sede Rancagua');
    pausaVideo();
}
function ranEnfermeria2(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_enferm2.jpg');
    aText.setAttribute('value','Taller Enfermeria 2 - Sede Rancagua');
    pausaVideo();
}
function ranGastro(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_gast.jpg');
    aText.setAttribute('value','Taller Gastronomia - Sede Rancagua');
    pausaVideo();
}
function ranMasot(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_masot.jpg');
    aText.setAttribute('value','Taller Masoterapia - Sede Rancagua');
    pausaVideo();
}
function ranMecan1(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_mecan_1.jpg');
    aText.setAttribute('value','Taller Mecanica 1 - Sede Rancagua');
    pausaVideo();
}
function ranMecan2(){
    aScene.classList.remove("d-none");
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_mecan_2.jpg');
    aText.setAttribute('value','Taller Mecanica 2 - Sede Rancagua');
    pausaVideo();
}
function testVideo(){
    aScene.classList.add('d-none');
    document.getElementById("sidebar-menu").classList.toggle('close');
    document.querySelector('iframe').setAttribute('src', 'https://www.youtube.com/embed/116sMd5U7UY');
}