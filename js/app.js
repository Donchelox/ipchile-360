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
}
//Escuelas
var sectionAdministracion = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('administracion-active');
}
var sectionHumanidades = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('humanidades-active');
}
var sectionProcesos = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('procesos-active');
}
var sectionIngenieria = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('ingenieria-active');
}
var sectionSalud = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('salud-active');
}
var sectionEspacios = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('espacios-comunes-active');
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