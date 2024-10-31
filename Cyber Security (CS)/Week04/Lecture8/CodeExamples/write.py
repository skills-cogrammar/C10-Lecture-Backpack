'''
WRITING IN EXTERNAL FILES WITH PYTHON
'''

# Open the file in write mode
# Use the .write()
with open(file="emails.txt", mode="w") as my_file:
    my_file.write("danw@hyperiondev.com")


# Using the append mode
with open(file="emails.txt", mode="a") as my_file:
    my_file.write("\nbonaogeto@hyperiondev.com")


# Using the .writelines()
emails = ["luebke@yahoo.com\n", "heckerman@msn.com\n", "sagal@aol.com\n", "crowl@verizon.net\n"]
with open(file="emails.txt", mode="w") as my_file:
    my_file.writelines(emails)