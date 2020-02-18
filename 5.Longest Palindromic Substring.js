var longestPalindrome = function (s) {
  const firstHalf = [];
  const secondHalf = [];
  let currentLongest = 0;
  let start = 0;
  let next = start + 1;

  while (next < s.length && start <= next) {

    if (s[start] === s[next]) {
      firstHalf.push(s[start]);
      secondHalf.unshift(s[next]);
      start++
    }
    else {
      next++;
    }

    if (start === next) {
      
    }
    
  }

  console.log(`first half = ${firstHalf}`)
  console.log(`second half = ${secondHalf}`)


};

longestPalindrome('aba');