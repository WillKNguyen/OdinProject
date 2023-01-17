class LinkedList{

    constructor (){
        this.headNode = null;
        this.tailNode = null;
        this.numberOfNodes = 0;
    }

    append(value){
        let node = new Node();
        node.value = value;
        this.numberOfNodes++;
        if (this.headNode == null && this.tailNode == null) {
            this.headNode = node;
            this.tailNode = node;
            return;
        }
        
        this.tailNode.nextNode = node;
        this.tailNode = node;
    }

    prepend(value){
        let node = new Node();
        node.value = value;
        this.numberOfNodes++;
        if (this.headNode == null && this.tailNode == null) {
            this.headNode = node;
            this.tailNode = node;
            return;
        }
        
        node.nextNode = this.headNode;
        this.headNode = node;
    }

    size(){return this.numberOfNodes}

    head(){return this.headNode}

    tail(){return this.tailNode}

    at(index){
        let counter = 0;
        let node = this.headNode;
        if (index > this.numberOfNodes || this.numberOfNodes == 0){
            console.error('index out of range');
            return;
        }
        while(counter < index){
            node = node.nextNode;
            counter++;
        }
        return node;
    }

    pop(){
        if (this.numberOfNodes > 0){
            this.tailNode = this.at(this.numberOfNodes - 2);
            this.tailNode.nextNode = null;
            this.numberOfNodes--;
        }
        else{
            console.log('linked list is empty');
        }
    }

    contains(value) {
        if (this.numberOfNodes != 0){
            let node = this.headNode;
            if (node.value == value){
                return true;
            }
            while (node.value != value && node != null){
                node = node.nextNode;
                if (node == null){
                    break;
                }
                if (node.value == value){
                    return true;
                }
            }
        }   
        return false;
    }

    find(value) {
        let index = 0;
        let node = this.headNode;
        if (node.value == value){
            return index;
        }
        while(node.value != value){
            node = node.nextNode;
            index++;
            if (node == null){
                break;
            }
            if (node.value == value){
                return index;
            }
        }
        return null;
    }

    toString(){
        let string = "";
        let node = this.headNode;
        while(node != null){
            string += node.value + " -> "
            node = node.nextNode;
        }
        string += "null";
        return string;
    }
}

class Node{
    
    constructor () {
        this.value = null;
        this.nextNode = null;
    }
}

const ll = new LinkedList();
console.log(ll);
ll.append("jim");
ll.append("john");
ll.append("bob");
ll.prepend("will")

console.log(ll);
console.log(ll.toString());
console.log(ll.size());
console.log(ll.at(1));
ll.pop();
console.log(ll.toString());

console.log(ll.find('wil'))
console.log(ll.contains('jim'))


