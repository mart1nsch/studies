import java.awt.*;

public class Player extends Rectangle {
    private int width, height;
    private double posX, posY, velocityX, velocityY, maxVelocityX, maxVelocityY, minVelocityX, minVelocityY, velocityGain;

    public Player() {
        super(0, 0, 20, 20);
        width = 20;
        height = 20;
        posX = 0;
        posY = 0;
        velocityX = 0;
        velocityY = 0;
        maxVelocityX = 40;
        maxVelocityY = 40;
        minVelocityX = -40;
        minVelocityY = -40;
        velocityGain = 4;
    }

    public void paintPlayer(Graphics g) {
        g.setColor(Color.BLUE);
        g.fillRect((int) this.posX, (int) this.posY, this.width, this.height);
    }

    public void updateVelocity(double deltaTime, char direction) {
        if (direction == 'u') {
            velocityY -= velocityGain;
        }
        if (direction == 'd') {
            velocityY += velocityGain;
        }
        if (direction == 'l') {
            velocityX -= velocityGain;
        }
        if (direction == 'r') {
            velocityX += velocityGain;
        }

        if (velocityX > maxVelocityX) {
            velocityX = maxVelocityX;
        }
        if (velocityY > maxVelocityY) {
            velocityY = maxVelocityY;
        }
        if (velocityX < minVelocityX) {
            velocityX = minVelocityX;
        }
        if (velocityY < minVelocityY) {
            velocityY = minVelocityY;
        }

        updatePosition(deltaTime);
    }

    private void updatePosition(double deltaTime) {
        posX += velocityX * deltaTime;
        posY += velocityY * deltaTime;
    }
}
