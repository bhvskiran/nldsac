class Solution {
	public int sum_of_numbers_in_range(int[] interval) {
		// Your code goes here
        int sum = 0;
        for (int i = interval[0]; i <= interval[1]; i++) {
            sum += i;
        }
        return sum;
	}
}