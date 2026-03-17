a = int(input())
arr = []
count = 0
for i in range(a):
    num = int(input())
    arr.append(num)
for i in range(a):
    if arr[i] > 0:
        count+=1
print(count)