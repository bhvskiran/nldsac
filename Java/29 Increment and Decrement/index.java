// method1 - 
class Solution {
	public int[] XandY(int X, int Y) {
		// Your code goes here
        int[] arr = {--X, ++Y};
        return arr;
	}
}

// method2 - 
class Solution {
	public int[] XandY(int X, int Y) {
		// Your code goes here
        int[] arr = new int[2];
        X--;
        Y++;
        arr[0] = X;
        arr[1] = Y;
        return arr;
	}
}

// method3 -
class Solution {
	public int[] XandY(int X, int Y) {
		// Your code goes here
        X--;
        Y++;
        int[] a = {X,Y};
        return a;
	}
}