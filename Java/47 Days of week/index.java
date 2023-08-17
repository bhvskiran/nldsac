class Solution {
	public String daysOfWeek(int num) {
		// Your code goes here
        if (num == 1) {
			return "Monday";
        }
		else if (num == 2) {
			return "Tuesday";
        }
		else if (num == 3){
			return "Wednesday";
		}else if (num == 4){
			return "Thursday";
        }
		else if (num == 5){
			return "Friday";
        }
		else if (num == 6){
			return "Saturday";
        }
		else if (num == 7) {
			return "Sunday";
        }
		else {
			return "Invalid Input";
        }
	}
}