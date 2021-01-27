var form = document.getElementById("input-group");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('onclick', handleForm);

var botongaleria = document.querySelector("#fruticas");
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








