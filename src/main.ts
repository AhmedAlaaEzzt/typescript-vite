import { BankAccount } from "./BankAccount";
import { ISavingsAccount } from "./interfaces/ISavingsAccount";

const myAccount = new BankAccount("User Name", "00001", 1000, 1);

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
}

const savingsAccount = new SavingsAccount("User Name 02", "00002", 100, 1, 0.1);
