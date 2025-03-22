import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int option = 0;
        Account[] accounts = new Account[99];
        Login login = new Login();

        while (true) {
            System.out.println("Bem vindo!");

            int userOption = login.welcome();

            if (userOption == 1) {
                login.login();
            } else if (userOption == 2) {
                login.createAccount();
            } else {
                break;
            }
        }
    }

}
