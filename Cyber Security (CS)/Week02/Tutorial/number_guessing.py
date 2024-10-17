import random

number = random.randint(1, 100) # random numbe between 1 and 100
guess = None

while guess != number:
    guess = int(input("Guess a number: "))
    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
    else:
        print("Correct! Well done!")
