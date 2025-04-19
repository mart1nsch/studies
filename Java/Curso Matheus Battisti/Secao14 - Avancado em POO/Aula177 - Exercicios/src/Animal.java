public class Animal {
    private String nome, som;

    public Animal(String nome, String som) {
        this.nome = nome;
        this.som = som;
    }

    @Override
    public String toString() {
        return "Nome do animal: " + nome + ", Som que emite: " + som;
    }

}
