const BankAccount = require("../src/bankAccount");
const BankOperation = require("../src/bankOperation");

// mocking the bankOperation class with all of its methods
jest.mock("../src/bankOperation")

describe("BankAccount", ()=>{
	let subject;

	beforeEach(()=>{
		subject = new BankAccount();
		// Clear all instancews and calls to constructor and all methods
		BankOperation.mockClear();
	})

	it("creates an instance of itself", ()=>{
		expect(subject).toBeInstanceOf(BankAccount)
	})

	it("starts with a balance of 0 pounds", ()=>{
		expect(subject.balance).toEqual(0)
	})

	describe("::deposit", ()=>{

		it("has a deposit() instance method", ()=>{
			expect(typeof subject.deposit).toBe("function")
		})

		it("deposits the amount indicated as a parameter", ()=>{
			subject.deposit(500);
			expect(subject.balance).toEqual(500)
		})
	})

	describe("::withdraw", ()=>{
		it("has a withdraw() instance method", ()=>{
			expect(typeof subject.withdraw).toBe("function")
		})

		it("user can't withdraw if the deposit less than or equal to 0", ()=>{
			subject.withdraw(500)
			expect(subject.withdraw()).toBe("Can't withdraw, please add more funds. Current balance: 0")
			expect(subject.balance).not.toEqual(-500)
		})

		it("user can't withdraw if the withdrawal amount is more than its current balance", ()=>{
			subject.deposit(200)
			expect(subject.balance).toEqual(200)
			expect(subject.withdraw(400)).toBe(`Can't withdraw, please add more funds. Current balance: ${subject.balance}`)
		})

		it("user can withdraw if the withdrawal amount is less than or equal to its current balance", ()=>{
			subject.deposit(1000)
			subject.withdraw(700)
			expect(subject.balance).toEqual(300)
		})
	})

	describe("::showBalance", ()=>{

		it("has a showBalance() instance method", ()=>{
			expect(typeof subject.showBalance).toBe("function")
		})

		it("displays the current balance on the account", ()=>{
			subject.deposit(200);
			expect(subject.showBalance()).toEqual(200)
		})
	})

	describe("::addOperation", ()=>{
		let stubClass;
		let newUser;

		beforeEach(()=>{
			stubClass = {
				stubFunction: () => {}
			};
			jest.spyOn(stubClass, "stubFunction")
			newUser = new BankAccount(stubClass.stubFunction)
		})

		it("has an addOperation() instance method", ()=>{
			expect(typeof subject.addOperation).toBe("function")
		})

		it("uses BankOperation class when invoked", ()=>{
			newUser.addOperation({credit: 300})
			expect(stubClass.stubFunction).toHaveBeenCalled();
		})

		it("deposit() and withdraw() methods also BankOperation", ()=>{
			newUser.deposit(200);
			newUser.withdraw(100);
			expect(stubClass.stubFunction).toHaveBeenCalledTimes(2);
			expect(newUser.operationsArray.length).toEqual(2);
		})
	})

	describe("::printStatement", ()=>{
		it("has a printStatement() instance method", ()=>{
			expect(typeof subject.printStatement).toBe("function")
		});

		it("printStatement() calls display() method from BankOperation model", ()=>{
			let user = new BankAccount();
			user.deposit(1000);
			user.withdraw(200);
			user.printStatement();
			expect(BankOperation).toHaveBeenCalled()
		})
	})

})