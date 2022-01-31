
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

	

})