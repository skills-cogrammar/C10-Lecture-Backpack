"""Variables"""
string = "This is a string"
integer = 10
floating_point = 10.5
boolean = True

"""Print function 'sep' parameter override"""
print(string, integer, floating_point, boolean, sep='-')

"""Count how many times the character 'a' occurs in the string"""
user_name = input("Please enter your name: ")
counted_a = user_name.count('a')
print(counted_a)

"""Functions"""
# print()
# input()
# len()

"""Methods"""
# user_name.upper()
# user_name.count('a')


"""Convert a string to upper case: """
upper_case = user_name.upper()
print(upper_case)

"""Check if string starts with a certain sub-string:"""
starting = user_name.startswith("L")
print(starting)

"""Reverse the String"""
# [start: stop: -1]
reverse = user_name[::-1]
print(reverse)


"""Conditional Statement Pseudo Code"""
# If the temp is lower than 15.
#       print(It's cold!)
# elif the temp is between 15 and 25
#       print("It's warm!")
# else
#       print("It's hot!")

temp = int(input("Please enter the temperature (celsius): "))

if temp < 15:
    print("It's cold!")
elif 15 <= temp <= 25:
    print("It's warm!")
else:
    print("It's hot")
