# Problem, I faced and solved: Check instances of MongoDB running

```ps -ef | grep mongod | grep -v grep | wc -l | tr -d ' '```

The ps -ef | grep mongod part returns all the running processes, that have any relation to the supplied string, i.e. mongod, e.g. have the string in the executable path, have the string in the username, etc.

When you run the previous command, the grep mongod also becomes a process containing the string mongod in the COMMAND column of ps output, so it will also appear in the output. For that reason you need to eliminate it by piping grep -v grep, which filters all the lines from the input that contain the string grep.

So now you have all possible lines that contain string mongod and are not the instances of grep. What to do? Count them, and do that with wc -l.

wc -l output contains additional formatting, i.e. spaces, so just for the sake of the beauty, run tr -d ' ' to remove the redundant spaces.
