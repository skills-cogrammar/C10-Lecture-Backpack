# name = input("Enter your name: ")
# print(name)
# if name == "Jane":
#     print("Correct")
# else:
#     print("Incorrect! Try again")

# num1 = 23
# num2 = 34

# sum = num2 + num1

# print(sum)

# try:
#     number = int(input("Please enter a number: "))
#     print(number)
# except ValueError as e:
#     print(f"There is an error: {e}")
# finally:
#     print("This block will always execute")


try:
    result = 56/0
except ZeroDivisionError:
    print("You tried dividing by zero!")
else:
    print(f"Worked! Result is {result}")
finally:
    print("I will always execute!")
