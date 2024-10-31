'''
WORKING WITH EXTERNAL DATA SOURCES
'''

# Opening files with python. (.txt)
location = "/Users/Walobwad/Desktop/names.txt"
my_file = open(file=location, mode="r")


my_file.close()


# Using the with keyword
with open(file="names.txt", mode="r") as my_file:
    print(my_file)