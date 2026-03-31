function isPalindrome(inputStr: string): boolean {
  // Definición de la función según los requerimientos
  
  // Inicializamos los dos punteros
  let left = 0;
  let right = inputStr.length - 1;

  // Mientras los punteros no se crucen
  while (left < right) {
      // Si los caracteres son diferentes, devolvemos false inmediatamente
      if (inputStr[left] !== inputStr[right]) {
          return false;
      }
      // Movemos los punteros hacia el centro
      left++;
      right--;
  }

  // Si el ciclo termina sin encontrar diferencias, es un palindromo
  return true;
}

console.log(isPalindrome("aabaa")); 
console.log(isPalindrome("abac")); 
console.log(isPalindrome("salas")); 