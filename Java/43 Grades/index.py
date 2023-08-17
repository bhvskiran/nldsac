class Solution:
	def grades(self, marks: List[float]) -> str:
		# Your code goes here
			total = 0
			for i in marks:
				total += i
			avg = total/len(marks)
			if avg >= 80:
				return "A"
			elif avg >= 60:
				return "B"
			elif avg >= 40:
				return "C"
			else:
				return "D"
