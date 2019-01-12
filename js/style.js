//cambiar de color el nombre de la empresa
var logo = document.getElementById("Logo");
logo.addEventListener("onmouseover", nColor);
logo.addEventListener("onmouseout", vColor);

function nColor() {
  // document.getElementById("nombre-empresa").style.fontSize='3.5em';
  document.getElementById("nombre-empresa").style.color = 'rgb(255, 255, 255)';
}

function vColor() {
  // document.getElementById("nombre-empresa").style.fontSize='3em';
  document.getElementById("nombre-empresa").style.color = '';
}
// Aumenta Imagen del index seccion nosotros
var imagen = document.getElementById("nosotros");
imagen.addEventListener("onmouseover", maxImg);
imagen.addEventListener("onmouseout", minImg);

function maxImg() {
  document.getElementById("titulo").style.color = 'rgb(198, 198, 198)';
  document.getElementById("imagen").style.width = '210px';
  document.getElementById("mensaje").style.display = '';
}

function minImg() {
  document.getElementById("titulo").style.color = '';
  document.getElementById("imagen").style.width = '';
  document.getElementById("mensaje").style.display = 'none';
}
//Seccio de contactanos
var contactanos = document.getElementById("contactanos");
contactanos.addEventListener("onmouseover", newColor);
contactanos.addEventListener("onmouseout", oldColor);

function newColor() {
  document.getElementById("titulo_2").style.color = 'rgb(103, 70, 67)';
}

function oldColor() {
  document.getElementById("titulo_2").style.color = '';
}


// Ttulo y contenido de Servicios en Index
var servicio1 = document.getElementById("servicio");
servicio1.addEventListener("onmouseover", serMostrar1);
servicio1.addEventListener("onmouseout", serOcultar1);

function serMostrar1() {
  // Servicio 1
  // document.getElementById("ensamble").style.opacity = '0.4';
  document.getElementById("t1").style.display = '';
  document.getElementById("m1").style.display = '';
}

function serOcultar1() {
  // Servicio 1
  // document.getElementById("ensamble").style.opacity = '';
  document.getElementById("t1").style.display = 'none';
  document.getElementById("m1").style.display = 'none';
}
// Servicio 2
var servicio2 = document.getElementById("servicio");
servicio2.addEventListener("onmouseover", serMostrar2);
servicio2.addEventListener("onmouseout", serOcultar2);

function serMostrar2() {
  // Servicio 2
  // document.getElementById("reparacion").style.opacity = '0.4';
  document.getElementById("t2").style.display = '';
  document.getElementById("m2").style.display = '';
}

function serOcultar2() {
  // Servicio 2
  document.getElementById("reparacion").style.opacity = '';
  document.getElementById("t2").style.display = 'none';
  document.getElementById("m2").style.display = 'none';
}
// Servicio 3
var servicio3 = document.getElementById("servicio");
servicio3.addEventListener("onmouseover", serMostrar3);
servicio3.addEventListener("onmouseout", serOcultar3);

function serMostrar3() {
  // Servicio 3
  // document.getElementById("configuracion").style.opacity = '0.4';
  document.getElementById("t3").style.display = '';
  document.getElementById("m3").style.display = '';
}

function serOcultar3() {
  // Servicio 3
  // document.getElementById("configuracion").style.opacity = '';
  document.getElementById("t3").style.display = 'none';
  document.getElementById("m3").style.display = 'none';
}
