import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Exercicios {
    public static void main(String[] args) {
        // Exercicio 1
        int[] arrayOriginal = { 15, 36, 2, 9, 78, 10, 10, 15, 15, 10, 10 };
        int[] arrayCopia = new int[arrayOriginal.length];
        int contador = 0;

        for (int i=(arrayOriginal.length - 1); i>=0; i--) {
            arrayCopia[contador] = arrayOriginal[i];
            contador++;
        }

        System.out.println("Array Original:");
        System.out.println(Arrays.toString(arrayOriginal));
        System.out.println("Array Copia:");
        System.out.println(Arrays.toString(arrayCopia));

        // Exercicio 2
        exercicio2(arrayOriginal);

        // Exercicio 3
        exercicio3();

        // Exercicio 4
        exercicio4();

        // Exercicio 5
        int[] arrayComDuplicados = { 15, 10, 2, 15, 3, 2, 2, 9, 10 };

        System.out.println("Array duplicado sujo");
        System.out.println(Arrays.toString(arrayComDuplicados));

        for (int i=0; i<arrayComDuplicados.length; i++) {
            for(int j=(i+1); j<arrayComDuplicados.length; j++) {
                if (arrayComDuplicados[i] == arrayComDuplicados[j]) {
                    arrayComDuplicados[j] = 0;
                }
            }
        }

        System.out.println("Array duplicado limpo");
        System.out.println(Arrays.toString(arrayComDuplicados));

    }

    public static void exercicio2(int[] arrayOriginal) {
        ArrayList<Integer> numeroAparicoes = new ArrayList<Integer>();
        ArrayList<Integer> elementosMaisAparicoes = new ArrayList<Integer>();
        int maxContagem = 1;
        String elementoMaiorFrequencia = "O(s) elemento(s) com maior(es) frequencia(s): ";

        for (int i=0; i<arrayOriginal.length; i++) {
            int contaNumeroAparicoes = 0;

            for (int valor : arrayOriginal) {
                if (arrayOriginal[i] == valor) {
                    contaNumeroAparicoes++;
                }
            }

            if (maxContagem < contaNumeroAparicoes) {
                maxContagem = contaNumeroAparicoes;
            }

            numeroAparicoes.add(contaNumeroAparicoes);
        }

        for (int i=(numeroAparicoes.size() - 1); i>=0; i--) {
            if (numeroAparicoes.get(i) == maxContagem) {
                elementosMaisAparicoes.add(arrayOriginal[i]);
            }
        }

        Collections.sort(elementosMaisAparicoes);

        int anterior = -1999999999;

        for (int valor : elementosMaisAparicoes) {
            if (anterior != valor) {
                elementoMaiorFrequencia += valor + " ";
            }
            anterior = valor;
        }

        System.out.println(elementoMaiorFrequencia);
    }

    public static void exercicio3() {
        int[][] array2D = {
                { 10, 15, 18, 19 },
                { 20, 25, 28, 29 },
                { 30, 35, 38, 39 }
        };
        int[][] novoArray2D = new int[array2D[0].length][array2D.length];

        for (int i=0; i<array2D.length; i++) {
            for (int j=0; j<array2D[i].length; j++) {
                novoArray2D[j][i] = array2D[i][j];
            }
        }

        System.out.println("Matriz Original");
        for (int[] valor : array2D) {
            System.out.println(Arrays.toString(valor));
        }

        System.out.println("Matriz Nova");
        for (int[] valor : novoArray2D) {
            System.out.println(Arrays.toString(valor));
        }
    }

    public static void exercicio4() {
        int[] arrayNegativo = { -1, 3, 4, -2, -9 };

        System.out.println("Array antes de mexer");
        System.out.println(Arrays.toString(arrayNegativo));

        for (int i=0; i<arrayNegativo.length; i++) {
            if (arrayNegativo[i] < 0) {
                arrayNegativo[i] = 0;
            }
        }

        System.out.println("Array depois de mexer");
        System.out.println(Arrays.toString(arrayNegativo));
    }

}
