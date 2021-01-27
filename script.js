




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


function login(usuario,contra)
{
    if(localStorage.getItem(usuario)==contra){
      alert("Has iniciado sesion");
    }else{
      alert("Contresena equivocada o usuario incorrecto")
        }       
    }


function recordar(usuario, correo){
  if(localStorage.getItem(correo) == usuario){

    alert("Su contrasena es :" + localStorage.getItem(usuario));
  }else{

    alert("El correo o el usuario no existen, revise lo que escribio");
  }
}








