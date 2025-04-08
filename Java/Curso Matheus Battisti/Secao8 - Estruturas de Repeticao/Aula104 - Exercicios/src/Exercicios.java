import java.util.ArrayList;
import java.util.Scanner;

public class Exercicios {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        /*// Exercicio 1
        System.out.println(exercicio1());

        // Exercicio 2
        exercicio2();

        // Exercicio 3
        exercicio3(scanner);

        // Exercicio 4
        exercicio4(scanner);

        // Exercicio 6
        System.out.println(exercicio6(scanner));*/

        // Exercicio 7
        System.out.println(exercicio7(scanner));

        scanner.close();

    }

    public static int exercicio1() {
        int soma = 0;

        for (int i = 1; i <= 100; i++) {
            soma += i;
        }

        return soma;
    }

    public static void exercicio2() {
        int i = 1;

        while (i <= 20) {
            if (i % 2 == 0) {
                System.out.println(i);
            }

            i++;
        }
    }

    public static void exercicio3(Scanner scanner) {
        boolean primo = true;

        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();

        if (numero <= 1) {
            primo = false;
        }

        for (int i = (numero - 1); i > 1; i--) {
            if (numero % i == 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            System.out.println("Primo");
        } else {
            System.out.println("Não é primo");
        }
    }

    public static void exercicio4(Scanner scanner) {
        while (true) {
            System.out.println("Escolha uma opção: ");
            System.out.println("1. Comer");
            System.out.println("2. Dar parabéns");
            System.out.println("3. Sair");
            int opcao = scanner.nextInt();

            //scanner.nextLine();

            if (opcao == 1) {
                System.out.println("Comeu");
            } else if (opcao == 2) {
                System.out.println("Deu os parabéns");
            } else {
                System.out.println("Saindo...");
                break;
            }
        }
    }

    public static int exercicio6(Scanner scanner) {
        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();
        scanner.nextLine();

        if (numero < 0) {
            return -1;
        }

        String numeroString = String.valueOf(numero);

        return numeroString.length();
    }

    public static ArrayList<Integer> exercicio7(Scanner scanner) {

        System.out.println("Digite o número de números da sequência Fibonacci: ");
        int n = scanner.nextInt();

        ArrayList<Integer> lista = new ArrayList<Integer>();
        lista.add(0);
        lista.add(1);

        for (int i=2; i<n; i++) {

            int somaAnteriores = lista.getLast() + lista.get((lista.size() - 2));

            lista.add(somaAnteriores);

        }

        return lista;

    }

}
