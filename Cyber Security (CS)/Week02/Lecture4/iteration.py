# for number in range(5):
#     if number == 3:
#         continue
#     print(number)

# age = int(input("Please enter your age: "))

# while age > 18:
#     print("Please vote")

"""
    A -> Swimming, Plays tennis
    B -> video games, football
    C -> reading, hiking
"""

# for i in range(10):
#     for j in range(10):
#         print(f"i: {i}, j: {j}")

sum = 0
for i in range(50):
    if i % 5 == 0:
        sum = sum + i
print(sum)
