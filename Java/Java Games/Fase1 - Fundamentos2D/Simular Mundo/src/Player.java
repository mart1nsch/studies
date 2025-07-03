import java.awt.*;

public class Player extends Rectangle {
    private int width;
    private int height;
    private int posX;
    private int posY;
    private boolean upPress = false;
    private boolean downPress = false;
    private boolean leftPress = false;
    private boolean rightPress = false;
    public double velocity;

    public Player() {
        super(0, 0, 20, 20);
        width = 20;
        height = 20;
        posX = 0;
        posY = 0;
        velocity = 0;
    }

    public void setKeyPressed(char key) {
        upPress = false;
        downPress = false;
        leftPress = false;
        rightPress = false;

        if (key == 'u') {
            upPress = true;
        }
        if (key == 'd') {
            downPress = true;
        }
        if (key == 'l') {
            leftPress = true;
        }
        if (key == 'r') {
            rightPress = true;
        }
    }

    public void paintPlayer(Graphics g, double deltaTime) {
        updatePosition(deltaTime);

        g.setColor(Color.BLUE);
        g.fillRect(this.posX, this.posY, this.width, this.height);
    }

    public void updatePosition(double deltaTime) {
        if (upPress) {
            posY -= velocity;
        }
        if (downPress) {
            posY += velocity;
        }
        if (leftPress) {
            posX -= velocity;
        }
        if (rightPress) {
            posX += velocity;
        }
    }
}
