package Testes;

import java.util.*;

public class AgendaContatos {
    Map<String, String> agenda; // Usa o Map como se fosse um array, mas ele usa a primeira chave como primária, ou seja, não tem itens duplicados

    public AgendaContatos() {
        agenda = new HashMap<>(); // Inicializa o Map
    }

    public void adicionaAtualizaContato(String nome, String telefone) {
        agenda.put(nome, telefone); // Coloca informação no Map, se já tiver um dado com a mesma chave, ele só atualiza a informação
    }

    public void removeContato(String nome) {
        agenda.remove(nome); // Remove do Map
    }

    public void listarContato(String nome) {
        System.out.println(agenda.get(nome));
    }

    public void listarTodosContatos() {
        for (Map.Entry<String, String> contato : agenda.entrySet()) { // Faz o loop em todos os registros do Map
            System.out.println(contato.getKey() + ": " + contato.getValue());
        }
    }

}
