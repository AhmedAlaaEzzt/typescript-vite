import { BankAccount } from "./BankAccount";

const myAccount = new BankAccount("User Name", "00001", 1000, 1);

myAccount.displayAccountInfo();
myAccount.deposit(500);
myAccount.displayAccountInfo();

class SavingsAccount extends BankAccount {
  private interestRate: number; // Annual interest rate
}

const savingsAccount = new SavingsAccount("User Name 02", "00002", 100, 1);
