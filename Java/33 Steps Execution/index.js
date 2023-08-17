class Solution {
  /**
   * @param {number} number
   * @return {number}
   */
  finalResult(number) {
    // Your code goes here
    const result = (Math.floor((number + 8) / 3) % 5) * 5;
    return result;
  }
}
