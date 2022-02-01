class BankOperation {
  constructor({ credit, debit, balance } = {}) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  display() {
    return [
      `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`,
      this.credit,
      this.debit,
      this.balance,
    ].join(' || ');
  }
}

module.exports = BankOperation;
