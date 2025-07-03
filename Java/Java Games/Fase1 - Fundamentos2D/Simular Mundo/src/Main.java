import javax.swing.*;
import java.awt.*;

public class Main {

    public static void main(String [] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        KeyboardControl kc = new KeyboardControl();
        frame.addKeyListener(kc);

        Panel panel = new Panel();
        panel.setPreferredSize(new Dimension(500, 500));
        frame.add(panel);

        frame.pack();
        frame.setVisible(true);

        long lastTime = System.nanoTime();

        while(true) {
            long nowTime = System.nanoTime();
            long deltaNano = nowTime - lastTime;
            double delta = deltaNano / 1_000_000_000.0;
            lastTime = nowTime;

            render(panel);
        }
    }

    public static void render(Panel p) {
        p.repaint();
    }
}
