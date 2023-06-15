/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const caseStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let start = 0;
  let end = caseStr.length - 1;

  while(start < end)
  {
    if(caseStr[start] !== caseStr[end])
    {
      return false;
    }

    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
