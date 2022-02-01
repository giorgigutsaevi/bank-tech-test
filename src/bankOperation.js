class BankOperation {
  constructor({ credit, debit, balance } = {}) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  display() {
    return [
      `${this.date.getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
      this.credit,
      this.debit,
      this.balance,
    ].join(' || ');
  }
}

module.exports = BankOperation;
