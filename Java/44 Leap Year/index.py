class Solution:
	def leapyear(self, year: int) -> bool:
		# Your code goes here
			if (year % 4 == 0 and year % 100 != 0) or (year % 100 == 0 and year % 400 == 0):
				return True
			else:
				return False

