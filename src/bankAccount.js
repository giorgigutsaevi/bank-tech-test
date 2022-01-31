const BankOperation = require("./bankOperation");

class BankAccount{

	constructor(operation = BankOperation){
		const STARTING_BALANCE = 0;
		this.balance = STARTING_BALANCE;
		this.operationsArray = [];
	}

	deposit(amount){
		return this.balance += amount;
	}

	withdraw(amount){
		if(this.balance <= 0 || amount > this.balance){
			return `Can't withdraw, please add more funds. Current balance: ${this.balance}`
		}else{
			return this.balance -= amount;
			
		}
	}

	showBalance(){
		return this.balance;
	}

	addOperation(obj){
		
	}


}

module.exports = BankAccount;