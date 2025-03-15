package codigo;

public class Chimpanze extends Macaco{
    public Chimpanze(String nome) {
        super(nome);
    }

    @Override
    public String getNome() {
        return this.nome;
    }
}
