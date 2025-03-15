public class Account {
    int accountNumber;
    String ownerName;
    String password;
    double balance = 0;

    public Account(String ownerName, String password) {
        this.accountNumber = 1;
        this.ownerName = ownerName;
        this.password = password;
    }

    protected double getBalance() {
        return balance;
    }

    protected void deposit(double amount) {
        this.setBalance('+', amount);
    }

    protected void withdraw(double amount) {
        this.setBalance('-', amount);
    }

    protected void setBalance(char operation, double balance) {
        if (operation == '+') {
            this.balance += balance;
        } else if (operation == '-') {
            this.balance -= balance;

            if (this.balance < 0) {
                System.out.println("Operação irá negativar o balanço. Operação não permitida.");
                this.balance += balance;
            }
        }
    }

    protected String getOwnerName() {
        return ownerName;
    }

    protected String getPassword() {
        return password;
    }

}
