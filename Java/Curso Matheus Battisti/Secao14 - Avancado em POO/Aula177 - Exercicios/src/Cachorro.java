public class Cachorro extends Animal {
    private String raca;

    public Cachorro(String nome, String som, String raca) {
        super(nome, som);
        this.raca = raca;
    }

    public void exibirDetalhes() {
        System.out.println(super.toString());
        System.out.println("Raça: " + raca);
    }

}
