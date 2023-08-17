class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @return {number}
   */
  percentage(a, b, c, d) {
    // Your code goes here
    const total = a + b + c + d;
    const avg = total / (4 * 100);
    const perc = avg * 100;
    return perc;
  }
}
