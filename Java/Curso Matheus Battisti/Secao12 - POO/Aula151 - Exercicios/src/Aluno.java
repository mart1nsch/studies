public class Aluno {
    private String nome;
    private int matricula;
    private double notaFinal;

    public Aluno(String nome, int matricula, double notaFinal) {
        this.setNome(nome);
        this.matricula = matricula;
        this.setNotaFinal(notaFinal);
    }

    public void setNome(String nome) {
        if (nome.isEmpty()) {
            System.out.println("Nome não pode ser nulo.");
            return;
        }
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNotaFinal(double notaFinal) {
        if (notaFinal < 0 || notaFinal > 100) {
            System.out.println("Nota precisa ser maior que 0 e menor que 100.");
            return;
        }
        this.notaFinal = notaFinal;
    }

    public double getNotaFinal() {
        return notaFinal;
    }

}
