package codigo;

public class Orangotango extends Macaco{
    public Orangotango(String nome) {
        super(nome);
    }

    @Override
    public String getNome() {
        return this.nome;
    }
}
