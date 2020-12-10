//variables

var scrollMenu = document.getElementById("scroll-menu");
var aScene = document.querySelector('a-scene');
var aSky = document.querySelector('a-sky');
var aText = document.querySelector('a-text');
var pausaVideo = function(){document.querySelector('video').setAttribute('src', '');}
var titleVideo = document.getElementById("title-video");
var startSedes = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    aScene.style.display = "block";
}

//open menu and animation
function toggleSiderbarMenu(){
    document.getElementById("sidebar-menu").classList.toggle('close');
}
function toggleCloseSiderbar(){
    document.getElementById("close").classList.toggle('d-none');
}

//return home
var returnHome = function(){
    document.getElementById("sidebar-menu").style.display = "none";
    document.getElementById("home-recorrido").style.display = "block";
    scrollMenu.removeAttribute('class');
    aScene.style.display = "none";
}
//Escuelas
var sectionAdministracion = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('administracion-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/360/clinica-odontologica-1.jpg');
}
var sectionHumanidades = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('humanidades-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/360/clinica-odontologica-1.jpg');
}
var sectionProcesos = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('procesos-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/360/clinica-odontologica-1.jpg');
}
var sectionIngenieria = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('ingenieria-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/360/clinica-odontologica-1.jpg');
}
var sectionSalud = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('salud-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/360/clinica-odontologica-1.jpg');
}
var sectionEspacios = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('espacios-comunes-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/360/clinica-odontologica-1.jpg');
}
//Menu level 1
function escuelaAdministracion(){
    scrollMenu.classList.toggle('administracion-active');
}
function escuelaHumanidades(){
    scrollMenu.classList.toggle('humanidades-active');
}
function escuelaProcesos(){
    scrollMenu.classList.toggle('procesos-active');
}
function escuelaIngenieria(){
    scrollMenu.classList.toggle('ingenieria-active');
}
function escuelaSalud(){
    scrollMenu.classList.toggle('salud-active');
}
function escuelaEspacios(){
    scrollMenu.classList.toggle('espacios-comunes-active');
}