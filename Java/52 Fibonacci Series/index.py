class Solution:
	def fibonacci(self, n: int) -> List[int]:
		# Your code goes here
			req = [0,1]
			a = 0
			while len(req) < n:
				b = req[a] + req[a+1]
				req.append(b)
				a += 1
			return req
