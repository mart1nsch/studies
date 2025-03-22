import java.util.Scanner;

public class Login {
    boolean loggedIn;
    Scanner scanner;

    public Login() {
        this.loggedIn = false;
        this.scanner = new Scanner(System.in);
    }

    public int welcome() {
        System.out.println("Escolha uma opção abaixo: ");
        System.out.println("1. Efetuar Login");
        System.out.println("2. Criar Conta");
        System.out.println("3. Sair");
        return scanner.nextInt();
    }

    public boolean login() {
        System.out.println("Seu email: ");
        String email = scanner.nextLine();
        System.out.println("Sua senha: ");
        String senha = scanner.nextLine();

        if (email == "martin" && senha == "123") {
            this.loggedIn = true;
            System.out.println("Bem vindo!");
            return true;
        } else {
            System.out.println("Email ou senha incorretos!");
            int userOption = this.welcome();

            if (userOption == 1) {
                this.login();
            } else if (userOption == 2) {
                this.createAccount();
            } else {
                return false;
            }
        }

        return false;
    }

    public void createAccount() {

    }
}
