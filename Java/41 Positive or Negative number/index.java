class Solution {
	public String CheckPositiveOrNegative(int number) {
		// Your code goes here
        String result = number > 0 ? "positive" : (number < 0 ? "negative" : "zero");
        return result;
	}
}