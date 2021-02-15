module.exports = function towelSort (matrix) {
    function sortNumbers(a, b) {
        return a - b;
    }  
     matrix.forEach(row => row.sort(sortNumbers));          
     return matrix;
}
