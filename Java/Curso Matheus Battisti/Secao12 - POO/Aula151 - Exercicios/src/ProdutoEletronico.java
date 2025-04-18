public class ProdutoEletronico {
    private String nome;
    private double preco;
    private int garantia;

    public ProdutoEletronico(String nome, double preco, int garantia) {
        this.nome = nome;
        this.preco = preco;
        this.garantia = garantia;
    }

    public void aplicarDesconto(double percentualDesconto) {
        this.preco = this.calculaValorDoDesconto(percentualDesconto);
    }

    private double calculaValorDoDesconto(double percentual) {
        return ((percentual / 100) * this.preco);
    }

    public double getPreco() {
        return preco;
    }
}
