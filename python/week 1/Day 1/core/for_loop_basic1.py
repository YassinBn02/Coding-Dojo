
#Basic

def Basic():
    for i in range (151):
        print(i)
Basic()

print("#"*10)

# Multiples of Five

def Multiples_of_Five():
    for i in range (5,1001,5):
        print(i)

Multiples_of_Five()


#Counting, the Dojo Way
print("#"*10)
def Counting_the_Dojo_Way():
    for i in range(1,101):
        if i%10 ==0 :
            print("Coding Dojo")
        elif i%5 ==0:
            print("Coding")
        else:
            print(i)
Counting_the_Dojo_Way()

#That_Sucker's_Huge
print("#"*10)

def That_Sucker():
    sum=0
    for i in range (500000):
        if i%2!=0:
            sum=sum+i
    return sum
print(That_Sucker())

#Countdown by Fours
print("#"*10)
def  Countdown_by_Fours():
    for i in range (2018,-1,-4): 
        print(i)
Countdown_by_Fours()

#Flexible_Counter
print("#"*10)

def Flexible_Counter(lowNum,highNum,mult):
    for i in range (lowNum,highNum+1):
        if i%mult==0:
            print(i)
Flexible_Counter(2,9,3)
