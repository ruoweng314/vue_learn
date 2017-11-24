denum = input('请输入十进制数')
binnum = []


while denum>0:
	binnum.append(int(denum%2))
	denum //=2
print ('=')
while len(binnum)>0:
	import sys
	sys.stdout.write(binnum.pop())


