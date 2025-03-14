import java.util.ArrayList;

public class Main {
    static public void main(String[] args) {
        // ArrayList
        ArrayList<String> nomes = new ArrayList<>();

        nomes.add("Martin");
        nomes.add("Karol");
        nomes.add("Marcio");
        nomes.add("Alaire");

        nomes.remove(0);

        nomes.remove("Marcio");

        System.out.println(nomes.get(1));

        // Loops
        ArrayList<Integer> numeros = new ArrayList<>();

        for (int i=0; i<10; i++) {
            numeros.add(i * 3);
        }

        System.out.println(numeros);

        for (int numero : numeros) {
            System.out.println("Número: " + numero);
        }

        int contador = 0;
        while (contador < 10) {
            contador++;
        }

        // Casting
        double idadeEmDouble = 23.2;
        String idadeEmString = "23";
        int idadeEmInt = (int) idadeEmDouble;
        idadeEmInt = Integer.parseInt(idadeEmString);
        idadeEmString = String.valueOf(idadeEmInt);
    }
}
