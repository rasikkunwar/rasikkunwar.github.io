describe("SavingAccounts", function () {
    it("Add interest to the account", function () {
      let accountNumber = 1;
      let interestRate = 20;
      let savingAccount = new SavingsAccount(accountNumber, interestRate);
      savingAccount.deposit(200);
      savingAccount.addInterest();
      let actualAmount = savingAccount.getBalance();
      let expectedAmount = 240;
      assert.equal(actualAmount, expectedAmount);
    });
  });
  
  describe("CheckingAccounts", function () {
    it("Withdraw amount from account", function () {
      let accountNumber = 1;
      let overdraftLimit = 100;
      let checkingAccount = new CheckingAccount(accountNumber, overdraftLimit);
      checkingAccount.deposit(500);
      checkingAccount.withdraw(300);
      let actualAmount = checkingAccount.getBalance();
      let expectedAmount = 200;
      assert.equal(actualAmount, expectedAmount);
    });
    it("Check for error if zero amount is enter to withdraw", function () {
      let accountNumber = 1;
      let overdraftLimit = 1000;
      let checkingAccount = new CheckingAccount(accountNumber, overdraftLimit);
      checkingAccount.deposit(500);
      chai
        .expect(checkingAccount.withdraw.bind(checkingAccount, 0))
        .to.throw("Withdraw amount has to be greater than zero");
    });
  });
  
  describe("Bank", function () {
    it("Add account", function () {
      let bank = new Bank();
      bank.addAccount(50);
      bank.addCheckingAccount(100, 50);
      bank.addSavingsAccount(200, 20);
      let actualReport = bank.accountReport();
      let expectedReport =
        "Account 1: balance 50\n" +
        "CheckingAccount 2: balance 100 overdraft limit: 50\n" +
        "SavingsAccount 3: balance 200 interest rate: 20\n";
      assert.equal(actualReport, expectedReport);
    });
    it("Close account", function () {
      Bank.nextNumber = 0;
      let bank = new Bank();
      bank.addAccount(50);
      bank.addCheckingAccount(100, 50);
      bank.addSavingsAccount(200, 15);
      bank.closeAccount(2);
      let actualReport = bank.accountReport();
      let expectedReport =
        "Account 1: balance 50\n" +
        "SavingsAccount 3: balance 200 interest rate: 15\n";
      assert.equal(actualReport, expectedReport);
    });
    it("End of Month", function () {
      Bank.nextNumber = 0;
      let bank = new Bank();
      bank.addAccount(50);
      bank.addCheckingAccount(100, 50);
      bank.addSavingsAccount(200, 20);
      //withdrawing 120 from checking account
      bank.getAccount(2).withdraw(120);
      let actualReport = bank.endOfMonth();
      let expectedReport =
        "\n" +
        "Warning, low balance CheckingAccount 2: balance -20 overdraft limit: 50\n" +
        "Interest added SavingsAccount3: balance:240 interest:40\n";
      assert.equal(actualReport, expectedReport);
    });
  });