public class Hidroaviao extends Barco implements Pilotavel {
    @Override
    public void pilotar() {
        System.out.println("O hidroavião está sendo pilotado");
    }

    @Override
    public void navegar() {
        System.out.println("O hidroavião está navegando");
    }
}
