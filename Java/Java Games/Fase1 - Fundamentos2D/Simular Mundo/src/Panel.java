import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;

public class Panel extends JPanel {
    private BufferedImage image;
    private World world;
    public Player player;

    public Panel() {
        super();

        world = new World();
        player = new Player();

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
        player.paintPlayer(g);
    }

    private void paintBackground(Graphics g) {
        g.drawImage(this.image, 0, 0, this);
    }

    private void paintWorld(Graphics g) {
        int x = 0;
        int y = 0;
        int width = 50;
        int height = 50;

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
}
