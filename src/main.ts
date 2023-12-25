import { BankAccount } from "./BankAccount";
import { ISavingsAccount } from "./interfaces/ISavingsAccount";

const myAccount = new BankAccount("BankAccount User", "00001", 1000, 1);

myAccount.displayAccountInfo();

class SavingsAccount extends BankAccount implements ISavingsAccount {
  private interestRate: number; // Annual interest rate
  constructor(
    accountHolder: string,
    accountNumber: string,
    balance: number,
    transactionCount: number,
    interestRate: number
  ) {
    super(accountHolder, accountNumber, balance, transactionCount);
    this.interestRate = interestRate;
  }
  displayAccountInfo() {
    super.displayAccountInfo(false);
    console.log(`Interest Rate: ${this.interestRate}%`);
    console.log(`============= Ending of info =============`);
  }
}

const savingsAccount = new SavingsAccount(
  "SavingsAccount User",
  "00002",
  100,
  1,
  0.1
);

savingsAccount.displayAccountInfo();
