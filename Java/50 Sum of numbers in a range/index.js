class Solution {
  /**
   * @param {number[]} interval
   * @return {number}
   */
  sum_of_numbers_in_range(interval) {
    // Your code goes here
    let sum = 0;
    for (let i = interval[0]; i <= interval[1]; i++) {
      sum += i;
    }
    return sum;
  }
}
