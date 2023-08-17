class Solution {
	public double convertFahrenheitToCelsius(double tempF) {
		// Your code goes here
		double tempC = (tempF - 32) * (5.0/9.0);
		return tempC;
	}
}