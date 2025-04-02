import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o número para retornar a tabuada");

        int numero = scanner.nextInt();

        for (int i=0; i<=10; i++) {
            System.out.println(numero + " X " + i + " = " + (numero * i));
        }

        scanner.close();
    }

}
