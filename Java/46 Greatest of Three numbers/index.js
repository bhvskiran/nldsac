class Solution {
  /**
   * @param {number} num1
   * @param {number} num2
   * @param {number} num3
   * @return {number}
   */
  findGreatest(num1, num2, num3) {
    // Your code goes here
    const res =
      num1 >= num2 && num1 >= num3 ? num1 : num2 >= num3 ? num2 : num3;
    return res;
  }
}
