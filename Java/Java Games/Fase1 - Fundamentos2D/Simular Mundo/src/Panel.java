import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;

public class Panel extends JPanel {
    private BufferedImage image;

    public Panel() {
        super();

        try {
            image = ImageIO.read(new File("fundo1.png"));
        } catch(Exception e) {
            System.out.println(e);
        }
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        paintBackground(g);
        paintWorld(g);
        paintPlayer(g);
    }

    private void paintBackground(Graphics g) {
        g.drawImage(this.image, 0, 0, this);
    }

    private void paintWorld(Graphics g) {
        int x = 0;
        int y = 0;
        int width = 50;
        int height = 50;
        World world = new World();

        for (int i=0; i<world.world.length; i++) {
            for (int j=0; j<world.world[i].length; j++) {
                if (world.world[i][j] == '1') {
                    g.setColor(Color.RED);
                    g.fillRect(x, y, width, height);
                    x += width;
                }
            }
            x = 0;
            y += height;
        }
    }

    private void paintPlayer(Graphics g) {
        int width = 20;
        int height = 20;

        Player player = new Player(0, 0, width, height);
        g.setColor(Color.BLUE);
        g.fillRect(0, 0, width, height);
    }
}
