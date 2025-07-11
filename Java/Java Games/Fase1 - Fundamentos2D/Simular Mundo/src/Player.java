import java.awt.*;

public class Player extends Rectangle {
    private int width, height;
    private double posX, posY, velocityX, velocityY, maxVelocityX, maxVelocityY, minVelocityX, minVelocityY, velocityGain, velocityReduce;

    public Player() {
        super(0, 0, 20, 20);
        width = 20;
        height = 20;
        posX = 0;
        posY = 0;
        velocityX = 0;
        velocityY = 0;
        maxVelocityX = 100;
        maxVelocityY = 100;
        minVelocityX = -100;
        minVelocityY = -100;
        velocityGain = 20;
        velocityReduce = 1;
    }

    public void paintPlayer(Graphics g) {
        g.setColor(Color.BLUE);
        g.fillRect((int) this.posX, (int) this.posY, this.width, this.height);
    }

    public void reduceVelocity(double deltaTime) {
        if (velocityX > 0) {
            velocityX -= velocityReduce;
            if (velocityX < 0) {
                velocityX = 0;
            }
        }
        if (velocityX < 0) {
            velocityX += velocityReduce;
            if (velocityX > 0) {
                velocityX = 0;
            }
        }
        if (velocityY > 0) {
            velocityY -= velocityReduce;
            if (velocityY < 0) {
                velocityY = 0;
            }
        }
        if (velocityY < 0) {
            velocityY += velocityReduce;
            if (velocityY > 0) {
                velocityY = 0;
            }
        }
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
