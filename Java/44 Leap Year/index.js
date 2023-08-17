class Solution {
  /**
   * @param {number} year
   * @return {boolean}
   */
  leapyear(year) {
    // Your code goes here
    // if (year % 4 == 0 and year % 100 != 0) or (year % 100 == 0 and year % 400 == 0):
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
