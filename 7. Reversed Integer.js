let reversed = function (x) {
  const numInString = x.toString();
  let reversed = '';
  for (let i = 0; i < numInString.length; i++) {
    reversed += numInString[numInString.length - 1 - i];
  }
  
  // there is still the '-' left over at the end, but the parseInt ignores it.
  let num = parseInt(reversed);
  if (numInString[0] === '-') {
    num *= -1;
  }

  const max = Math.pow(2, 31);
  if (num > max - 1 || num < -1 * max) {
    return 0;
  }
  return num;
}

console.log(reversed(-123));