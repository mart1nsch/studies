import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o primeiro número: ");
        double primeiroNumero = scanner.nextDouble();
        scanner.nextLine();

        System.out.println("Digite o segundo número: ");
        double segundoNumero = scanner.nextDouble();
        scanner.nextLine();

        System.out.println("Digite a operação: ");
        String operacao = scanner.nextLine();

        String retornoCalculo = realizaCalculo(primeiroNumero, segundoNumero, operacao);

        System.out.println("Resultado: " + retornoCalculo);

        scanner.close();
    }

    public static String realizaCalculo(double primeiroNumero, double segundoNumero, String operacao) {

        double resultado = -1;

        if (operacao.equals("+")) {
            resultado = primeiroNumero + segundoNumero;
        } else if (operacao.equals("-")) {
            resultado = primeiroNumero - segundoNumero;
        } else if (operacao.equals("*")) {
            resultado = primeiroNumero * segundoNumero;
        } else if (operacao.equals("/")) {
            if (segundoNumero == 0) {
                return "Err: Divisor é igual a 0.";
            }
            resultado = primeiroNumero / segundoNumero;
        } else {
            return "Err: Operação inválida.";
        }

        return String.valueOf(resultado);

    }

}
