import java.util.Scanner;

public class Exercicios {
    public static void main(String[] args) {
        // Exercicio 1
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o valor de um produto: ");
        float precoProduto = scanner.nextFloat();

        if (precoProduto < 50) {
            System.out.println("Barato");
        } else if (precoProduto >= 50 && precoProduto <= 100) {
            System.out.println("Médio");
        } else if (precoProduto > 100) {
            System.out.println("Caro");
        } else {
            System.out.println("Valor inválido.");
        }

        scanner.nextLine();

        // Exercicio 2
        System.out.println("Digite o nome de um usuário: ");
        String nomeUsuario = scanner.nextLine();

        System.out.println("Digite a senha: ");
        String senhaUsuario = scanner.nextLine();

        if (nomeUsuario.equals("admin") && senhaUsuario.equals("1234")) {
            System.out.println("Acesso permitido");
        } else {
            System.out.println("Acesso negado");
        }

        // Exercicio 3
        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();

        if (numero == 0) {
            System.out.println("Número é 0.");
        } else if (numero % 2 == 0) {
            System.out.println("Par");
        } else if (numero % 2 == 1) {
            System.out.println("Ímpar");
        } else {
            System.out.println("Número inválido.");
        }

        scanner.nextLine();

        // Exercicio 4
        System.out.println("Digite um número de 1 a 7 representando a semana: ");
        int numeroSemana = scanner.nextInt();

        if (numeroSemana == 1 || numeroSemana == 7) {
            System.out.println("Final de semana");
        } else if (numeroSemana > 1 && numeroSemana < 7) {
            System.out.println("Dia de semana");
        } else {
            System.out.println("Número inválido");
        }

        scanner.nextLine();

        // Exercicio 5
        System.out.println("Digite um número: ");
        int numeroIntervalo = scanner.nextInt();

        if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {
            System.out.println("Dentro do intervalo");
        } else {
            System.out.println("Fora do intervalo");
        }

        scanner.nextLine();

        // Exercicio 6
        System.out.println("Digite uma letra: ");
        String letra = scanner.nextLine();
        letra = letra.toLowerCase();

        switch (letra) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                System.out.println("Vogal");
                break;
            default:
                System.out.println("Consoante");
                break;
        }

        scanner.close();
    }
}
