function getMostFrequentStringLengths(arr) {
  // Validate input
  if (!Array.isArray(arr)) {
    return 'Expect an input array of strings!';
  }
  if (!arr.every(item => typeof item === 'string')) {
    return 'All elements in the array must be strings!';
  }

  // Empty array case
  if (arr.length === 0) {
    return [];
  }

  // Frequency map
  const freq = {};
  for (const s of arr) {
    const len = s.length;
    freq[len] = (freq[len] || 0) + 1;
  }

  // Find the highest frequency
  const maxCount = Math.max(...Object.values(freq));

  // Gather all max lengths
  const modalLengths = new Set(
    Object.entries(freq)
          .filter(([, count]) => count === maxCount)
          .map(([len]) => Number(len))
  );

  // Return the strings whose length is one of those modal lengths
  return arr.filter(s => modalLengths.has(s.length));
}

// const input = 	['a', 'ab', 'abc', 'cd', 'def', 'gh'] ;
// console.log(getMostFrequentStringLengths(input));

export { getMostFrequentStringLengths };

