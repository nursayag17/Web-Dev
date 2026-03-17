a = int(input())
arr = []
count = 0
for i in range(a):
    num = int(input())
    arr.append(num)
for i in range(a-1):
    if arr[i+1] > arr[i]:
        count+=1
print (count)