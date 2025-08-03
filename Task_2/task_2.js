function sumTwoLargest(arr) {
  // Validation
  if (
    !Array.isArray(arr) ||
    arr.length < 2 ||
    !arr.every(item => typeof item === 'number' && Number.isInteger(item))
  ) {
    return 'Expect an integer array of at least two integers!';
  }

  // Find the two largest
  let max1 = -Infinity, max2 = -Infinity;
  for (const n of arr) {
    if (n > max1) {
      max2 = max1;
      max1 = n;
    } else if (n > max2) {
      max2 = n;
    }
  }

  return max1 + max2;
}

// const input = [1, 4, 2, 3, 5];
// console.log(sumTwoLargest(input));

export { sumTwoLargest };