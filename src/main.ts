function logMessage(message: string, timestamp: Date, details: string) {
  let log = `${message} at ${timestamp.toLocaleTimeString()} - ${details}`;

  console.log(log);
}

logMessage("Payment processed", new Date(), "Success"); // Output: "Payment processed at <current time> - Success"
logMessage("User logged out", new Date()); // Output: "User logged out at <current time>"
logMessage("User logged in"); // Output: "User logged in"
