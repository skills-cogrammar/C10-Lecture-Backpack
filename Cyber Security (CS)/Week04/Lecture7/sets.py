# Creating a set
numbers = {1, 2, 3, 4}

# Adding elements
numbers.add(5)
print(numbers)
# Removing elements
numbers.remove(3)

# Set operations
evens = {2, 4, 6}
print(numbers | evens)  # Union: {1, 2, 4, 5, 6}
print(numbers & evens)  # Intersection: {2, 4}


"""
Exercise:
    - Create a set of numbers from 1 to 5.
    - Add a new number and perform a union with another set.
"""
