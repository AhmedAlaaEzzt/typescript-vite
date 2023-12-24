class BankAccount {
  private _transactionCount;

  constructor(transactionCount: number) {
    this._transactionCount = transactionCount;
  }

  public get transactionCount() {
    return this._transactionCount;
  }
}

const myAccount = new BankAccount(5);

console.log(myAccount);
