a= int(input())
list=[]
for i in range(2,a+1):
    if(a%i==0):
        list.append(i)
print(min(list))
