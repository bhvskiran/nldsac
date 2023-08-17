class Solution:
	def factorial(self, fact: int) -> int:
		# Your code goes here
			product = 1
			for i in range(1, fact + 1):
				product *= i
			return product
