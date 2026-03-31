function digitsSum(inputInt: number | string): number {
  // 1. Normalización de datos: aseguramos que trabajamos con un número entero absoluto
  let num = Math.abs(Number(inputInt));
  
  // 2. Manejo de errores defensivo
  if (isNaN(num)) {
      throw new Error("El valor proporcionado no es un número válido.");
  }

  let sum = 0;

  // 3. Aplicación del principio matemático
  while (num > 0) {
      // Extraemos el último dígito
      sum += num % 10; 
      // Eliminamos el último dígito del número original
      num = Math.floor(num / 10); 
  }

  return sum;
}

console.log(digitsSum("999"));
console.log(digitsSum("9184501"));
console.log(digitsSum(12345));