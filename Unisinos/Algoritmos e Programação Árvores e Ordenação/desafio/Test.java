import java.util.Arrays;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        AVLTree tree = new AVLTree();
        tree.insert(4);
        tree.insert(15);
        tree.insert(23);
        tree.insert(67);
        tree.insert(89);
        tree.insert(56);
        tree.insert(14);
        tree.insert(7);
        tree.insert(-4);

        tree.showTree();

       /*List<Integer> elementsInOrder =  (List<Integer>) tree.inOrder();
       List<Integer> elementsInOrderTest =  Arrays.asList(-4, 4, 7, 14, 15, 23, 56, 67, 89);
       if(elementsInOrder.equals(elementsInOrderTest))
            Log.isCorrect(" Inorder ", "São Iguais");
        else Log.isError("Inorder ", "Diferente");*/


       List<Integer> elementsPosOrder =  (List<Integer>) tree.postOrder();
       List<Integer> elementsPosOrderTest =  Arrays.asList(-4, 7, 4, 15, 14, 56, 89, 67, 23);
       if(elementsPosOrder.equals(elementsPosOrderTest))
            Log.isCorrect(" PosOrder ", "São Iguais");
        else Log.isError("PosOrder ", "Diferente");
       

       /*List<Integer> elementsPreOrder =  (List<Integer>) tree.preOrder();
       List<Integer> elementsPreOrderTest =  Arrays.asList(23, 14, 4, -4, 7, 15, 67, 56, 89);
       if(elementsPreOrder.equals(elementsPreOrderTest))
            Log.isCorrect(" PreOrder ", "São Iguais");
        else Log.isError("PreOrder ", "Diferente");*/


        /*tree.remove(89);
        elementsPreOrder =  (List<Integer>) tree.preOrder();
        elementsPreOrderTest =  Arrays.asList(23, 14, 4, -4, 7, 15, 67, 56);
        if(elementsPreOrder.equals(elementsPreOrderTest))
             Log.isCorrect(" Remocao ", "OK");
         else Log.isError("Remocao ", "erro");

         if(!tree.search(45))
            Log.isCorrect(" Busca ", "OK");
        else  Log.isError("Busca ", "erro");*/
    }
}
