module.exports = {

 binaryTree: function(node) {
    for (var subNode = 1; subNode <= node; subNode++) {
        /**
         * @description it prints for each number 
         */
        var cons = parseInt(subNode) * 2;
        var result = 1;
        for (var i = 0; i < subNode; ++i) {
            result *= (cons - i);
            result /= (i + 1);
            /**
             * @description it calculates number of tree for the given nodes
             */
        }
        var catalan = result / (parseInt(subNode) + 1);
        console.log(catalan);
    }
}
}