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

//Menu level 1
function toggleSidebar(){
    scrollMenu.classList.toggle('stgo-active');
}
function toggleSidebarRancagua(){
    scrollMenu.classList.toggle('rancagua-active');
}
function toggleSidebarLaSerena(){
    scrollMenu.classList.toggle('laserena-active');
}
function toggleSidebarTemuco(){
    scrollMenu.classList.toggle('temuco-active');
}

