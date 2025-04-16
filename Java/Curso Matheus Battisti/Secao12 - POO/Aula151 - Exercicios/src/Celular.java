public class Celular {
    private String marca, modelo;
    private int bateria;
    private boolean ligado;

    public Celular(String marca, String modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 100;
        this.ligado = false;
    }

    public String ligar() {
        String mensagem = "";

        if (this.isLigado()) {
            mensagem = "Celular já ligado! ";
        } else if (this.getBateria() == 0) {
            mensagem = "Celular sem bateria! ";
        } else {
            this.setLigado(true);
            mensagem = "Celular ligado! ";

        }

        return mensagem + this.getBateriaString();
    }

    public String desligar() {
        String mensagem = "";

        if (!this.isLigado()) {
            mensagem = "Celular já desligado! ";
        } else {
            this.setLigado(false);
            mensagem = "Celular desligado! ";
        }

        return mensagem + this.getBateriaString();
    }

    public String usarCelular() {
        if (!this.isLigado()) {
            return "Celular está desligado!";
        }

        this.setBateria((this.getBateria() - 10));

        if (this.getBateria() == 0) {
            this.desligar();
            return "Celular sem bateria!";
        }

        return "Celular utilizado! " + this.getBateriaString();
    }

    public String getBateriaString() {
        return "Bateria em " + this.getBateria() + "%";
    }

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public int getBateria() {
        return bateria;
    }

    public void setBateria(int bateria) {
        this.bateria = bateria;
    }

    public boolean isLigado() {
        return ligado;
    }

    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }
}
