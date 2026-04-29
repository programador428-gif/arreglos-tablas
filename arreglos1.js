let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad() {
  let input = document.getElementById("edad");
  let edad = parseInt(input.value);

  if (!isNaN(edad)) {
    edadesIzquierda.push(edad);
    input.value = "";
    pintarArregloIzquierdo();
  } else {
    alert('Por favor ingrese un numero valido');
  }
}

// Funciones para pintar
function pintarArregloIzquierdo() {
  let tbody = document.getElementById('tablaIzquierda');
  let contenidoTabla = '';

  for (let i = 0; i < edadesIzquierda.length; i++) {
    contenidoTabla += `
      <tr>
        <td>${edadesIzquierda[i]}</td>
        <td>
          <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button>
        </td>
        <td>
          <button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button>
        </td>
      </tr>
    `;
  }
  tbody.innerHTML = contenidoTabla;
}

function pintarArregloDerecha() {
  let tbody = document.getElementById('tablaDerecha');
  let contenidoTabla = '';

  for (let i = 0; i < edadesDerecha.length; i++) {
    contenidoTabla += `
      <tr>
        <td>
          <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button>
        </td>
        <td>${edadesDerecha[i]}</td>
        <td>
          <button class="btn-eliminar" onclick="eliminarDerecha(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  }
  tbody.innerHTML = contenidoTabla;
}

// Funciones para eliminar
function eliminarIzquierdo(indice) {
  edadesIzquierda.splice(indice, 1);
  pintarArregloIzquierdo();
}

function eliminarDerecha(indice) {
  edadesDerecha.splice(indice, 1);
  pintarArregloDerecha();
}

// Funciones para mover
function moverHaciaDerecha(indice) {
  let edad = edadesIzquierda[indice];
  edadesDerecha.push(edad);
  edadesIzquierda.splice(indice, 1);
  pintarArregloIzquierdo();
  pintarArregloDerecha();
}

function moverHaciaIzquierda(indice) {
  let edad = edadesDerecha[indice];
  edadesIzquierda.push(edad);
  edadesDerecha.splice(indice, 1);
  pintarArregloIzquierdo();
  pintarArregloDerecha();
}

// Funcion para eliminar tabla
function limpiarTablas() {
  edadesIzquierda = [];
  edadesDerecha = [];
  pintarArregloIzquierdo();
  pintarArregloDerecha();
}