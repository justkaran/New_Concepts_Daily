# Problem I came across: 
# The sum of the squares of the first ten natural numbers is 385. The square of the sum of the first ten natural numbers is, 3025
# Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.
# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

# Solution:

```
start, end = 1, 100
numbers = []

for num in range(start, end + 1):
    numbers.append(num ** 2)

Sum = sum(numbers)

numbers_simple = []

for num in range(start, end + 1):
    numbers_simple.append(num)

simple = sum(numbers_simple)**2

difference = simple - Sum

print(Sum) 
print(simple)
print(difference)
