const navTabs = document.querySelectorAll('.btabbar-item');
const navContent = document.querySelectorAll('.items');
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
        }else if (navTab.id == "favorite"){
            titulo = "Favoritos";
        }else if( navTab.id == "account"){
            titulo = "Iniciar sesión";
        }else if(navTab.id == "register"){
            titulo = "Registrarse";
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