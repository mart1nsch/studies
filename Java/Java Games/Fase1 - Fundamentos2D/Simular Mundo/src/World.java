import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Arrays;

public class World {

    public char[][] world;

    public World() {
        this.world = new char[10][10];
        importWorld();
    }

    private void importWorld() {
        try {
            FileReader file = new FileReader("world1.txt");
            BufferedReader buff = new BufferedReader(file);

            int contador = 0;
            String line = buff.readLine();

            while (line != null) {
                for (int i = 0; i < line.length(); i++) {
                    this.world[contador][i] = line.charAt(i);
                }

                contador += 1;
                line = buff.readLine();
            }
        } catch (Exception e) {
            System.out.println("Erro ao ler arquivo: " + e);
        }
    }
}
