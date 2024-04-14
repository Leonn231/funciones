// Array que contiene los números de las habitaciones disponibles en el hotel.
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];

// Array que representa el estado de ocupación de cada habitación (false = libre, true = ocupada).
const roomStatus = Array(10).fill(false);

// Objeto que almacena las reservas actuales con el número de habitación como clave y el nombre del huésped como valor.
const roomReservations = {};

// Función para reservar una habitación. Requiere el número de habitación y el nombre del huésped.
const reserveRoom = (roomNumber, name) => {
  // Busca el índice de la habitación en el array 'rooms'.
  const index = rooms.indexOf(roomNumber);
  // Si la habitación existe y está libre, realiza la reserva.
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true; // Marca la habitación como ocupada.
    roomReservations[roomNumber] = name; // Almacena la reserva.
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    // Si la habitación no existe o ya está ocupada, muestra un mensaje de error.
    alert(`La habitación ${roomNumber} ya está reservada o no es válida.`);
  }
};

// Función para liberar una habitación. Requiere el número de habitación.
const freeRoom = (roomNumber) => {
  // Busca el índice de la habitación en el array 'rooms'.
  const index = rooms.indexOf(roomNumber);
  // Si la habitación existe y está ocupada, la libera.
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false; // Marca la habitación como libre.
    delete roomReservations[roomNumber]; // Elimina la reserva.
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    // Si la habitación no existe o ya está libre, muestra un mensaje de error.
    alert(`La habitación ${roomNumber} ya está libre o no es válida.`);
  }
};

// Función para mostrar las habitaciones disponibles.
const showAvailableRooms = () => {
  // Filtra y devuelve un array con las habitaciones libres.
  const availableRooms = rooms.filter((room, index) => roomStatus[index] === false);
  // Si hay habitaciones disponibles, muestra sus números.
  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    // Si no hay habitaciones disponibles, muestra un mensaje.
    alert('No hay habitaciones disponibles.');
  }
};

// Función para mostrar la ocupación actual del hotel.
const showOccupancy = () => {
  // Calcula las habitaciones disponibles y reservadas.
  const availableRooms = rooms.filter((room, index) => roomStatus[index] === false);
  const reservedRooms = rooms.filter((room, index) => roomStatus[index] === true);
  // Muestra la cantidad de habitaciones disponibles y reservadas.
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};

// Función principal para manejar la interacción con el usuario a través de un menú de opciones.
const handleUserInput = () => {
  let userInput;
  do {
    // Muestra el menú y solicita una opción al usuario.
    userInput = prompt('Menú \n' +
      '1. Reservar una habitación\n' +
      '2. Liberar una habitación\n' +
      '3. Consultar ocupación\n' +
      '4. Salir');
    // Ejecuta la acción correspondiente a la opción elegida.
    switch (userInput) {
      case '1':
        // Solicita el número de habitación y el nombre del huésped para realizar la reserva.
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        // Solicita el número de habitación para liberarla.
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        // Muestra la ocupación actual del hotel.
        showOccupancy();
        break;
      case '4':
        // Sale del menú.
        alert('Saliendo...');
        break;
      default:
        // Informa al usuario que la opción elegida no es válida.
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4'); // Repite el menú hasta que el usuario elija salir.
};

// Inicia la interacción con el usuario.
handleUserInput();
