class Solution:
	def DistanceBwPoint(self, x1: float, y1: float, x2: float, y2: float) -> float:
		# Your code goes here
            return (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** (1/2)
