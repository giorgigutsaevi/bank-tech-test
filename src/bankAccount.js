/* eslint-disable new-cap */
const BankOperation = require('./bankOperation');

class BankAccount {
  constructor(bankOperation = BankOperation) {
    const STARTING_BALANCE = 0;
    this.balance = STARTING_BALANCE;
    this.operationsArray = [];
    this.bankOperation = bankOperation;
    this.STATEMENT_HEADER = 'date || credit || debit || balance\n';
  }

  deposit(amount) {
    this.balance += amount;
    this.addOperation({ credit: amount, balance: this.balance });
    return `${amount} is now deposited to your account!`;
  }

  withdraw(amount) {
    if (this.balance <= 0 || amount > this.balance) {
      return `Can't withdraw, please add more funds. Current balance: ${this.balance}`;
    }
    this.balance -= amount;
    this.addOperation({ debit: amount, balance: this.balance });
    return `${amount} is now withdrawn from your account!`;
  }

  showBalance() {
    return this.balance;
  }

  addOperation(obj) {
    const operation = new this.bankOperation(obj);
    this.operationsArray.unshift(operation);
  }

  printStatement() {
    const statements = this.operationsArray.map((statement) => statement.display());
    // eslint-disable-next-line no-console
    console.log(`${this.STATEMENT_HEADER}${statements.join('\n')}`);
  }
}

module.exports = BankAccount;
