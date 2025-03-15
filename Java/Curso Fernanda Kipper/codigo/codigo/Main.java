package codigo;

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

        // Classes
        Carro carro = new Carro("Fusca");
        System.out.println(carro.getModelo());

        carro.setModelo("Gol");
        carro.acelerar();
        carro.acelerar();
        carro.acelerar();
        carro.freiar();
        System.out.println(carro.getModelo());
        System.out.println(carro.getVelocidade());

        // Interface
        Fruta banana = new Banana();
        Fruta tomate = new Tomate();

        banana.comer();
        tomate.comer();

        // Classes Abstratas e Herança
        Macaco orangotango = new Orangotango("Orangotango");

        orangotango.comerBanana();

        // Exceções
        Macaco chimpanze = null;

        try {
            chimpanze.comerBanana();
        } catch(NullPointerException e) {
            chimpanze = new Chimpanze("Chimpanzé");
            chimpanze.comerBanana();
        }
    }
}

class Carro {
    String modelo;
    int velocidade;

    public Carro(String modelo) {
        this.modelo = modelo;
        this.velocidade = 0;
        System.out.println("Carro criado");
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setVelocidade(int velocidade) {
        this.velocidade += velocidade;
    }

    public int getVelocidade() {
        return velocidade;
    }

    public void acelerar() {
        setVelocidade(1);
    }

    public void freiar() {
        setVelocidade(-1);
    }
}