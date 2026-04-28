let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad() {
  let edad = parseInt(document.getElementById("edad").value);

  if (!isNaN(edad)) {
    edadesIzquierda.push(edad);
    pintarArregloIzquierdo();
  }
  else {
    alert('Por favor ingrese un numero valido');
    return;
  }
}