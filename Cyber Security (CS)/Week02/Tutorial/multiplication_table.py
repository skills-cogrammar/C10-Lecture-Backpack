number = int(input("Please enter a number: "))

if number > 0:
    for i in range(1, 13):
        print(f"{number} x {i} = {number * i}")
else:
    print("Please enter a positive integer")
