
class BankAccount{

	constructor(){
		this.balance = 0;
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

}

module.exports = BankAccount;