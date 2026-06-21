// =====================
// SCROLL SUAVE
// =====================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href')
        );

        if(destino){

            destino.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});


// =====================
// MENSAJE DE CARGA
// =====================

window.addEventListener("load", ()=>{

    console.log("Dulce Manía cargado correctamente");

});


// =====================
// WHATSAPP
// =====================

function pedirHelado(sabor){

    const numero = "541134223324";

    const mensaje =
        `Hola Dulce Manía, quiero pedir ${sabor}`;

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
    );

}
document.getElementById("menuNav").style.scrollBehavior = "smooth";
