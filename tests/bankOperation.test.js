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
			expect(subject.display()).toEqual("1-1-2022 ||  ||  || ")
			
		})
	})


})