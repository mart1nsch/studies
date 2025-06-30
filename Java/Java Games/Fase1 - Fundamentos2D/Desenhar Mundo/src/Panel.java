import javax.swing.*;
import java.awt.*;

public class Panel extends JPanel {
    public Panel() {
        super();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        int [][] mundo = new int[40][40];
        Color [] colors = { Color.BLUE, Color.RED, Color.GREEN, Color.YELLOW, Color.ORANGE };
        int posX = 0;
        int posY = 0;

        for (int i=0; i<mundo.length; i++) {
            posX = 0;
            for (int j=0; j<mundo[i].length; j++) {
                g.setColor(colors[(int)(Math.random() * 5)]);
                g.fillRect(posX, posY, 10, 10);
                posX += 10;
            }
            posY += 10;
        }

    }

}
