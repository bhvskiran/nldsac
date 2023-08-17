class Solution:
	def Nth_of_GP(self, a: int, r: int, N: int) -> int:
		# Your code goes here
            return a * (r ** (N-1))
