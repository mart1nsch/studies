public class Loteria {
    public static void main(String[] args) {
        int[] numerosEscolhidos = { 3, 12, 26, 38, 54 };

        Bilhete bilhete = new Bilhete(numerosEscolhidos);

        bilhete.realizarSorteio();
    }

}
