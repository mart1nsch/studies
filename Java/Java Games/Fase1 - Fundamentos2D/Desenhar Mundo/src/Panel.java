import javax.swing.*;
import java.awt.*;

public class Panel extends JPanel {

    public Panel() {
        super();
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        g.setColor(Color.BLUE);
        g.fillRect(50, 50, 50, 50);
    }
}
