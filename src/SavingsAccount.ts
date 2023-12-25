import { BankAccount } from "./BankAccount";
import { ISavingsAccount } from "./interfaces/ISavingsAccount";

export class SavingsAccount extends BankAccount implements ISavingsAccount {
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
