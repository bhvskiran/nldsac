class Solution {
	public int[] fibonacci(int n) {
		// Your code goes here
        int[] arr = new int[n];
        arr[0] = 0;
        arr[1] = 1;
        int a = 0;
        for (int i = 2; i < n; i++) {
            arr[i] = arr[a] + arr[a+1];
            a++;
        }
        return arr;
	}
}