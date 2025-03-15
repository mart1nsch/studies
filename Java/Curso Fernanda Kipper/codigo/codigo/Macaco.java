package codigo;

public abstract class Macaco {
    String nome;

    public Macaco(String nome) {
        this.nome = nome;
    }

    public abstract String getNome();

    public void comerBanana() {
        System.out.println("Banana comida pelo " + getNome());
    }
}
