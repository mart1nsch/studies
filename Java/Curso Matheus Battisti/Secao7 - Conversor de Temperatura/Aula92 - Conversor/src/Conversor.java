import java.util.Scanner;

public class Conversor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o número da operação: ");
        System.out.println("1. Celsius para Fahrenheit");
        System.out.println("2. Fahrenheit para Celsius");
        int opcao = scanner.nextInt();

        scanner.nextLine();

        System.out.println("Digite o valor para conversão: ");
        double temperatura = scanner.nextDouble();

        double temperaturaConvertida = opcao == 1 ? celsiusParaFahrenheit(temperatura) : fahrenheitParaCelsius(temperatura);

        System.out.println("A temperatura convertida é de " + temperaturaConvertida);

        scanner.close();
    }

    public static double celsiusParaFahrenheit(double celsius) {
        return celsius * 1.8 + 32;
    }

    public static double fahrenheitParaCelsius(double fahrenheit) {
        return (fahrenheit - 32) / 1.8;
    }
}
