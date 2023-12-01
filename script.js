document.addEventListener('DOMContentLoaded', function() {

var boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    
    var textoExtraido = document.getElementById('POKEMON').value;
    fetch('https://pokeapi.co/api/v2/pokemon/' + textoExtraido)
      .then(response => {
        if (!response.ok) {
          alert('Respuesta incorrecta');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.name);
    })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
    });
});