class Solution {
	public double DistanceBwPoint(double x1, double y1, double x2, double y2) {
		// Your code goes here
        double result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return result;
	}
}