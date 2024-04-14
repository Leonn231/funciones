// Inician las salas con 10 asientos cada una, todos disponibles (false)
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

// Definimos el costo de cada boleta
const costoBoleta = 10; // Puedes cambiar este valor al costo que desees

// Inicia el balance de cada sala
let balanceSala1 = 0;
let balanceSala2 = 0;

// Función para ver la disponibilidad de asientos en cada sala
function verDisponibilidad() {
  // Mostramos los asientos de la sala 1
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  
  // Mostramos los asientos de la sala 2
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// Función para reservar un asiento en una sala
function reservarAsiento() {
  // Pedimos al usuario que ingrese la sala y el asiento que desea reservar
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  // Verificamos si el asiento está disponible y lo reservamos si es así
  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    balanceSala1 += costoBoleta;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado. Costo: $${costoBoleta}`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    balanceSala2 += costoBoleta;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado. Costo: $${costoBoleta}`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

// Función para ver la ocupación de una sala
function verPelicula() {
  // Pedimos al usuario que ingrese la sala que desea ver
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  
  // Calculamos los asientos libres en la sala seleccionada
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  // Si hay asientos libres, informamos al usuario. Si no, le decimos que todos los asientos están reservados.
  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfruta mucho de la peli!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// Función para ver el balance de cada sala y el total
function verBalance() {
  // Mostramos el balance de cada sala y el total
  alert(`Balance Sala 1: $${balanceSala1}`);
  alert(`Balance Sala 2: $${balanceSala2}`);
  alert(`Balance Total: $${balanceSala1 + balanceSala2}`);
}

// Bucle principal del programa
while (true) {
  // Pedimos al usuario que elija una opción
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Ver balance" + " 5. Salir" );

  // Ejecutamos la opción elegida por el usuario
  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
