class Solution {
  /**
   * @param {number} fact
   * @return {number}
   */
  factorial(fact) {
    // Your code goes here
    let product = 1;
    for (let i = 1; i <= fact; i++) {
      product *= i;
    }
    return product;
  }
}
