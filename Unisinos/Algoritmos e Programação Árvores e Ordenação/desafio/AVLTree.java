import java.util.ArrayList;
import java.util.List;

public class AVLTree {

    public class Node {
        int value;
        Node left, right;
        int height;

        public Node(int value) {
            this.value = value;
        }
    }

    private Node root;

    public void insert(int value) {
        this.root = this.insert(this.root, value);
    }

    public Node insert(Node node, int value) {
        if (node == null) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = insert(node.left, value);
        } else if (value > node.value) {
            node.right = insert(node.right, value);
        }

        if (this.balancingFactor(node) == 2) {
            if (this.balancingFactor(node.left) > 0) {
                node = this.rightRotate(node);
            } else {
                node = this.doubleRightRotate(node);
            }
        } else if (this.balancingFactor(node) == -2) {
            if (this.balancingFactor(node.right) < 0) {
                node = this.leftRotate(node);
            } else {
                node = this.doubleLeftRotate(node);
            }
        }

        node.height = Math.max(height(node.left), height(node.right)) + 1;

        return node;
    }

    public void remove(int value) {
        if (search(this.root, value)) {
            this.root = this.remove(this.root, value);
        }
    }

    private Node remove(Node node, int value) {
        if (node == null) return null;

        if (value < node.value) {
            node.left = remove(node.left, value);
        } else if (value > node.value) {
            node.right = remove(node.right, value);
        } else {
            if (node.left == null || node.right == null) {
                node = node.left == null ? node.right : node.left;
            } else {
                Node nodeSucessor = findMin(node.right);
                node.value = nodeSucessor.value;
                node.right = remove(node.right, nodeSucessor.value);
            }
        }

        if (node == null) return null;

        if (this.balancingFactor(node) == 2) {
            if (this.balancingFactor(node.left) > 0) {
                node = this.rightRotate(node);
            } else {
                node = this.doubleRightRotate(node);
            }
        } else if (this.balancingFactor(node) == -2) {
            if (this.balancingFactor(node.right) < 0) {
                node = this.leftRotate(node);
            } else {
                node = this.doubleLeftRotate(node);
            }
        }

        node.height = Math.max(height(node.left), height(node.right)) + 1;

        return node;
    }

    private Node rightRotate(Node node) {
        if (node.left == null) return node;

        Node nodeLeft = node.left;
        node.left = nodeLeft.right;

        nodeLeft.right = node;

        node.height = Math.max(height(node.left), height(node.right)) + 1;
        nodeLeft.height = Math.max(height(nodeLeft.left), node.height) + 1;

        return nodeLeft;
    }

    private Node leftRotate(Node node) {
        if (node.right == null) return node;

        Node nodeRight = node.right;
        node.right = nodeRight.left;

        nodeRight.left = node;

        node.height = Math.max(height(node.left), height(node.right)) + 1;
        nodeRight.height = Math.max(height(nodeRight.right), node.height) + 1;

        return nodeRight;
    }

    private Node doubleRightRotate(Node node) {
        node.left = this.leftRotate(node.left);
        return rightRotate(node);
    }

    private Node doubleLeftRotate(Node node) {
        node.right = this.rightRotate(node.right);
        return leftRotate(node);
    }

    private int height(Node node) {
        return node == null ? -1 : node.height;
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
        return result;
    }

    private void postOrder(Node node, List<Integer> result) {
        if (node != null) {
            postOrder(node.left, result);
            postOrder(node.right, result);
            result.add(node.value);
        }
    }

    public boolean search(int value) {
        return search(root, value);
    }

    private boolean search(Node node, int value) {
        while (node != null) {
            if (node.value == value) {
                return true;
            } else if (value < node.value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return false;
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

    private Node findMin(Node node) {
        if (node == null) return null;

        while (node.left != null) {
            node = node.left;
        }

        return node;
    }
}
