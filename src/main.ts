import { BankAccount } from "./BankAccount";

const myAccount = new BankAccount("User Name", "00001", 1000, 1);

class SavingsAccount extends BankAccount {
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
}

const savingsAccount = new SavingsAccount("User Name 02", "00002", 100, 1, 0.1);

console.log(savingsAccount);
