class Solution {
	public int findGreatest(int num1, int num2, int num3) {
		// Your code goes here
		int res = num1 >= num2 && num1 >= num3 ? num1 : num2 >= num3 ? num2 : num3;
		return res;
	}
}