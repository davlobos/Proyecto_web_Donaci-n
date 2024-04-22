const navTabs = document.querySelectorAll('.btabbar-item');
const navContent = document.querySelectorAll('.items');
const scroll = document.querySelector('.scroll');
// register button
const tab = document.querySelector('.registerb');
// info button
const tab2s = document.querySelectorAll('.infob');

document.addEventListener("DOMContentLoaded", function() {
    var startElement = document.querySelector(".start");
    startElement.style.visibility = "visible";
});


// detecta si se presiono "ver mas informacion"
tab2s.forEach(tab2 => {
    tab2.addEventListener('click', () => {
        var items = document.getElementsByClassName("items");
        for (var i = 0; i < items.length; i++) {
                items[i].style.visibility = "hidden";
        }
        for (var i = 0; i < items.length; i++) {
            if (navContent[i].classList.contains("campaign")){
                items[i].style.visibility = "visible";
            }
        }
    titulo = "Campaña";
    document.getElementById("id01").innerHTML = titulo;
});
});

// detecta si se presiono el boton para crearse una nueva cuenta
tab.addEventListener('click', () => {
    var items = document.getElementsByClassName("items");
    for (var i = 0; i < items.length; i++) {
            items[i].style.visibility = "hidden";            
    }
    for (var i = 0; i < items.length; i++) {
        if (navContent[i].classList.contains("register")){
            items[i].style.visibility = "visible";
        }
    }
    titulo = "Registro";
    document.getElementById("id01").innerHTML = titulo;
});


function validarcontra(password) {
    // Expresión regular para verificar al menos una mayúscula y al menos un número
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return regex.test(password);
}

// Agregar el evento al formulario de registro
document.getElementById('registro').addEventListener('submit', function(event) {
    // Evitar la acción predeterminada del formulario (enviar datos y recargar la página)
    event.preventDefault();
    const nombre= document.getElementById('username').value;
    const e_nombre= document.getElementById('user-error');
    const rut = document.getElementById('Rut').value;
    const password = document.getElementById('contrasena').value;
    const repassword = document.getElementById('recontraseña').value;
    const rutError = document.getElementById('Rut-error');
    const repasswordError = document.getElementById('repassword-error');
    let valid = true;

    if (nombre.length < 4) {
        e_nombre.textContent = 'El nombre de usuario debe tener al menos 4 caracteres.';
        valid = false;
      } else {
        e_nombre.textContent = '';
      }
    
    console.log("entrando a rut ");
    if (!/^(\d{1,2}(?:[\.]?\d{3}){2}-[\dkK])$/.test(rut)) {
        console.log("estas dentro del rut")
        if (rutError) {
            console.log("Esta mal el rut")
            rutError.textContent = 'El RUT ingresado no es válido, debe ingresar en formato XXXXXX-X';
        }
        valid = false;
    } else {
        console.log("estas saliendo bien")
        if (rutError) {
            rutError.textContent = '';
        }
    }
    
    console.log("saliste de rut ");     
        //verificar requisitos contraseñas

    if(repassword != password){
        repasswordError.textContent = 'La confirmación de contraseña debe ser igual a la constraseña.';
    }else if(password.length < 6){
        repasswordError.textContent= 'La contraseña debe ser mas larga que 6 caracteres.';
    }else if(!validarcontra(password)){
        repasswordError.textContent= 'La contraseña debe tener almenos una mayuscula y un digito.';
    }else{
        repasswordError.textContent= '';
    }
    
});

// detecta si se presionaron los botones de la barra inferior y hace los cambios graficos y de contenido correspondientes
navTabs.forEach(navTab => {
    navTab.addEventListener('click', () => {
        console.log(navTab.id);
        document.querySelector('.active')?.classList.remove('active');
        navTab.classList.add('active');

        var items = document.getElementsByClassName("items");
        for (var i = 0; i < items.length; i++) {
                items[i].style.visibility = "hidden";            
        }
        for (var i = 0; i < items.length; i++) {
            if (navContent[i].classList.contains(navTab.id)){
                items[i].style.visibility = "visible";
            }
        }
        if(navTab.id == "start"){
            titulo = "Inicio";
            scroll.style.overflowY = "scroll";
        }else if (navTab.id == "favorite"){
            titulo = "Favoritos";
            scroll.style.overflowY = "scroll";
        }else if( navTab.id == "account"){
            titulo = "Iniciar sesión";
            scroll.style.overflowY = "hidden";
        }else if(navTab.id == "register"){
            titulo = "Registrarse";
            scroll.style.overflowY = "hidden";
        }
        document.getElementById("id01").innerHTML = titulo;
    });
});


document.getElementById('inicioSesion').addEventListener('submit', function(event) {
    const username = document.getElementById('nombre').value;
    const password = document.getElementById('contra').value;
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    let valid = true;
  
    // Verificar requisitos del nombre de usuario
    if (username.length < 4) {
      usernameError.textContent = 'El nombre de usuario debe tener al menos 4 caracteres.';
      valid = false;
    } else {
      usernameError.textContent = '';
    }
  
    // Verificar requisitos de la contraseña
    if (password.length < 6) {
      passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
      valid = false;
    } else {
      passwordError.textContent = '';
    }
  
    // Evitar que se envíe el formulario si no es válido
    if (!valid) {
      event.preventDefault();
    }
  });



  

