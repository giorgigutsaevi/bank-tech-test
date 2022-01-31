const BankOperation = require("../src/bankOperation")
const tk = require('timekeeper');

describe("BankOperation", () => {
	let subject;

	beforeAll(() => {
		// Lock Time
		tk.freeze(new Date('2022-01-01'));
		subject = new BankOperation();
	});

	afterAll(() => {
		// Unlock Time
		tk.reset();
	});


	it("creates an instance of itself", () => {
		expect(subject).toBeInstanceOf(BankOperation)
	})

	describe("::display", () => {
		it("displays the date of the operation as the first column", () => {
			expect(subject.display()).toEqual("1/1/2022 ||  ||  || ")
		})

		it("displays the credit amount of the operation as the second column", () => {
			let creditOperation = new BankOperation({credit: 500})
			expect(creditOperation.display()).toEqual("1/1/2022 || 500 ||  || ")
		})

		it("displays the debit amount of the operation as the third column", () => {
			let debitOperation = new BankOperation({debit: 150})
			expect(debitOperation.display()).toEqual("1/1/2022 ||  || 150 || ")
		})

		it("displays the the balance as the last column", () => {
			let balance = new BankOperation({balance: 1000})
			expect(balance.display()).toEqual("1/1/2022 ||  ||  || 1000")
		})
		
	})


})