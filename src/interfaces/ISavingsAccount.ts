import { IBankAccount } from "./IBankAccount";

export interface ISavingsAccount extends IBankAccount {
  applyInterest(): void;
}
