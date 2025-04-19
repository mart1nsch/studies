public class Endereco {
    private String rua, bairro, cidade, siglaEstado, siglaPais;
    private int numero;

    public Endereco(String rua, int numero, String bairro, String cidade, String siglaEstado, String siglaPais) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.siglaEstado = siglaEstado;
        this.siglaPais = siglaPais;
    }

    @Override
    public String toString() {
        return "Endereço: " + rua + ", " + numero + ", " + bairro + ", " + cidade + ", " + siglaEstado + ", " + siglaPais;
    }

}
