def temp_converter(celsius):
    try:
        result = (celsius * 9/5) + 32
        return f"{result} Farenheit"
    except TypeError:
        return "Invalid input. PLease enter a number!"

celsius = float(input("Enter temperature in celsius: "))

print(temp_converter(celsius))
