// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// let longestCommonPrefix = function (strs) {
//   if (strs.length < 1) return '';
//   if(strs.length === 1) { return strs[0] }
//   if (!strs[0]) return '';
//   let word = strs[0];
//   let returnedArray = []
//   for (let letter = 0; letter < word.length; letter++) {
//     for (let index = 1; index < strs.length; index++) {
//       if (word[letter] === strs[index][letter]) {
//         continue;
//       }
//       else
//         return returnedArray.join('');
//     }
//     returnedArray.push(word[letter]);
//   }
//   return returnedArray.join('')
// };

// console.log(longestCommonPrefix(["aa", "ab"]))


// ---------------------------


let longestCommonPrefix = function (strs) {
  let longestCommonPrefix = ''
  if (strs === null || strs.length === 0) {
    return longestCommonPrefix;
  }
  if (strs.length === 1) {
    return strs[0];
  }

  let index = 0;
  for (let character of strs[0]) {
    for (let i = 1; i < strs.length; i++) {
      if (index >= strs[i].length || character !== strs[i][index])
        return longestCommonPrefix;
     
    }
    index += 1;
    longestCommonPrefix = longestCommonPrefix.concat(character);
  }
  return longestCommonPrefix;
}
console.log(longestCommonPrefix(['fl', 'flow', 'flower']))