def safe_divide(a, b):
    try:
        result = a/b
        return result
    except ZeroDivisionError:
        return "Division by Zero is not allowed!"

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

print(safe_divide(a, b))
