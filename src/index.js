module.exports = function towelSort (matrix) {

    function Sort(ElementArr) {                            
    var n = ElementArr.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (ElementArr[j+1] < ElementArr[j])
           { var t = ElementArr[j+1]; ElementArr[j+1] = ElementArr[j]; ElementArr[j] = t; }
        }
     }                     
    return ElementArr;
    }
    
    matrix.forEach(Sort);   
    return matrix;    
 
}
