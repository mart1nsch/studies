import javax.swing.*;
import java.awt.*;

public class Game {
    JFrame frame;
    KeyboardControl kc;
    Panel panel;
    Player player;

    public Game() {

    }

    public void createWindow() {
        frame = new JFrame();
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);

        kc = new KeyboardControl();
        frame.addKeyListener(kc);

        player = new Player();

        panel = new Panel(player);
        panel.setPreferredSize(new Dimension(500, 500));
        frame.add(panel);

        frame.pack();
        frame.setVisible(true);
    }

    public void start() {
        long lastTime = System.nanoTime();

        while(true) {
            long nowTime = System.nanoTime();
            long deltaNano = nowTime - lastTime;
            double delta = deltaNano / 1_000_000_000.0;
            lastTime = nowTime;

            update(delta);
            render();
        }
    }

    private void update(double deltaTime) {
        if (kc.upPressed) {
            player.updateVelocity(deltaTime, 'u');
        }
        if (kc.downPressed) {
            player.updateVelocity(deltaTime, 'd');
        }
        if (kc.leftPressed) {
            player.updateVelocity(deltaTime, 'l');
        }
        if (kc.rightPressed) {
            player.updateVelocity(deltaTime, 'r');
        }
    }

    private void render() {
        panel.repaint();
    }
}
