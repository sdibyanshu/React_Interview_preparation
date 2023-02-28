import React, { useState } from 'react';

function PalindromeFinder() {
  const [palindromes, setPalindromes] = useState([]);

  const findPalindromes = () => {
    let palindromes = [];
    for (let i = 100; i <= 1000; i++) {
      if (isPalindrome(i)) {
        palindromes.push(i);
      }
    }
    setPalindromes(palindromes);
  };

  const isPalindrome = (num) => {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  return (
    <div>
      <button onClick={findPalindromes}>Find Palindromes</button>
      <ul>
        {palindromes.map((num) => (
          <li key={num}>  {num}  </li>
        ))}
      </ul>
    </div>
  );
}

export default PalindromeFinder;
