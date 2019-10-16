var lengthOfLongestSubstring = function(s) {
	if (s.length === 0 || s === null) {
		return 0;
	}
	const map = new Map();
	let left = 0;
	let right = 0;
	let count = 0;
	while (right < s.length) {
		if (map.has(s.charAt(right))) {
			map.delete(s.charAt(left++));
		} else {
			map.set(s.charAt(right), right);
			right++;
			count = Math.max(count, right - left);
		}
	}
	return count;
};

console.log(lengthOfLongestSubstring('abcab'));
