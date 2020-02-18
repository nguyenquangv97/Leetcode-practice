/**
 * @param {string} str
 * @return {number}
 */

// ----------- slow ------------

// var myAtoi = function(str) {
//   if (!str)
//     return 0;

//   let sign = '+';

//   str = str.trim();

//   console.log(str);
//   let i = 0;

//   if (str[0] === '-') {
//     sign = '-';
//     i++;
//   }
//   else if (str[0] === '+') {
//     sign = '+';
//     i++
//   }

//   let result = 0;
//   // this loops checks if the value at i is digit
//   while (i < str.length && str[i] >= '0' && str[i] <= '9') {
//     result = result * 10 + (str[i] - '0');
//     i++;
//   }
//   if (sign === '-')
//     result = -result;
//   if (result > Math.pow(2, 31) - 1)
//     return Math.pow(2, 31) - 1;
//   if (result < Math.pow(-2, 31))
//     return Math.pow(-2, 31);

//   return parseInt(result);

// };

// ------------ fast --------------

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let num = parseInt(str);
      
      if(!num) {
          return 0;
      } else if (Math.abs(num) > Math.pow(2, 31) - 1) {
          return (num > 0) ? (Math.pow(2, 31) - 1) : -Math.pow(2, 31);
      } else {
          return num;
      }
  };

console.log(myAtoi('11 reasdf'));
