
# function count down
def countdown(a):
    liste=[]
    for i in range(a,-1,-1):
        liste.append(i)
    return liste
print(countdown(5))

# Print and return

def print_and_return (list):
    print(list[0])
    return list[1]
print(print_and_return([1,2]))

# First_plus_length

def First_plus_length(list):
    return list[0]+list[len(list)-1]
print(First_plus_length([1,2,3,4,5,6]))

#values_grater_than_second

def values_grater_than_second(list):
    greater=[]
    count=0
    for i in range (len(list)) :
        if list[i]>list[1]:
            count=count+1
            greater.append(list[i])
    print(count)
    return greater 
list=[1,2,3,4,5,6]
print(values_grater_than_second(list))

# length_value

def length_value(length,num):
    liste=[]
    for i in range (length):
        liste.append(num)
    return liste
print(length_value(4,7))