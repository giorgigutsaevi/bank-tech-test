# bank-tech-test - Javascript

This is a small project to practice OOD and TDD skills. Source Repo [here](https://github.com/makersacademy/course/blob/main/individual_challenges/bank_tech_test.md)\
I used `jest` and `timekeeper` npm packages throughout the project, so please ensure to run `npm install` before running the app.

## Specification
### Requirements
- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
- Given a client makes a deposit of 1000 on 10-01-2012
- And a deposit of 2000 on 13-01-2012
- And a withdrawal of 500 on 14-01-2012
- When she prints her bank statement
- Then she would see:
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Interaction
1. Clone this Repo
2. Inspect the tests (100% coverage, all 20 tests passing)
3. Open Node REPL
4. Set up the account and use all the methods on its interface

## Screenshot

