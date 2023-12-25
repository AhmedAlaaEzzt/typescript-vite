import { BankAccount } from "./BankAccount";

const myAccount = new BankAccount("User Name", "00001", 1000, 1);

myAccount.displayAccountInfo();
myAccount.deposit(500);
myAccount.displayAccountInfo();
