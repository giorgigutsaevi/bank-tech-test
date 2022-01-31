
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

})