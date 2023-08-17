class Solution {
  /**
   * @param {number[]} marks
   * @return {string}
   */
  grades(marks) {
    // Your code goes here
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    const avg = total / marks.length;
    const res = avg >= 80 ? "A" : avg >= 60 ? "B" : avg >= 40 ? "C" : "D";
    return res;
  }
}
