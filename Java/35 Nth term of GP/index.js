class Solution {
  /**
   * @param {number} a
   * @param {number} r
   * @param {number} N
   * @return {number}
   */
  Nth_of_GP(a, r, N) {
    // Your code goes here
    //  nth term = a * r ^ (n-1)
    return a * r ** (N - 1);
  }
}
