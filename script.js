

window.onload = onloadfunc();
//Funcion para registrasrse en el localstorage
function register(usuario,correo,contra,nombre)
{
    if(localStorage.getItem(correo) == null&&correo!=""&&usuario!=""&&contra!=""&&nombre!="")
    {
        localStorage.setItem(nombre,correo);
        localStorage.setItem(correo,usuario);
        localStorage.setItem(usuario,contra)
        alert("Registro exitoso");
    }
    else{
        alert("Usuario ya existe")
    }
  }

//Funcion para hacer login al usuario y redirecionar
function login(usuario,contra)
{
    if(localStorage.getItem(usuario)==contra){
      alert("Has iniciado sesion");
      window.open("index.html");
    }else{
      alert("Contresena equivocada o usuario incorrecto")
        }       
    }

//Funcion del localstorage para acordar contresena
function recordar(usuario, correo){
  if(localStorage.getItem(correo) == usuario){

    alert("Su contrasena es :" + localStorage.getItem(usuario));
  }else{

    alert("El correo o el usuario no existen, revise lo que escribio");
  }
}

//Animacion de login-registro


function registro(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";  
}

function loginanimation(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";  
}


function onloadfunc (){
var x = document.getElementById("login");
var y = document.getElementById("registro");
var z  = document.getElementById("btn");
}









