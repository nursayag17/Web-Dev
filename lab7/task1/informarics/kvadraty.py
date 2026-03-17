a=int(input())
b=int(input())
for i in range (a,b+1):
    if(pow(i,2)>a) and(pow(i,2)<b):
        print(i*i)