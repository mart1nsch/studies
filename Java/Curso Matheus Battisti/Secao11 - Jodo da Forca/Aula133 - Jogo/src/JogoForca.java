import java.util.Scanner;

public class JogoForca {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        final String palavraSecreta = "FUSCA";
        char[] palavraOculta = { '_', '_', '_', '_', '_' };
        int numeroTentativas = 6;
        boolean venceu = false;
        boolean acertouAlguma = false;

        while (numeroTentativas > 0) {

            String palavraOcultaString = "";

            for (char letra : palavraOculta) {
                palavraOcultaString += letra;
            }

            System.out.println(palavraOcultaString + " - Chances: " + numeroTentativas);

            System.out.println("Chute uma palavra: ");
            String tentativa = scanner.nextLine().toUpperCase();

            if (tentativa.length() > 1) {
                venceu = chutaPalavra(palavraSecreta, tentativa);
            } else {
                acertouAlguma = chutaLetra(palavraSecreta, palavraOculta, tentativa);

                venceu = true;

                for (char letra : palavraOculta) {
                    if (letra == '_') {
                        venceu = false;
                    }
                }
            }

            if (venceu) {
                break;
            }

            if (!acertouAlguma) {
                numeroTentativas--;
            }
        }

        if (venceu) {
            System.out.println("Você venceu a morte! A palavra era " + palavraSecreta);
        } else {
            System.out.println("Você morreu enforcado! A palavra era " + palavraSecreta);
        }

        scanner.close();

    }

    public static boolean chutaPalavra(String palavraSecreta, String chute) {
        return palavraSecreta.equals(chute) ? true : false;
    }

    public static boolean chutaLetra(String palavraSecreta, char[] palavraOculta, String chute) {
        boolean acertou = false;

        for (int i=0; i<palavraSecreta.length(); i++) {
            if (palavraSecreta.charAt(i) == chute.charAt(0)) {
                if (palavraOculta[i] == '_') {
                    acertou = true;
                }
                palavraOculta[i] = palavraSecreta.charAt(i);
            }
        }
        return acertou;
    }

}
