# September 1:
- chunked transfer encoding: note: runs until chunk = Empty
- range: in python3 it is a generator, thus more efficient
- sum: dont give sum an integer variable, it could cause problems when working with lists (error: int not callable)
- fromkeys: list(dict.fromkeys(new_menu)) and list(set(old_list))

# September 2
- fromkeys and set
- enumerate
- Generators, yield statements in a generator functions, lazy evaluation, sys.getsizeof(), sympy for prime numbers

# September 3-20
Practicing coding problems
Core algorithms to know

Search:
- Random

```def find(elements, value):
    while True:
        random_element = random.choice(elements)
        if random_element == value:
            return random_element```

- Linear

```def find_index(elements, value):
    for index, element in enumerate(elements):
        if element == value:
            return index```
            
- Binary

Interesting advanced readings in algorithms
Web systems knowledge
System design
Concurrency
Low-level systems
Front end specific stuff
Mobile
CS
Overall Dev Ops
