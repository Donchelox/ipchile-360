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


//Menu Maps
function mapSedes(){
    aScene.style.display = "none";
    document.getElementById("sidebar-menu").style.display = "none";
}

function startRepublica(){
    startSedes();
    aSky.setAttribute('src', 'img/sedes/republica/clinica-odontologica-1.jpg');
    toggleSidebar();
}

function startLaserena(){
    startSedes();
    aSky.setAttribute('src', 'img/sedes/republica/clinica-odontologica-1.jpg');
    toggleSidebarLaserena();
}

function startRancagua(){
    startSedes();
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_educ.jpg');
    toggleSidebarRancagua();
}

function startTemuco(){
    startSedes();
    aSky.setAttribute('src', 'img/sedes/republica/clinica-odontologica-1.jpg');
    toggleSidebarTemuco();
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

//Menu sidebar animation
function toggleSiderbarMenu(){
    document.getElementById("sidebar-menu").classList.toggle('close');
}
function toggleCloseSiderbar(){
    document.getElementById("close").classList.toggle('d-none');
}


// Sede Santiago 360

function repOdonto1(){
    
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/clinica-odontologica-1.jpg');
    //aText.setAttribute('value','Clínica Odontologica 1 - Sede Republica ');
    pausaVideo();
    
}

function repOdonto2(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/clinica-odontologica-2.jpg');
    //aText.setAttribute('value','Clinica Odontologica 2 - Sede Republica ');
    pausaVideo();
}
function repestudioGrabacionSonido(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/estudio-grabacion-sonido.jpg');
    //aText.setAttribute('value','Estudio Grabacion Sonido - Sede Republica ');
    pausaVideo();
}
function repestudioPostSonido(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/estudio-postproduccion-sonido.jpg');
    //aText.setAttribute('value','Estudio Post Produccion Sonido - Sede Republica ');
    pausaVideo();
}
function repgimTerapeutico(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/gimnasio-terapeutico.jpg');
    //aText.setAttribute('value','Gimnasio Terapeutico - Sede Republica ');
    pausaVideo();
}

function replabConsultaNutricional(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/laboratorio-consulta-nutricional.jpg');
    //aText.setAttribute('value','Laboratorio Consulta Nutricional - Sede Republica ');
    pausaVideo();
}

function replabGraficaComputacional(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/laboratorio-grafica-computacional.jpg');
    //aText.setAttribute('value','Laboratorio Grafica Computacional   - Sede Republica ');
    pausaVideo();
}

function replabPostAudiovisual(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/laboratorio-postproduccion-audiovisual.jpg');
    //aText.setAttribute('value','Laboratorio Postproduccion Audiovisual - Sede Republica ');
    pausaVideo();
}
function repLabVoz(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/laboratorio-voz.jpg');
    //aText.setAttribute('value','Laboratorio Voz   - Sede Republica ');
    pausaVideo();
}

function repSalaAudiometria(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/sala-audiometria.jpg');
   // aText.setAttribute('value','Sala Audiometría - Sede Republica ');
    pausaVideo();
}
function repSalaVestibular(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/sala-vestibular.jpg');
    //aText.setAttribute('value','Sala Vestibular - Sede Republica ');
    pausaVideo();
}

function repTallerDibujoDiseno(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-de-dibujo-diseno.jpg');
    //aText.setAttribute('value','Taller de Dibujo Diseño - Sede Republica ');
    pausaVideo();
}
function repTallerPrototipoDiseno1(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-de-prototipo-diseno.jpg');
    //aText.setAttribute('value','Taller de Prototipo Diseño 1 - Sede Republica ');
    pausaVideo();
}
function repTallerPrototipoDiseno2(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-de-prototipo-diseno-2.jpg');
    //aText.setAttribute('value','Taller de Prototipo Diseño 2 - Sede Republica ');
    pausaVideo();
}
function repTallerElectro(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-electricidad.jpg');
    //aText.setAttribute('value','Taller Electricidad - Sede Republica ');
    pausaVideo();
}
function repHabilidadesClinicas1(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-habilidades-clinicas.jpg');
    //aText.setAttribute('value','Taller Habilidades Clinicas 1 - Sede Republica ');
    pausaVideo();
}
function repHabilidadesClinicas2(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-habilidades-clinicas-2.jpg');
    //aText.setAttribute('value','Taller Habilidades Clinicas 2 - Sede Republica ');
    pausaVideo();
}
function repKine(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-kinesiologia.jpg');
    //aText.setAttribute('value','Taller Kinesionolgia - Sede Republica ');
    pausaVideo();
}
function repMaso(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-masoterapia.jpg');
    //aText.setAttribute('value','Taller Masoterapia - Sede Republica ');
    pausaVideo();
}
function repTallerOdonto1(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/republica/taller-odontologia.jpg');
    //aText.setAttribute('value','Taller Odontologia 1 - Sede Republica ');
    pausaVideo();
}

function recorridoRepublica(){
    document.getElementById("video").style.display = "flex";
    aScene.style.display = "none";
    document.getElementById("map-sedes").style.display = "none";
    document.getElementById("sidebar-menu").classList.toggle('close');
    document.querySelector('video').setAttribute('src', 'https://griveran.cl/proyecto_360/videos/sede-republica.mp4');
    document.querySelector('video').play();
}
// Sede Rancagua 360

function ranEducacion(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_educ.jpg');
    //aText.setAttribute('value','Taller Educacion - Sede Rancagua');
    pausaVideo();
}
function ranElectro(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_electro.jpg');
    //aText.setAttribute('value','Taller Electronica - Sede Rancagua');
    pausaVideo();
}
function ranEnfermeria1(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_enferm1.jpg');
    //aText.setAttribute('value','Taller Enfermeria 1 - Sede Rancagua');
    pausaVideo();
}
function ranEnfermeria2(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_enferm2.jpg');
    //aText.setAttribute('value','Taller Enfermeria 2 - Sede Rancagua');
    pausaVideo();
}
function ranGastro(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_gast.jpg');
    //aText.setAttribute('value','Taller Gastronomia - Sede Rancagua');
    pausaVideo();
}
function ranMasot(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_masot.jpg');
    //aText.setAttribute('value','Taller Masoterapia - Sede Rancagua');
    pausaVideo();
}
function ranMecan1(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_mecan_1.jpg');
    //aText.setAttribute('value','Taller Mecanica 1 - Sede Rancagua');
    pausaVideo();
}
function ranMecan2(){
    aScene.style.display = "block";
    document.getElementById("video").style.display = "none";
    aSky.setAttribute('src', 'img/sedes/rancagua/ran_mecan_2.jpg');
    //aText.setAttribute('value','Taller Mecanica 2 - Sede Rancagua');
    pausaVideo();
}
function recorridoRancagua(){
    document.getElementById("video").style.display = "flex";
    aScene.style.display = "none";
    document.getElementById("map-sedes").style.display = "none";
    document.getElementById("sidebar-menu").classList.toggle('close');
    document.querySelector('video').setAttribute('src', 'https://griveran.cl/proyecto_360/videos/sede-rancagua.mp4');
    document.querySelector('video').play();
}

//Precarga de archivos
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    //Santiago
    "img/sedes/republica/clinica-odontologica-1.jpg",
    "img/sedes/republica/clinica-odontologica-2.jpg",
    "img/sedes/republica/estudio-grabacion-sonido.jpg",
    "img/sedes/republica/estudio-postproduccion-sonido.jpg",
    "img/sedes/republica/gimnasio-terapeutico.jpg",
    "img/sedes/republica/laboratorio-consulta-nutricional.jpg",
    "img/sedes/republica/laboratorio-grafica-computacional.jpg",
    "img/sedes/republica/laboratorio-postproduccion-audiovisual.jpg",
    "img/sedes/republica/laboratorio-voz.jpg",
    "img/sedes/republica/sala-audiometria.jpg",
    "img/sedes/republica/sala-vestibular.jpg",
    "img/sedes/republica/taller-de-dibujo-diseno.jpg",
    "img/sedes/republica/taller-de-prototipo-diseno-2.jpg",
    "img/sedes/republica/taller-de-prototipo-diseno.jpg",
    "img/sedes/republica/taller-electricidad.jpg",
    "img/sedes/republica/taller-habilidades-clinicas-2.jpg",
    "img/sedes/republica/taller-habilidades-clinicas.jpg",
    "img/sedes/republica/taller-kinesiologia.jpg",
    "img/sedes/republica/taller-masoterapia.jpg",
    "img/sedes/republica/taller-odontologia-2.jpg",
    "img/sedes/republica/taller-odontologia.jpg",
    "https://griveran.cl/proyecto_360/videos/sede-republica.mp4",

    
    //Rancagua
    "img/sedes/rancagua/ran_educ.jpg",
    "img/sedes/rancagua/ran_electro.jpg",
    "img/sedes/rancagua/ran_enferm1.jpg",
    "img/sedes/rancagua/ran_enferm2.jpg",
    "img/sedes/rancagua/ran_gast.jpg",
    "img/sedes/rancagua/ran_masot.jpg",
    "img/sedes/rancagua/ran_mecan_1.jpg",
    "img/sedes/rancagua/ran_mecan_2.jpg",
    "https://griveran.cl/proyecto_360/videos/sede-rancagua.mp4"
)
