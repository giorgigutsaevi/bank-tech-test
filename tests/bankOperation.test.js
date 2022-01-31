const BankOperation = require("../src/bankOperation")

describe("BankOperation", ()=>{
	let subject;
	beforeEach(()=>{
		subject = new BankOperation();
	})

	it("creates an instance of itself", ()=>{
		expect(subject).toBeInstanceOf(BankOperation)
	})
})