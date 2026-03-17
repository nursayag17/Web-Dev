class Animal:
    def __init__(self,name,age,gender):
        self.name = name
        self.age= age
        self.gender = gender
    
    def speak(self):
        print(self.name, "makes a sound")
    
    def eat(self):
        print(self.name, "is eating")
    
    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, gender={self.gender})"
class Dog(Animal):
    def __init__(self,name,age,gender,color,sound):
        super().__init__(name,age,gender)
        self.color=color
        self.sound=sound
    #override
    def speak(self):
        print(self.name,"makes a sound ",self.sound)
    def sleep(self):
        print(self.name , " is sleeping ")    

class Cat(Animal):
    def __init__(self,name,age,gender,breed,sound):
        super().__init__(name,age,gender)
        self.breed=breed
        self.sound =   sound
    def speak(self):
        print(self.name , "makes a sound " , self.sound)
    def poroda(self):
        print("This Cat is a " , self.breed)