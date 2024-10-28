# # Creating a dictionary
student = {
    "name": "Alice",
    "age": 25,
    "major": "Computer Science"
}

# # Accessing elements
print(student["name"])  # Output: Alice

# # Adding new key-value pairs
student["GPA"] = 3.9

print(student)

# # Updating existing values
student["age"] = 26
print(student)
# # Removing key-value pairs
del student["major"]
# print(student)
# # Using .pop() to remove a key
student.pop("GPA")

# print(student)
# # usind dictionary methods

# # Get keys, values, and items
print(student.keys())   # Output: dict_keys(['name', 'age'])
print(student.values())  # Output: dict_values(['Alice', 26])

# # Looping over a dictionary
for key, value in student.items():
    print(f"{key}: {value}")

# # Copying a dictionary
student_copy = student.copy()

person = {
    "name": "Bonaventure Ogeto",
    "age": "23",
    "nationality": "Italian",
    "friends": ["Jake", "June", "Jade"],
    "family": {
        "brother": "JohnDoe"
    }
}





"""
Exercise:
    - Create a dictionary with your personal details (name, age, country).
    - Add a new detail (e.g., favorite food) and update an existing one.
"""
