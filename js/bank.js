class Bank {
    static nextNumber = 0;
    constructor(accounts = []) {
      this.accounts = accounts;
    }
    getAccount(number) {
      return this.accounts.filter((acc) => acc.getNumber() === number)[0];
    }
    addAccount() {
        let account = new Account(++Bank.nextNumber);
        account.deposit(50);
        this.accounts.push(account);
        return Bank.nextNumber;
      }
      addSavingsAccount(intrest) {
        let account = new SavingsAccount(++Bank.nextNumber, intrest);
        account.deposit(200);
        this.accounts.push(account);
        return Bank.nextNumber;
      }
      addCheckingAccount(overdraft) {
        let account = new CheckingAccount(++Bank.nextNumber, overdraft);
        account.deposit(100);
        this.accounts.push(account);
        return Bank.nextNumber;
      }
    closeAccount(number) {
      let indexOfCloseAccount = this.accounts.reduce(
        (acc, account, index) => (account.getNumber() === number ? index : acc),
        -1
      );
      this.accounts.splice(indexOfCloseAccount, 1);
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