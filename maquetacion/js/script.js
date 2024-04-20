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
    const passwordError = document.getElementById('password-error');
    const repasswordError = document.getElementById('repassword-error');
    let valid = true;

    if (nombre.length < 4) {
        e_nombre.textContent = 'El nombre de usuario debe tener al menos 4 caracteres.';
        valid = false;
      } else {
        e_nombre.textContent = '';
      }

      //Verificar requisitos de rut
    var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut : function (Rut) {
           if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rut)){
                rutError.textContent = 'El rut solo puede tener números y puede finalizar en -k.';
                valid = false;
            }    
            var tmp 	= rut.split('-');
            var digv	= tmp[1]; 
            var rut 	= tmp[0];
            if ( digv == 'K' ) digv = 'k' ;
                return (Fn.dv(rut) == digv );
            },
            dv : function(T){
                var M=0,S=1;
                for(;T;T=Math.floor(T/10))
                    S=(S+T%10*(9-M++%6))%11;
                return S?S-1:'k';
            }
        }

        // Uso de la función
    alert( Fn.validaRut('11111111-1') ? 'Valido' : 'inválido');



         // Verificar requisitos de la contraseña
    if (password.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }
  
          // Verificar requisitos de la contraseña
      if (repassword.length < 6) {
        repasswordError.textContent = 'La confirmarción de contraseña debe tener al menos 6 caracteres.';
        valid = false;
      } else {
        repasswordError.textContent = '';
      }
  
      if(repassword != password){
          passwordError.textContent = 'La contraseña debe ser igual a la confirmación de constraseña.';
          repasswordError.textContent = 'La confirmación de contraseña debe ser igual a la constraseña.';
          valid = false;
      } else {
          passwordError.textContent = '';
          repasswordError.textContent = '';
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

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aquí se puede agregar la lógica de verificación del nombre de usuario y contraseña
    // Por ejemplo, se puede comparar con valores predefinidos o enviar una solicitud a un servidor para verificar las credenciales
    
    // Imprime credenciales para demostración
    console.log("Nombre de usuario: " + username);
    console.log("Contraseña: " + password);
  }

  function register() {
    // Aquí se puede agregar la lógica de verificación 
  }

  function donate() {
    // Aquí se puede agregar la lógica de verificación 
  }
  //-------------------------------------

  //document.getElementById('inicioSesion').addEventListener('submit', function(event) {
    //event.preventDefault(); 

    //if (validarFormulario()) {
    //    this.submit(); 
    //}



//});

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



  

