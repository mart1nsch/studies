import javax.swing.*;
import java.awt.*;
import java.util.Date;

public class Main {
    public static void main(String [] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.setResizable(false);

        Panel panel = new Panel();
        panel.setPreferredSize(new Dimension(400, 400));
        frame.add(panel);

        frame.pack();
        frame.setVisible(true);

        long lastTime = 0;

        while(true) {
            Date date = new Date();

            if ((date.getTime() - lastTime) > 500) {
                lastTime = date.getTime();
                panel.repaint();
            }
        }
    }

}
