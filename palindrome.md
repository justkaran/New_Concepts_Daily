# Problem I came across: Find palindrome of number
# Solution:

```n = 0
for a in range(999, 100, -1): # Iterate through all numbers from 100 to 9999
    for b in range(a, 100, -1): # Iterate through all numbers starting at a
        x = a * b # Multiply number
        if x > n: # if x is larger than 0
            s = str(a * b) # multiply one number with the other and convert it into a string
            if s == s[::-1]: # check if the string is the same as the string reversed
                n = a * b # if yes return n that is a times b
print(n)

or simpler regarding [O]:

def palindrome_1(str):
  if len(str) <= 1:
    return True
  if str[0] != str[-1]:
    return False
  return palindrome_1(str[1:-1])

print(palindrome_1(str))

print(str[1:-1])
