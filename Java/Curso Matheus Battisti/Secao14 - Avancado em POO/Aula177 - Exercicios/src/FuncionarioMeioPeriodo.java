public class FuncionarioMeioPeriodo extends Funcionario implements Beneficios {

    public FuncionarioMeioPeriodo(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularSalario() {
        return (this.salario + this.adicionarBeneficios());
    }

    @Override
    public double adicionarBeneficios() {
        return 100;
    }
}
