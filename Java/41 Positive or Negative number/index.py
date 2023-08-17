class Solution:
	def CheckPositiveOrNegative(self, number: int) -> str:
		# Your code goes here
            if number > 0:
                return "positive"
            elif number < 0:
                return "negative"
            else:
                return "zero"
