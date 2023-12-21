// Question 1
// Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. 
// Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. 
// To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. 
// Invoke the inorder function to check the output [4,2,5,1,3]. 

class TreeNode {// the class for all 4 problems
    constructor(data) {
      this.value = data;
      this.left = null;
      this.right = null;
    }
  }
  

function inorderTree(root){
    let current = root
    const stack = [];
    const result = [];
  
    while(current !== null || stack.length){
        while(current !== null){
            stack.push(current);
            current = current.left
        }
        current = stack.pop();
        result.push(current.value);
        current = current.right;
    }
    return result;
}
  // Instantiate nodes for the binary tree
  let inOrderRoot = new TreeNode(1);
  inOrderRoot.left = new TreeNode(2);
  inOrderRoot.right = new TreeNode(3);
  inOrderRoot.left.left = new TreeNode(4);
  inOrderRoot.left.right = new TreeNode(5);

console.log(inorderTree(inOrderRoot)) 

// Question 2
// Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. 
// This function checks two binary trees and tells if they are the same or not. 
// Test your function by making two binary trees and comparing them.
// For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise. 

function isSameTree(p,q){
    if(!p && !q) return true;
    if(p&&!q || q&&!p) return false;
    if(p.val != q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// Instantiate nodes for the binary tree
let sameRoot = new TreeNode(1);
sameRoot.left = new TreeNode(2);
sameRoot.right = new TreeNode(3);
console.log(isSameTree([1,2,3],[1,2,3]))

// Question 3
// Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. 
// For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. 
// For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.

function countNodes(root){
    if(!root){
        return 0;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
}

let countRoot = new TreeNode(10);
countRoot.left = new TreeNode(11);
countRoot.right = new TreeNode(12);
countRoot.left.left = new TreeNode(13);
countRoot.left.right = new TreeNode(14);
countRoot.right.left = new TreeNode(15);
countRoot.right.right = new TreeNode(16);

console.log(countNodes(countRoot))

// Question 4
// Find the leftmost value in the last row of a binary tree with distinct node values. Use the TreeNode class, which defines a node's structure. 
// Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. 
// This function should return the value of the leftmost node in the last row of the tree. 
// Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. 
// The 'searchBottomLeftValue(root)' function should then return an output of 6.

function searchBottomLeftValue(root){

    const q = [root]

    let leftmost= 0

    while (q.length > 0) {
        const currentLevelSize = q.length;
        leftmost = q[0].value

        for (let i = 0; i < currentLevelSize; i++) {

            const current = q.shift()
            if (current.left) q.push(current.left)
            if (current.right) q.push(current.right)
        }

    }
    return leftmost
    
}

let leftRoot = new TreeNode(2);
leftRoot.left = new TreeNode(1);
leftRoot.left.left = new TreeNode(4);
leftRoot.right = new TreeNode(3);
leftRoot.right.left = new TreeNode(5);
leftRoot.right.left.left = new TreeNode(6);

console.log(searchBottomLeftValue(leftRoot)) 