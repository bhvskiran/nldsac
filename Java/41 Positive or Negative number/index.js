class Solution {
  /**
   * @param {number} number
   * @return {string}
   */
  CheckPositiveOrNegative(number) {
    // Your code goes here
    if (number > 0) {
      return "positive";
    } else if (number < 0) {
      return "negative";
    } else {
      return "zero";
    }
  }
}
