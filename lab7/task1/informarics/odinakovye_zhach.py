a = int(input())
arr = []

for i in range(a):
    num = int(input())
    arr.append(num)
for i in range(a-1):
    if arr[i+1] == arr[i]:
        print("No")
    else:
        print("yes")
print (count)