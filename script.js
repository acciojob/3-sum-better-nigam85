//function threeSum(arr, target) {
// write your code here
	function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  // Initialize variables for closest sum and difference
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through the array with the first pointer
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1; // Second pointer starts from next element
    let right = S.length - 1; // Third pointer starts from the end

    // Use two-pointer approach to find closest sum
    while (left < right) {
      const sum = S[i] + S[left] + S[right];
      const diff = Math.abs(sum - target);

      // Check if the current sum is closer to the target
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      // Move the pointers based on the sum
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  // Return the closest sum
  return closestSum;
}

  
}

module.exports = threeSum;
