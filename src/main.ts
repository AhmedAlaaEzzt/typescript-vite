class BankAccount {
  private _transactionCount = 0;

  public get transactionCount() {
    return this._transactionCount;
  }
}

const myAccount = new BankAccount();

console.log(myAccount);
