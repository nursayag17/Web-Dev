a = int(input())
arr = []
for i in range(a):
    num = int(input())
    arr.append(num)
for i in range(a):
    if arr[i]%2==0:
        print (arr[i], end = " ")