//Codigo para mostras/ocultar el contenido segun la opcion elegida en la cabecera
document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll('nav a').forEach(function(link){
        link.addEventListener('click', function(e){
            console.log("mostrar");
            e.preventDefault();
            const etiqueta = this.getAttribute('href').substring(1);
            document.querySelectorAll('.contenido').forEach(function(content){
                content.style.display = 'none';
            });
            document.getElementById(etiqueta).style.display = 'block';
        });
    });
});

