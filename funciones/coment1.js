// Definición de las denominaciones de billetes disponibles en el cajero automático
const denominations = [50000, 20000, 10000, 5000, 2000, 1000];

// Función para solicitar al usuario la cantidad de dinero que desea retirar
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar?");
  return parseFloat(userInput); // Devuelve la cantidad de dinero ingresada como un número de coma flotante
}

// Función para calcular la cantidad de billetes necesarios para cada denominación
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    // Calcula la cantidad de billetes necesarios para la denominación actual
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination; // Reduce la cantidad restante después de calcular los billetes necesarios
    return billetsNeeded; // Devuelve la cantidad de billetes necesarios para la denominación actual
  });
}

// Función para verificar si la cantidad de dinero solicitada es válida
function isValidWithdrawalAmount(amount) {
  // Verifica si la cantidad es mayor que cero y si es un número entero
  return amount > 0 && amount % 1 === 0;
}

// Función que maneja la transacción completa del cajero automático
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount(); // Obtiene la cantidad de dinero solicitada por el usuario

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    // Verifica si la cantidad ingresada es válida
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount); // Calcula la cantidad de billetes necesarios

  // Muestra una alerta con la cantidad de dinero solicitada y la cantidad de billetes necesarios para cada denominación
  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}

// Llamada a la función iniciar la transacción del cajero automático
ATMTransaction();
