public class LivroBiblioteca {
    private String titulo, autor;
    private boolean disponivel;

    public LivroBiblioteca(String titulo, String autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    public void pegarEmprestado() {
        if (!this.verificaLivroDisponivel()) {
            informaLivroNaoDisponivel();
            return;
        }

        this.setDisponivel(false);
        System.out.println("Livro Retirado com Sucesso!");
    }

    public void devolverEmprestado() {
        if (this.verificaLivroDisponivel()) {
            informaLivroDisponivel();
            return;
        }

        this.setDisponivel(true);
        System.out.println("Livro Devolvido com Sucesso!");
    }

    private void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    private boolean verificaLivroDisponivel() {
        return this.disponivel;
    }

    private void informaLivroNaoDisponivel() {
        System.out.println("Este livro não está disponível");
    }

    private void informaLivroDisponivel() {
        System.out.println("Este livro está disponível");
    }
}
