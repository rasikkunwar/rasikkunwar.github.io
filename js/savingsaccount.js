class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }
    setInterest(interest) {
        this.interest = interest;
    }

    addInterest() {
        let interesetAmt = (super.getBalance() * this.interest) / 100
        super.deposit(interesetAmt);
        return interesetAmt;
    }

    toString() {
        return "Savings" + super.toString() + " interest rate: " + this.interest;
    }
    endOfMonth() {
        let status = "";
        let interestAdded = this.addInterest();
        status += "Interest added SavingsAccount" + super.getNumber() + ": balance:" + super.getBalance() + " interest:" + interestAdded;
        return status;
    }
}