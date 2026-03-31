function integerSort(inputArray: number[]): number[] {
  // Caso base de la recursividad: si el arreglo tiene 1 o 0 elementos, ya está ordenado.
  // Al devolver un slice, aseguramos que siempre se retorne una nueva referencia (inmutabilidad).
  if (inputArray.length <= 1) {
      return inputArray.slice();
  }

  // DIVIDIR: Encontramos la mitad y partimos el arreglo en dos
  const middle = Math.floor(inputArray.length / 2);
  const leftSide = inputArray.slice(0, middle);
  const rightSide = inputArray.slice(middle);

  // Llamadas recursivas para seguir dividiendo
  const sortedLeft = integerSort(leftSide);
  const sortedRight = integerSort(rightSide);

  // VENCER: Mezclamos las mitades ordenadas
  return merge(sortedLeft, sortedRight);
}

// Función auxiliar para combinar dos arreglos ordenados
function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let indexLeft = 0;
  let indexRight = 0;

  // Comparamos los elementos de ambos arreglos y los insertamos en orden
  while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
          result.push(left[indexLeft]);
          indexLeft++;
      } else {
          result.push(right[indexRight]);
          indexRight++;
      }
  }

  // Si sobraron elementos en alguno de los arreglos los concatenamos al final
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const originalArray = [5, -2, 10, 0, 3, -7];
const sortedArray = integerSort(originalArray);

console.log(sortedArray); 
console.log(originalArray); 