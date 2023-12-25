export class BankAccount {
  private accountHolder: string;
  private accountNumber: string;
  private balance: number;
  private _transactionCount;

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

  displayAccountInfo() {
    console.log(`============= Starting of info =============`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: $${this.balance}`);
    console.log(`Total Transactions: ${this.transactionCount}`);
    console.log(`============= Ending of info =============`);
  }
}
