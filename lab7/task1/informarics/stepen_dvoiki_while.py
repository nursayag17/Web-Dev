n=int(input())
i = 0
m = 1
while i <= n:
    if(pow(2,i) == n):
        m+=1
    i+=1
if m == 1:
    print("no")
else:
    print("yes")