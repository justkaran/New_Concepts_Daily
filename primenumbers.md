# Problem I came across: Find out if number is a prime with the max divisor of 20

# Solution:
```private int[] generatePrimes(int upperLimit)){
List<int> primes = new List<int>();
    bool isPrime;
    int j;
 
    primes.Add(2);
 
    for (int i = 3; i <= upperLimit; i += 2) {
        j = 0;
        isPrime = true;
        while (primes[j]*primes[j] <= i) {
            if (i % primes[j] == 0) {
                isPrime = false;
                break;
            }
            j++;
        }
        if (isPrime) {
            primes.Add(i);
        }
    }
 
    return primes.ToArray<int>();
    
    int divisorMax = 20;
int[] p = generatePrimes(divisorMax);
int result = 1;
 
for (int i = 0; i < p.Length; i++) {
int a = (int) Math.Floor(Math.Log(divisorMax) / Math.Log(p[i]));
    result = result * ((int)Math.Pow(p[i],a));
} ```
