'''
READING FILES WITH PYTHON
'''

# Open the file. (Check if it exists, create one if it doesn't exist)
# my_file = open("emails.txt", "r")

# Using the .read()
with open(file="paragraph.txt", mode="r") as my_file:
    content = my_file.read()
    print(content)    


# Using the .readline()
with open(file="emails.txt", mode="r") as my_file:
    line1 = my_file.readline()
    converted = line1.strip()
    print(converted)
    line2 = my_file.readline()
    print(line2)


# Using a loop to iterate over each line
with open(file="emails.txt", mode="r") as my_file:
    count = 0
    for line in my_file:
        if line.strip() == "bmorrow@msn.com":
            print(line)



# Using the .readlines()
with open(file="emails.txt", mode="r") as my_file:
    content = my_file.readlines()
    print(content[3])
    print(content[5])
    print(content[6])

    for i in range(4, len(content)):
        print(content[i])

