const navTabs = document.querySelectorAll('.btabbar-item');
const navContent = document.querySelectorAll('.items');

document.addEventListener("DOMContentLoaded", function() {
    // Get the element with class "start"
    var startElement = document.querySelector(".start");
    // Make the element visible
    startElement.style.visibility = "visible";
});

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
            titulo = "Cuenta";
        }else if(navTab.id == "register"){
            titulo = "Registrarse";
        }
        document.getElementById("id01").innerHTML = titulo;
    });
});

