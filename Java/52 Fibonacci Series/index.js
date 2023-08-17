class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  fibonacci(n) {
    // Your code goes here
    const arr = [0, 1];
    let a = 0;
    while (arr.length < n) {
      arr.push(arr[a] + arr[a + 1]);
      a++;
    }
    return arr;
  }
}
