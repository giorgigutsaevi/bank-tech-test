
const BankAccount = require("../src/bankAccount");

describe("BankAccount", ()=>{
	let subject;

	beforeEach(()=>{
		subject = new BankAccount();
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

	

})