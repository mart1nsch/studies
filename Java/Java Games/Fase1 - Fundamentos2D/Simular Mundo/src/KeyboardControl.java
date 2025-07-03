import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class KeyboardControl implements KeyListener {
    private Player player;

    public KeyboardControl(Player p) {
        this.player = p;
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_S) {
            player.setKeyPressed('d');
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {

    }
}
