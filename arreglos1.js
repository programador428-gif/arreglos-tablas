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

// Funciones para pintar
function pintarArregloIzquierdo() {
  let tbody = document.getElementById('tablaIzquierda');
  let contenidodTabla = '';
  let edadRecuperada;

  for (let i = 0; i < edadesIzquierda.length; i++) {
    edadRecuperada = edadesIzquierda[i];
    contenidodTabla += `
      <tr>
        <td>${edadRecuperada}</td>
        <td>
          <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</ button>
        </td>
        <td>
          <button class="btn-mover" onclick="moverHaciaDerecha(${i}, ${edadRecuperada})">→</button>
        </td>
      </tr>
    `
  }
  tbody.innerHTML = contenidodTabla;
}

function pintarArregloDerecha() {
  let tbody = document.getElementById('tablaDerecha');
  let contenidodTabla = '';
  let edadRecuperada;

  for (let i = 0; i < edadesDerecha.length; i++) {
    edadRecuperada = edadesDerecha[i];
    contenidodTabla += `
      <tr>
        <td>
          <button class="btn-mover" onclick="moverHaciaIzquierda(${i}, ${edadRecuperada})">⬅</button>
        </td>
        <td>
          ${edadRecuperada}
        </td>
        <td>
          <button class="btn-eliminar" onclick="eliminarDerecha(${i})">Eliminar</ button>
        </td>
      </tr>
    `
  }
  tbody.innerHTML = contenidodTabla;
}

// Funciones para eliminar
function eliminarIzquierdo(indice) {
  edadesIzquierda.splice(indice, 1);
  pintarArregloIzquierdo();
}
