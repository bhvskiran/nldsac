class Solution {
	public int[] fourOperations(int a, int b) {
		// Your code goes here
        int[] arr = {a+b, a-b, a*b, (int)Math.floor(a/b)};
        return arr;
	}
}