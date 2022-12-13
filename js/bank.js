class Bank {
    static nextNumber = 0;
    constructor(accounts = []) {
      this.accounts = accounts;
    }
    getAccount(number) {
      return this.accounts.filter((acc) => acc.getNumber() === number)[0];
    }
    addAccount(amount) {
        let account = new Account(++Bank.nextNumber);
        account.deposit(amount);
        this.accounts.push(account);
        return Bank.nextNumber;
      }
      addSavingsAccount(amount, intrest) {
        let account = new SavingsAccount(++Bank.nextNumber, intrest);
        account.deposit(amount);
        this.accounts.push(account);
        return Bank.nextNumber;
      }
      addCheckingAccount(amount, overdraft) {
        let account = new CheckingAccount(++Bank.nextNumber, overdraft);
        account.deposit(amount);
        this.accounts.push(account);
        return Bank.nextNumber;
      }
    closeAccount(number) {
      let indexOfAccount = this.accounts.reduce(
        (acc, account, index) => (account.getNumber() === number ? index : acc),
        -1
      );
      this.accounts.splice(indexOfAccount, 1);
    }
    accountReport() {
      return this.accounts.reduce(
        (report, acc) => (report += acc.toString() + "\n"),
        ""
      );
    }
    endOfMonth() {
      return this.accounts.reduce(
        (acc, account) => (acc += account.endOfMonth() + "\n"),
        ""
      );
    }
  }