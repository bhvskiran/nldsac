class Solution:
	def findGreatest(self, num1: int, num2: int, num3: int) -> int:
		# Your code goes here
			if num1 >= num2 and num1 >= num3:
				return num1
			elif num2 >= num3:
				return num2
			else:
				return num3
