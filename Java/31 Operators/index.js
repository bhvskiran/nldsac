class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number[]}
   */
  fourOperations(a, b) {
    // Your code goes here
    const arr = [a + b, a - b, a * b, Math.floor(a / b)];
    return arr;
  }
}
