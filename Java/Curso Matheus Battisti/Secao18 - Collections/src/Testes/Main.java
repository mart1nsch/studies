package Testes;

public class Main {

    public static void main(String[] args) {
        AgendaContatos agenda = new AgendaContatos();

        agenda.adicionaAtualizaContato("Martin Schneider", "54 999381614");
        agenda.adicionaAtualizaContato("Ana Karoline de Mello", "54 982637777");

        agenda.listarContato("Martin Schneider");

        agenda.listarTodosContatos();

        agenda.removeContato("Martin Schneider");

        agenda.listarTodosContatos();

    }
}
