def calculator(operation, a, b):
    try:
        if operation == "add":
            return a + b
        elif operation == "subtract":
            return a - b
        elif operation == "multiply":
            return a * b
        elif operation == "divide":
            return a / b
        else:
            return "Invalid operation. Try again!"
    except ZeroDivisionError:
        return "Division by zero is not allowed!"

operation = input("Choose operation - add, subtract, multiply, divide: ")
a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))

print(calculator(operation, a, b))
