public class Exercicios {
    public static void main(String[] args) {
        // Exercicio 1
        //exercicio1();

        // Exercicio 2
        //exercicio2();

        // Exercicio 3
        //exercicio3();

        // Exercicio 4
        //exercicio4();

        // Exercicio 5
        exercicio5();

    }

    public static void exercicio1() {
        Endereco endereco = new Endereco("Rua Aloisio Rohr", 149, "Quatro Cantos", "Picada Café", "RS", "BR");

        System.out.println(endereco);

        Pessoa pessoa = new Pessoa("Martin Schneider", 23, endereco);

        pessoa.exibirInformacoes();
    }

    public static void exercicio2() {
        Veiculo veiculo = new Veiculo();
        veiculo.acelerar();

        Veiculo carro = new Carro();
        carro.acelerar();

        Veiculo moto = new Moto();
        moto.acelerar();
    }

    public static void exercicio3() {
        /*
        Eu não pude iniciar o objeto com Animal por conta de Animal não conhecer
        o método exibirDetalhes, apenas Cachorro conhece
        */

        Cachorro cachorro = new Cachorro("Atena", "Latido", "Pastor Alemão");

        cachorro.exibirDetalhes();
    }

    public static void exercicio4() {
        FuncionarioTempoIntegral funcionarioTempoIntegral = new FuncionarioTempoIntegral("Martin Schneider", 4600);
        FuncionarioMeioPeriodo funcionarioMeioPeriodo = new FuncionarioMeioPeriodo("Arthur Schmidt", 600);

        System.out.println("Funcionario tempo integral: " + funcionarioTempoIntegral.calcularSalario());
        System.out.println("Funcionario meio periodo: " + funcionarioMeioPeriodo.calcularSalario());
    }

    public static void exercicio5() {
        Pilotavel aviao = new Aviao();
        Navegavel barco = new Barco();
        Pilotavel hidroaviao = new Hidroaviao();

        operarVeiculo(aviao);
        operarVeiculo(barco);
        operarVeiculo(hidroaviao);
    }

    public static void operarVeiculo(Object veiculo) {
        if (veiculo instanceof Pilotavel) {
            System.out.println("Este veículo é pilotável");
        }

        if (veiculo instanceof Navegavel) {
            System.out.println("Este veículo é navegável");
        }
    }

}
