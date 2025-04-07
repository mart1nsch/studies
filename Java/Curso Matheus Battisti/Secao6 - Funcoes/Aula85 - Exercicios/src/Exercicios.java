import java.util.ArrayList;

public class Exercicios {
    public static void main(String[] args) {
        // Exercicio 1
        System.out.println(retornaFahrenheit(36));

        // Exercicio 2
        System.out.println(retornaFatorial(6));

        // Exercicio 3
        System.out.println(verificaParImpar(6));
        System.out.println(verificaParImpar(0));
        System.out.println(verificaParImpar(7));

        // Exercicio 4
        System.out.println(verificaNota(65));
        System.out.println(verificaNota(33));
        System.out.println(verificaNota(98));

        // Exercicio 5
        System.out.println(verificaIdade(17));
        System.out.println(verificaIdade(23));

        // Exercicio 6
        int[] numeros = { 12, 1, 15, 5 };
        System.out.println(maiorNumero(numeros));

    }

    public static double retornaFahrenheit(double celsius) {
        return ((celsius * 1.8) + 32);
    }

    public static int retornaFatorial(int numero) {
        if (numero == 0 || numero == 1) {
            return 1;
        }

        int total = numero;

        for (int i = (numero - 1); i > 0; i--) {
            total *= i;
        }

        return total;
    }

    public static String verificaParImpar(int numero) {
        if (numero == 0) {
            return "Número é 0";
        } else if (numero % 2 == 0) {
            return "Par";
        } else {
            return "Ímpar";
        }
    }

    public static String verificaNota(int nota) {
        if (nota < 0 || nota > 100) {
            return "Nota inválida";
        }

        if (nota >= 80) {
            return "A";
        } else if (nota >= 60) {
            return "B";
        } else if (nota >= 40) {
            return "C";
        } else if (nota >= 20) {
            return "D";
        } else {
            return "F";
        }
    }

    public static String verificaIdade(int idade) {
        return idade < 18 ? "Acesso negado" : "Acesso permitido";
    }

    public static int maiorNumero(int[] numeros) {
        int maior = numeros[0];

        for (int i = 0; i < numeros.length; i++) {
            if (maior < numeros[i]) {
                maior = numeros[i];
            }
        }

        return maior;
    }
}
