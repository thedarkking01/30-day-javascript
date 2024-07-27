
// Activity 1: Class Definition

// Task 1: Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

//Create an instance of Person
person1 = Person("John", 30)
// Log the greeting message
print(person1.greet())


//Task 2: Add a method to the `Person` class that updates the age property and logs the updated age.

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

    def update_age(self, new_age):
        self.age = new_age
        print(f"Updated age: {self.age}")

//Create an instance of Person
person1 = Person("John", 30)
// Update age and log the updated age
person1.update_age(31)


// Activity 2: Class Inheritance

//Task 3:Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.

class Student(Person):
    def __init__(self, name, age, studentId):
        super().__init__(name, age)
        self.studentId = studentId

    def get_student_id(self):
        return f"Student ID: {self.studentId}"

// Create an instance of Student
student1 = Student("Jane", 20, "S12345")
// Log the student ID
print(student1.get_student_id())


//Task 4:Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.

class Student(Person):
    def __init__(self, name, age, studentId):
        super().__init__(name, age)
        self.studentId = studentId

    def greet(self):
        return f"Hello, my name is {self.name}, I am {self.age} years old, and my student ID is {self.studentId}."

//Create an instance of Student
student1 = Student("Jane", 20, "S12345")
//Log the overridden greeting message
print(student1.greet())


//Activity 3: Static Methods and Properties

//Task 5:Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."

    def update_age(self, new_age):
        self.age = new_age
        print(f"Updated age: {self.age}")

    @staticmethod
    def generic_greet():
        return "Hello, I am a person."

//Call the static method
print(Person.generic_greet())


//Task 6:Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student(Person):
    student_count = 0

    def __init__(self, name, age, studentId):
        super().__init__(name, age)
        self.studentId = studentId
        Student.student_count += 1

    def greet(self):
        return f"Hello, my name is {self.name}, I am {self.age} years old, and my student ID is {self.studentId}."

// Create instances of Student
student1 = Student("Jane", 20, "S12345")
student2 = Student("Doe", 22, "S67890")

//Log the total number of students
print(f"Total number of students: {Student.student_count}")


// Activity 4: Getters and Setters

//Task 7:Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.

class Person:
    def __init__(self, firstName, lastName, age):
        self.firstName = firstName
        self.lastName = lastName
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.firstName} {self.lastName} and I am {self.age} years old."

    def update_age(self, new_age):
        self.age = new_age
        print(f"Updated age: {self.age}")

    @property
    def full_name(self):
        return f"{self.firstName} {self.lastName}"

//Create an instance of Person
person1 = Person("John", "Doe", 30)
//Log the full name using the getter
print(person1.full_name)

//Task 8:Add a setter method to the `Person` class to update the name properties (`firstName` and `lastName`). Update the name using the setter and log the updated full name.

class Person:
    def __init__(self, firstName, lastName, age):
        self.firstName = firstName
        self.lastName = lastName
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.firstName} {self.lastName} and I am {self.age} years old."

    def update_age(self, new_age):
        self.age = new_age
        print(f"Updated age: {self.age}")

    @property
    def full_name(self):
        return f"{self.firstName} {self.lastName}"

    @full_name.setter
    def full_name(self, name):
        self.firstName, self.lastName = name.split()

//Create an instance of Person
person1 = Person("John", "Doe", 30)
//Update the name using the setter
person1.full_name = "Jane Smith"
//Log the updated full name
print(person1.full_name)

//Activity 5: Private Fields (Optional)

//Task 9:Define a class `Account` with private fields for `balance` and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account:
    def __init__(self, balance=0):
        self.__balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
        print(f"Deposited {amount}. New balance: {self.__balance}")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        print(f"Withdrew {amount}. New balance: {self.__balance}")

    def get_balance(self):
        return self.__balance

//Task 10:Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.

// Create an instance of Account
account1 = Account(100)

// Test deposit and withdraw methods
account1.deposit(50)
account1.withdraw(30)
// Log the balance
print(f"Final balance: {account1.get_balance()}")
