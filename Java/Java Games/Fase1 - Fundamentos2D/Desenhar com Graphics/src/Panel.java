import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;

public class Panel extends JPanel {
    private BufferedImage image;

    public Panel() {
        super();

        // Carrega a imagem na memória para usar depois no drawImage
        try {
            image = ImageIO.read(new File("JAVA.png"));
        } catch(Exception e) {
            System.out.println(e);
        }
    }

    // O método paintComponent sempre é chamado pela lógica quando temos um JPanel, não precisamos chamar explicitamente ele
    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Textos
        g.setFont(new Font("Tahoma", 0, 18)); // Seta a fonte do Texto
        g.drawString("Bem vindo!", 50, 50); // Desenha uma String

        // Retângulo sem preenchimento
        g.setColor(Color.GREEN); // Coloque antes do que você quer criar para definir a cor do objeto
        g.drawRect(100, 100, 50, 50); // Desenha só as bordas de um retângulo

        // Retângulo com preenchimento
        g.setColor(Color.BLUE); // Coloque antes do que você quer criar para definir a cor do objeto
        g.fillRect(200, 200, 50, 50); // Desnha um retângulo preenchido

        // Imagem
        g.drawImage(this.image, 300, 300, this);
    }
}
