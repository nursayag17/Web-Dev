from models import Animal
from models import Dog
from models import Cat

d1 = Dog("Aktos",5,"male","white","woof")
c1 = Cat("barsik",3,"female","scotland","meow")

animals = [d1, c1]

for animal in animals:
    print(animal)      
    animal.eat()
    animal.speak()     
    print()
    