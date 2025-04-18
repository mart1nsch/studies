public class ContaCorrente {
    private String titular;
    private double saldo, limiteSaque;

    public ContaCorrente(String titular, double saldo, double limiteSaque) {
        this.titular = titular;
        this.saldo = saldo;
        this.limiteSaque = limiteSaque;
    }

    public void depositar(double valor) {
        this.saldo = this.calculaDeposito(valor);
    }

    public void sacar(double valor) {
        if (!this.liberaSaque(valor)) {
            this.informarLimiteSaqueUltrapassado();
            return;
        }

        double saldoCalculado = this.calculaSaque(valor);

        if (saldoCalculado < 0) {
            this.informarSaldoInsuficiente();
            return;
        }

        this.saldo = saldoCalculado;
    }

    public String exibirSaldo() {
        return "O saldo da conta do titular " + this.titular + " é de R$" + this.saldo;
    }

    private boolean liberaSaque(double valorSaque) {
        return valorSaque <= limiteSaque;
    }

    private double calculaSaque(double valor) {
        return (this.saldo - valor);
    }

    private void informarLimiteSaqueUltrapassado() {
        System.out.println("Valor de saque maior que o limite " + this.limiteSaque);
    }

    private void informarSaldoInsuficiente() {
        System.out.println("Valor de saque não pode ser maior que o saldo em conta: " + this.saldo);
    }

    private double calculaDeposito(double valor) {
        return (this.saldo + valor);
    }
}
