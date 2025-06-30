import java.io.BufferedReader;
import java.io.FileReader;

public class World {

    public int[][] world;

    public World() {
        this.world = new int[10][10];
        importWorld();
    }

    private void importWorld() {
        try {
            FileReader file = new FileReader("world1.txt");
            BufferedReader buff = new BufferedReader(file);

            int contador = 0;
            String line = buff.readLine();

            while (line != null) {
                for (int i=0; i<line.length(); i++) {
                    this.world[contador][i] = line.charAt(i);
                }

                contador += 1;
                line = buff.readLine();
            }

            for (int i=0; i<this.world.length; i++) {
                for (int j=0; j<this.world[i].length; j++) {
                    System.out.println(this.world[i][j]);
                }
            }
        } catch (Exception e) {
            System.out.println("Erro ao ler arquivo: " + e);
        }
    }
}
