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
    document.getElementById("sidebar-menu").classList.toggle('cerrar');
}
function toggleCloseSiderbar(){
    document.getElementById("cerrar").classList.toggle('d-none');
}
function returnGallery(){
    window.history.back();
    sectionAdministracion();
}
function closeDesc(){
    document.getElementById("desc360").style.display = "none";
}

//return home
var returnHome = function(){
    document.getElementById("sidebar-menu").style.display = "none";
    document.getElementById("home-recorrido").style.display = "block";
    scrollMenu.removeAttribute('class');
    aScene.style.display = "none";
}
var returnHomeGaleria = function(){
    window.location.href = '../../index.html';
}
//Escuelas
var sectionAdministracion = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('administracion-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', 'img/escuelas/administracion/taller-aplicaciones-diseno-2dy3d/republica/360/diseno-republica01.jpg');
    document.getElementById("taller-prototipo").focus();
}
var sectionHumanidades = function(){
    document.getElementById("sidebar-menu").style.display = "block";
    document.getElementById("home-recorrido").style.display = "none";
    scrollMenu.classList.toggle('humanidades-active');
    aScene.style.display = "block";
    aSky.setAttribute('src', '../../img/escuelas/humanidades/sala-didactica/republica/360/didactica-rep02.jpg');
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

//volver
function volverMenu(){
    scrollMenu.removeAttribute('class');
}
//Menu level 1
function escuelaAdministracion(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('administracion-active');
}
function escuelaHumanidades(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('humanidades-active');
}
function escuelaProcesos(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('procesos-active');
}
function escuelaIngenieria(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('ingenieria-active');
}
function escuelaSalud(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('salud-active');
}
function escuelaEspacios(){
    scrollMenu.removeAttribute('class');    
    scrollMenu.classList.toggle('espacios-comunes-active');
}

//Level 2
function sedesHumanidades(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-humanidades-active');
} 
function sedesGastronomia(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-gastronomia-active');
} 
function sedesProgramacionComputacional(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-programacion-computacional-active');
} 
function sedesAutomatizacionPLC(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-automatizacion-plc-active');
} 
function sedesAutomotriz(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-automotriz-active');
} 
function sedesMotos(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-motos-active');
} 
function sedesMotores(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-motores-active');
} 
function sedesCircuitosAutomovil(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-circuitos-automovil-active');
} 
function sedesMecanismos(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-mecanismos-active');
} 
function sedesAudiologia(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-audiologia-active');
} 
function sedesGimnasio(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-gimnasio-active');
} 
function sedesPsicomotricidad(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-psicomotricidad-active');
} 
function sedesMasoterapia(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-masoterapia-active');
} 
function sedesAnatomia(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-anatomia-active');
} 
function espaciosLaserena(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-espacios-laserena-active');
} 
function espaciosRepublica(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-espacios-republica-active');
} 
function espaciosRancagua(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-espacios-rancagua-active');
} 
function espaciosTemuco(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-espacios-temuco-active');
} 
function sedesQuimica(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-quimica-active');
} 
function sedesObraGruesa(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-obra-gruesa-active');
} 
function sedesMetalurgia(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-metalurgia-active');
} 
function sedesMineria(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('sedes-mineria-active');
} 

//Administracion 
//TALLER DE APLICACIONES PRACTICAS DE DISEÑO 2D Y3D
function tallerDiseno3Dy2D(){
    window.location.href = '../360/administracion/taller-aplicaciones-practicas-2d3d.html';
}
//PROTOTIPO
function tallerPrototipo(){
    window.location.href = '../galeria/administracion/taller-prototipo-republica.html';
}
//GASTRONOMIA
function gastroRepublica(){
    window.location.href = '../galeria/administracion/gastronomia-republica.html';
}
function gastroRancagua(){
    window.location.href = '../galeria/administracion/gastronomia-rancagua.html';
}
