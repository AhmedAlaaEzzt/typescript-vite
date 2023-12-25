class BankAccount {
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
}

const myAccount = new BankAccount("User Name", "00001", 1000, 1);

console.log(myAccount);
