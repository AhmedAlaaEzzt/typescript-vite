class BankAccount {
  transactionCount = 0;
}

const myAccount = new BankAccount();
myAccount.transactionCount = 100;

console.log(myAccount);
