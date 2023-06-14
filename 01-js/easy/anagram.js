/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
      return false;
  }

  var frequency = new Array(26).fill(0);
  var str11 = str1.toLowerCase();
  var str22 = str2.toLowerCase();

  for(let i = 0; i < str1.length; i++){
      frequency[str11.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      frequency[str22.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for(let i = 0 ; i < 26; i++){
      if(frequency[i] !== 0)
      return false;
  }
  return true;
}

console.log(isAnagram("raae","care"));

module.exports = isAnagram;
