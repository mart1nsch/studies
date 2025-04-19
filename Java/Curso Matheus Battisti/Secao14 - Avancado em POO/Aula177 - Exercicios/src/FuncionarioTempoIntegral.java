public class FuncionarioTempoIntegral extends Funcionario implements Beneficios {

    public FuncionarioTempoIntegral(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularSalario() {
        return (this.salario + this.adicionarBeneficios());
    }

    @Override
    public double adicionarBeneficios() {
        return 400;
    }
}
