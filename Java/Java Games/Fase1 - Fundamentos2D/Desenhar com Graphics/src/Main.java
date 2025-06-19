import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String [] args) {
        // Daqui até o *** é a criação da janela
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        Panel panel = new Panel(); // Os graphics são criados dentro do método paintComponent do Panel
        panel.setPreferredSize(new Dimension(1200, 768));
        frame.add(panel);

        frame.pack();
        frame.setVisible(true);
        // ***

    }

}
