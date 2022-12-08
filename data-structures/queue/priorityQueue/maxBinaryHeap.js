class MaxBinaryHeap {
    constructor(values = []) {
        this.values = values;
    }

    add(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const child = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];
            if (child < parent) break;
            this.values[parentIndex] = child;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    remove() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let rootIndex = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (rootIndex < length) {
            let leftChildIndex = 2 * rootIndex + 1;
            let rightChildIndex = 2 * rootIndex + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap == null && rightChild > element) || (swap != null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if (swap == null) break;
            this.values[rootIndex] = this.values[swap];
            this.values[swap] = element;
            rootIndex = swap;
        }
    }
}