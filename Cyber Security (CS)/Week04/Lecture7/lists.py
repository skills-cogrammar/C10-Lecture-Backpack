# Creating a list
names = [] #empty list
fruits = ["apple", "banana", "cherry", "banana"]
# print(fruits)
# Adding elements
fruits.append("orange")  # Adds at the end
fruits[0] = "Mango"
print(fruits)
fruits.insert(1, "blueberry")  # Inserts at index 1
print(fruits)

# # Removing elements
fruits.remove("banana")  # Removes the first occurrence
fruits.pop()  # Removes the last element
print(fruits)

# # Accessing elements
print(fruits[3])  # Output: apple

# # Slicing lists
print(fruits[1:3])  # Output: ['blueberry', 'cherry']


"""
Exercise:
    - Create a list of your favorite songs.
    - Add a new song to the list and remove one.
    - Print the final list.
"""
