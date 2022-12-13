class CheckingAccount extends Account {
    constructor(number, overdraft_limit) {
        super(number);
        this.overdraft_limit = overdraft_limit;
    }
    getOverdraftlimit() {
        return this.overdraft_limit;
    }
    setOverdraftlimit(limit) {
        this.overdraft_limit = limit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this.overdraft) {
            throw Error("Insufficient amount. Overdraft limit exceded");
        }
        this._balance -= amount;
    }


    toString() {
        return (
            "Checking" + super.toString() + " overdraft limit: " + this.overdraft_limit
        );
    }
    endOfMonth() {
        let status = "";
        if (this.getBalance() < 0) status += "Warning, low balance ";
        status += this.toString();
        return status;
    }
}