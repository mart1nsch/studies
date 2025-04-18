public class TesteExercicios {
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
        //exercicio5();
    }

    public static void exercicio1() {
        Celular celular = new Celular("Apple", "iPhone 13 Mini");

        System.out.println(celular.getMarca());
        System.out.println(celular.getModelo());
        System.out.println(celular.getBateria());

        System.out.println(celular.ligar());
        System.out.println(celular.desligar());
        System.out.println(celular.usarCelular());
        System.out.println(celular.ligar());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.usarCelular());
        System.out.println(celular.ligar());
    }

    public static void exercicio2() {
        Aluno aluno1 = new Aluno("Martin Schneider", 194, 95);
        Aluno aluno2 = new Aluno("Ana Karoline de Mello", 195, 100);
        Aluno aluno3 = new Aluno("Gustavo Braun", 180, -1);

        System.out.println(aluno1.getNome() + ": " + aluno1.getNotaFinal());
        System.out.println(aluno2.getNome() + ": " + aluno2.getNotaFinal());
        System.out.println(aluno3.getNome() + ": " + aluno3.getNotaFinal());
    }

    public static void exercicio3() {
        ContaCorrente contaCorrente = new ContaCorrente("Martin Schneider", 0, 10);

        System.out.println(contaCorrente.exibirSaldo());
        contaCorrente.depositar(5);
        System.out.println(contaCorrente.exibirSaldo());
        contaCorrente.sacar(15);
        System.out.println(contaCorrente.exibirSaldo());
        contaCorrente.sacar(6);
        System.out.println(contaCorrente.exibirSaldo());
        contaCorrente.sacar(3);
        System.out.println(contaCorrente.exibirSaldo());

    }

    public static void exercicio4() {
        ProdutoEletronico produtoEletronico = new ProdutoEletronico("Mouse", 499.90, 1);

        produtoEletronico.aplicarDesconto(50);
        System.out.println(produtoEletronico.getPreco());
    }

    public static void exercicio5() {
        LivroBiblioteca livroBiblioteca = new LivroBiblioteca("Código Limpo", "Robert C. Martin");

        livroBiblioteca.pegarEmprestado();
        livroBiblioteca.pegarEmprestado();
        livroBiblioteca.devolverEmprestado();
        livroBiblioteca.devolverEmprestado();
    }
}