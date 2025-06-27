import javax.swing.*;
import java.awt.*;

public class Main {

    public static void main(String [] args) {
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        Panel panel = new Panel();
        panel.setPreferredSize(new Dimension(400, 400));
        frame.add(panel);

        frame.pack();
        frame.setVisible(true);
    }
}
