'''
- Student Registration (Create)
    Students can be added by entering their name, ID, age, and courses.
    Data will be saved to a text file in a structured format.

- Update Student Information (Update)
    Users can update a student's information (e.g., adding a course or updating age).
    The system will load data from the file, update the necessary fields, and save it back.

- Remove Student (Delete)
    A students record can be deleted by their ID.
    The file will be updated to reflect the removal.

- Display All Students (Read)
    Display all registered students with their details.
'''

# Prompt the user on what thay'd want
# Select a functionality according to the user's choice

main_menu = """
    WELCOME TO DAN'S STUDENT MANAGEMENT SYSTEM
    Please select a choice.
    1. Add Student
    2. Update a student
    3. Remove a student
    4. Display all students
    5. Exit the program
"""

# Helper Function (To allow access of the file)
def read_helper():
    """
    Reads the student data from 'students.txt' and stores it in a list of dictionaries.
    Returns a list of dictionaries containing student information.
    """
    students = []

    with open("students.txt", "r") as file:
        for line in file:
            # Splitting and structuring each line of student data
            student_data = line.strip().split(',')
            student = {
                'id' : student_data[0].split(':')[1].strip(),
                'name': student_data[1].split(':')[1].strip(),
                'age' : student_data[2].split(':')[1].strip(),
                'course' : student_data[3].split(':')[1].strip()
            }
            students.append(student)
    return students 


# Add students (Create)
def add_student():
    """
    Prompts user to enter a new student's details and adds them to 'students.txt'.
    Checks for duplicate ID to prevent duplicate entries.
    """
    student_id = input("Enter Student ID: ")
    students = read_helper()
    
    # Check if the student ID already exists
    for student in students:
        if student["id"] == student_id:
            print(f"Student with the ID {student_id} already exists.")
            return

    # Collect the remaining details
    name = input("Enter the student name: ")
    age = input("Enter the student age: ")
    course = input("Enter the students' courses: ")

    # Create new student record
    new_student = {
        'id' : student_id,
        'name' : name,
        'age' : age,
        'course' : course
    }

    # Append to the list and save
    students.append(new_student)
    save_student(students)
    print("Student added successfully")


# Save the student data to the file
def save_student(students):
    """
    Saves the list of students to 'students.txt' in a structured format.
    Each student's information is saved on a new line.
    """
    with open("students.txt", "w") as file:
        for student in students:
            # Format student data
            student_record = f"ID: {student['id']}, Name: {student['name']}, Age: {student['age']}, Course: {student['course']}"
            file.write(student_record + '\n')


# Read all students (Read)
def read_students():
    """
    Reads and displays all student records from 'students.txt'.
    Displays a message if no student records are found.
    """
    students = read_helper()
    
    # Check if any student data exists
    if not students:
        print("No student found")
        return

    # Display each student's information
    for student in students:
        print(f"ID: {student['id']}, Name: {student['name']}, Age: {student['age']}, Course: {student['course']}")


# Update a student (Update)
def update_student():
    """
    Updates a student's information by their ID.
    Prompts the user for new values, saves changes to 'students.txt'.
    """
    student_id = input("Enter the student ID to be updated: ")
    students = read_helper()

    for student in students:
        # Check if the current student ID matches the input
        if student['id'] == student_id:
            print(f"Current record: {student}")
            
            # Collect new values for update
            name = input("Enter the new name of student: ")
            age = input("Enter the new age of student: ")
            course = input("Enter the new course: ")

            # Update the fields with new values if provided
            if name:
                student['name'] = name
            if age:
                student['age'] = age
            if course:
                student['course'] = course
        
        # Save updated list back to file
        save_student(students)
        print("Student updated successfully")
        return


# Delete a student (Delete)
def delete_student():
    """
    Deletes a student's record by their ID from 'students.txt'.
    """
    student_id = input("Enter the student ID to be deleted: ")
    students = read_helper()

    # Filter out the student to be deleted
    new_students = [student for student in students if student['id'] != student_id]
    
    # Save updated list back to file
    save_student(new_students)
    print(f"Student with ID {student_id} has been deleted")


# Main Menu
def main():
    """
    Main menu function to display options for adding, reading, updating, 
    deleting, and exiting the Student Management System.
    """
    main_message = '''
        This is a Student Management System
        Please select a choice:
        1. Add Student
        2. Display all students
        3. Update a student
        4. Delete a student
        5. Exit
    '''

    while True:
        # Prompt the user to enter a choice from 1-5
        print(main_message)
        choice = input("Enter your choice: ")

        # Execute the function based on user's choice
        if choice == "1":
            add_student()
        elif choice == "2":
            read_students()
        elif choice == "3":
            update_student()
        elif choice == "4":
            delete_student()
        elif choice == "5":
            print("Exiting the system ...")
            break
        else:
            print("Oops - incorrect input. Please try again.")
        

# Run the main function
main()
