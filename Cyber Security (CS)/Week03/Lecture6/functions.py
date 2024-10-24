# def greet(name): # name is a parameter
#     print(f"Hello, {name}!")

# greet("Jake") # Jake is an argument

def addition(num1, num2):
    return num2 + num1

result = addition(23, 67)
subtruction = result - 80
print(subtruction)


# what is the difference between 'print' and 'return'

def vote(name):
    age = int(input("Enter your age: "))
    if age >= 18:
        return f"Hi, {name} you may vote. You age is {age}"

print(vote("John"))
