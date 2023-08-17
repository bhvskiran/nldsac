class Solution:
	def sum_of_numbers_in_range(self, interval: List[int]) -> int:
		# Your code goes here
            total = 0
            for i in range(interval[0], interval[1] + 1):
                total += i
            return total
