#---------1---------
x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
print(x)
print("*"*50)

students[0]['last_name']="Bryant"
print (students[0]['last_name'])
print("*"*50)

sports_directory['soccer'][0]="Andres"
print(sports_directory['soccer'][0])
print("*"*50)

z[0]['y']=30
print(z)

#--------2-------
print("*"*50)
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(some_list):
    for i in range (len(some_list)):
        key= some_list[i]
        for value in key:
            print(f"{value} - {key[value]},")

iterateDictionary(students)

#---------3--------------
print("*"*50)
def iterateDictionary2(key_name, some_list):
    for i in range (len(some_list)):
        print(some_list[i][key_name])

iterateDictionary2("first_name",students)
print("*"*50)
iterateDictionary2("last_name",students)


#----------4-------------

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo (some_dict):
    for key in some_dict:
        print(f"{len(some_dict[key])}  {key}")
        for i in range (len(some_dict[key])):
            print(some_dict[key][i])
        print("     ")
print("*"*50)
printInfo(dojo)