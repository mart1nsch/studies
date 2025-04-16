public class TesteExercicios {
    public static void main(String[] args) {
        // Exercicio 1
        //exercicio1();

        // Exercicio 2
        exercicio2();
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
}