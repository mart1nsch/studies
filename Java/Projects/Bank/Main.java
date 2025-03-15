import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        boolean loggedIn = false;
        int option = 0;
        Account[] accounts = new Account[99];
        Scanner scanner = new Scanner(System.in);

        while (true) {
            if (loggedIn) {

            } else {
                System.out.println("Bem-vindo!");
                System.out.println("Escolha uma das seguintes opções:");
                System.out.println("1. Já sou cliente, desejo logar");
                System.out.println("2. Não sou cliente, desejo me cadastrar");
                System.out.println("3. Sair");
                option = 0;
                option = scanner.nextInt();

                if (option == 1) {
                    System.out.println("Digite o seu nome: ");
                    String nome = scanner.nextLine();
                    System.out.println("Digite a sua senha: ");
                    String password = scanner.nextLine();

                    boolean existAccount = false;
                    boolean passwordInvalid = false;

                    for (Account account : accounts) {
                        if (nome == account.getOwnerName()) {
                            existAccount = true;

                            if (!password.equals(account.getPassword())) {
                                passwordInvalid = true;
                            }
                        }
                    }

                    if (!existAccount) {
                        System.out.println("Conta inexistente");
                    } else if(!passwordInvalid) {
                        System.out.println("Senha inválida");
                    }
                } else if (option == 2) {

                } else if (option == 3) {
                    System.out.println("Sistema finalizado, até mais!");
                    break;
                }
            }

        }

    }

    protected void requestLogin() {

    }

    protected void createAccount() {

    }

}
