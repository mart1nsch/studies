import java.util.Arrays;

public class Bilhete {
    private int[] numerosEscolhidos, resultadoSorteio;

    public Bilhete(int[] numerosEscolhidos) {
        this.numerosEscolhidos = numerosEscolhidos;
        this.resultadoSorteio = new int[numerosEscolhidos.length];
    }

    public void realizarSorteio() {
        this.realizaResultado();

        if (this.comparaArrays()) {
            System.out.println("Você venceu! " + Arrays.toString(this.resultadoSorteio) + "   -   " + Arrays.toString(this.numerosEscolhidos));
        } else {
            System.out.println("Você perdeu! " + Arrays.toString(this.resultadoSorteio) + "   -   " + Arrays.toString(this.numerosEscolhidos));
        }
    }

    private void realizaResultado() {
        int i = 0;

        while (i < this.numerosEscolhidos.length) {
            int numeroAleatorio = this.numeroAleatorio(1, 60);

            if (!this.validaNumeroJaSorteado(numeroAleatorio)) {
                this.resultadoSorteio[i] = numeroAleatorio;
                i++;
            }
        }

        Arrays.sort(this.resultadoSorteio);
    }

    private int numeroAleatorio(int a, int b) {
        return (int) ((Math.random() * b) + a);
    }

    private boolean comparaArrays() {
        boolean achou = false;

        for (int numero : this.resultadoSorteio) {
            achou = false;

            for (int numeroEscolhido : this.numerosEscolhidos) {
                if (numeroEscolhido == numero) {
                    achou = true;
                    break;
                }
            }

            if (!achou) {
                break;
            }
        }

        return achou;
    }

    private boolean validaNumeroJaSorteado(int numeroSorteado) {
        for (int numero : this.resultadoSorteio) {
            if (numero == numeroSorteado) {
                return true;
            }
        }

        return false;
    }

}
