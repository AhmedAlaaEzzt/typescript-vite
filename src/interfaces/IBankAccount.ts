export interface IBankAccount {
  transactionCount: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  displayAccountInfo(): void;
}
