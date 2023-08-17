class Solution {
  /**
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {number}
   */
  DistanceBwPoint(x1, y1, x2, y2) {
    // Your code goes here
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
  }
}
