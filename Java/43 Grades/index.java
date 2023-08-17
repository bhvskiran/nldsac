class Solution {
	public char grades(double[] marks) {
		// Your code goes here
        double total = 0;
        for (int i = 0; i < marks.length; i++) {
            total += marks[i];
        }
        int avg = (int)total / marks.length;
        char res = avg >= 80 ? 'A' : avg >= 60 ? 'B' : avg >= 40 ? 'C' : 'D';
        return res;
	}
}