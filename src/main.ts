import { BankAccount } from "./BankAccount";
import { SavingsAccount } from "./SavingsAccount";

const myAccount = new BankAccount("BankAccount User", "00001", 1000, 1);

myAccount.displayAccountInfo();

const savingsAccount = new SavingsAccount(
  "SavingsAccount User",
  "00002",
  100,
  1,
  0.1
);

savingsAccount.displayAccountInfo();
