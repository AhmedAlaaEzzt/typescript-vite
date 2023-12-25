import { IBankAccount } from "./interfaces/IBankAccount";

export class BankAccount implements IBankAccount {
  private accountHolder: string;
  private accountNumber: string;
  protected balance: number;
  private _transactionCount;

  private static totalAccounts = 0;

  constructor(
    accountHolder: string,
    accountNumber: string,
    balance: number,
    transactionCount: number
  ) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this._transactionCount = transactionCount;
    BankAccount.totalAccounts++;
  }

  public get transactionCount() {
    return this._transactionCount;
  }

  deposit(amount: number) {
    this.balance += amount;
    this._transactionCount++;
    console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
  }

  withdraw(amount: number) {
    this.balance -= amount;
    this._transactionCount++;
    console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
  }

  displayAccountInfo(endingLineVisible: boolean = true) {
    console.log(`============= Starting of info =============`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: $${this.balance}`);
    console.log(`Total Transactions: ${this.transactionCount}`);
    if (endingLineVisible)
      console.log(`============= Ending of info =============`);
  }

  public static getTotalAccounts() {
    return BankAccount.totalAccounts;
  }
}
