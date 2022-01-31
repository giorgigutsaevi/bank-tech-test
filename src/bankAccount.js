const BankOperation = require("./bankOperation");

class BankAccount{

	constructor(bankOperation = BankOperation){
		const STARTING_BALANCE = 0;
		this.balance = STARTING_BALANCE;
		this.operationsArray = [];
		this.bankOperation = bankOperation;
	}

	deposit(amount){
		this.balance += amount;
		this.addOperation({credit: amount, balance: this.balance});
	}

	withdraw(amount){
		if(this.balance <= 0 || amount > this.balance){
			return `Can't withdraw, please add more funds. Current balance: ${this.balance}`
		}else{
			this.balance -= amount;
			this.addOperation({debit: amount, balance: this.balance});
		}
	}

	showBalance(){
		return this.balance;
	}

	addOperation(obj){
		let operation = new this.bankOperation(obj)
		this.operationsArray.unshift(operation)
	}

	printStatement(){
		
	}


}
module.exports = BankAccount;