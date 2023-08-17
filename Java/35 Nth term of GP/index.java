class Solution {
	public int Nth_of_GP(int a, int r, int N) {
		// Your code goes here
        return a * (int)Math.pow(r, N-1);
	}
}