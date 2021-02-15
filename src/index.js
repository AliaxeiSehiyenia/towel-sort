module.exports = function towelSort (matrix) {
    /* var n = matrix.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (matrix[j+1] < matrix[j])
           { var t = matrix[j+1]; matrix[j+1] = matrix[j]; matrix[j] = t; }
        }
     }    */    
     matrix.forEach(row => row.sort((a, b) => a - b))              
     return matrix;
}
