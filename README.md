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
![Screenshot 2022-02-01 at 11 06 06](https://user-images.githubusercontent.com/74352720/151958184-e23696ea-fd38-4c3c-a751-3ea41946ff4b.png)

## My Approach 
### General Code Structure & how it works
There are 2 classes that work together:
1. BankAccount class, which takes care of setting up the user's bank account, depositing & withdrawing the money and also printing the summary statement as well as other helper methods. 
2. BankOperation class, acts as a collector of all operations/transactions a user can make. On instatiation the constructor method creates an object (hash) (using the ES6 destructuring syntax for that, and starts with a current date key-value relationship and 'empty' object keys for credit, debit and balance). 

I mentioned that BankAccount model is injected with BankOperation class, so it's important to understand the relationship between them in more detail.

Everytime `deposit` and `withdraw` methods are invoked, they in turn invoke the `addOperation` helper method, that takes an object as an argument. The `addOperation` method assigns an instance of `BankOperation` class to a variable `operation` which captures the operation (whether it's a deposit or a withdrawal) and automatically adds it to the `operationsArray` - an array that holds the history of all transactions/operations. 

Then, if the user wants to print their statement, they can invoke the `printStatement` method, that maps the operationsArray and since this array is now populated with instances of `BankOperation` class it uses the `display` method on them. In the end the `printStatement` method conveniently joins the strings with a newline symbol, so it appears well-organized. 