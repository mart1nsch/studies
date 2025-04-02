import java.util.Scanner;

public class Exercicios {
    public static void main(String[] args) {
        // Exercicio 1
        int valor = 10;
        int dobro = valor * 2;
        System.out.println(dobro);

        // Exercicio 2
        char letra = 'B';
        int letraInt = (int) letra;
        System.out.println(letraInt);

        // Exercicio 3
        double valor1 = 15.75;
        double valor2 = 20.40;
        double soma = valor1 + valor2;
        System.out.println(soma);

        // Exercicio 4
        long valorLong = 2_000_000_000L;
        int valorInt = (int) valorLong;
        System.out.println(valorInt);

        // Exercicio 5
        String ola = "Olá, Mundo!";
        String olaConcatenado = ola + " Bem-vindo ao Java!";
        System.out.println(olaConcatenado);

        // Exercicio 6
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o seu nome: ");
        String nome = scanner.nextLine();
        System.out.println("Olá " + nome + "!");
        scanner.close();

    }

}
