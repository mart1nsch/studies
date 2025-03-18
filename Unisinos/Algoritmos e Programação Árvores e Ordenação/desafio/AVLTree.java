import java.util.ArrayList;
import java.util.List;

public class AVLTree {
    private Node root;

    public void insert(int value) {
        this.root = this.insert(this.root, value);
    }

    public Node insert(Node node, int value) {
        if (node == null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = insert(node.left, value);
        } else if (value > node.value) {
            node.right = insert(node.right, value);
        } else {
            return node;
        }

        node.height = calculateHeight(node.left, node.right);

        int balancingFactor = this.balancingFactor(node);

        if (balancingFactor > 1 && value < node.left.value) {
            return rightRotate(node);
        }
        if (balancingFactor < -1 && value > node.right.value) {
            return leftRotate(node);
        }
        if (balancingFactor > 1 && value > node.left.value) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }
        if (balancingFactor < -1 && value < node.right.value) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    private Node rightRotate(Node node) {
        if (node.left == null) return node;

        Node nodeLeft = node.left;
        node.left = nodeLeft.right;

        nodeLeft.right = node;

        node.height = calculateHeight(node.left, node.right);
        nodeLeft.height = calculateHeight(nodeLeft.left, nodeLeft.right);

        return nodeLeft;
    }

    private Node leftRotate(Node node) {
        if (node.right == null) return node;

        Node nodeRight = node.right;
        Node nodeLeft = nodeRight.left;

        nodeRight.left = node;
        node.right = nodeLeft;

        node.height = calculateHeight(node.left, node.right);
        nodeRight.height = calculateHeight(nodeRight.left, nodeRight.right);

        return nodeRight;
    }

    private int calculateHeight(Node nodeLeft, Node nodeRight) {
        int left = nodeLeft == null ? -1 : nodeLeft.height;//height(nodeLeft);
        int right = nodeRight == null ? -1 : nodeRight.height;//height(nodeRight);

        return Math.max(left, right) + 1;
    }

    private int height(Node node) {
        return node == null ? 0 : node.height;
    }

    private int balancingFactor(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }

    public List<Integer> inOrder() {
        List<Integer> result = new ArrayList<>();
        inOrder(this.root, result);
        return result;
    }

    private void inOrder(Node node, List<Integer> result) {
        if (node != null) {
            inOrder(node.left, result);
            result.add(node.value);
            inOrder(node.right, result);
        }
    }

    public List<Integer> preOrder() {
        List<Integer> result = new ArrayList<>();
        preOrder(this.root, result);
        return result;
    }

    private void preOrder(Node node, List<Integer> result) {
        if (node != null) {
            result.add(node.value);
            preOrder(node.left, result);
            preOrder(node.right, result);
        }
    }

    public List<Integer> postOrder() {
        List<Integer> result = new ArrayList<>();
        postOrder(this.root, result);
        System.out.println(result);
        return result;
    }

    private void postOrder(Node node, List<Integer> result) {
        if (node != null) {
            postOrder(node.left, result);
            postOrder(node.right, result);
            result.add(node.value);
        }
    }

    public void showTree() {
        showTree(root, "", true);
    }

    private void showTree(Node node, String prefix, boolean right) {
        if (node != null) {
            System.out.println(prefix + (right ? "└── " : "├── ") + node.value);
            showTree(node.left, prefix + (right ? "    " : "│   "), false);
            showTree(node.right, prefix + (right ? "    " : "│   "), true);
        }
    }
}
