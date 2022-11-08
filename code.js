/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 let nombre = prompt("ingresa tu nombre");
 let edad = prompt("ingresa año de nacimiento");
 let ciudad = prompt("ingresa ciudad de nacimiento");
 let interes= prompt("te interesa javascript");


 datosPersona.nombre=nombre;
 datosPersona.edad= 2022 - edad;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs=interes;
 



}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  let spanNombre= document.getElementById("nombre");
  let spanEdad=document.getElementById("edad");
  let spanCiudad=document.getElementById("ciudad");
  let spanJs=document.getElementById("javascript");
  
  spanNombre.innerHTML=datosPersona.nombre;
  spanEdad.innerHTML=datosPersona.edad;
  spanCiudad.innerHTML=datosPersona.ciudad;
  spanJs.innerHTML=datosPersona.interesPorJs;

}

let contador =0;
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */


 if (contador ==0){


 const materiasContenedor= document.getElementById('fila');

 function crearMateria(materia){


  const article= document.createElement('article');
    const img = document.createElement('img');
   const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    p1.innerText = materia.lenguajes;
    p2.innerText = materia.bimestre;
    img.setAttribute('src', materia.imgUrl);
    img.setAttribute('alt', "materia miniatura");
    article.classList.add('caja');

   article.appendChild(img);
   article.appendChild(p1);  
   article.appendChild(p2);
  
  

   materiasContenedor.appendChild(article);

 }
 listado.forEach(crearMateria);


}
  

contador = 1;


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  console.log(document.querySelector('#sitio').classList.toggle('dark'));



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener('keydown',aparecer => {

  let oculto= document.querySelector('.oculto');

if(aparecer.key=== 'f'){

  oculto.classList.remove('oculto');

}


});


