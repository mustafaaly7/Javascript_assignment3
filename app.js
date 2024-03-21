var multiDimensionalarr = [ [] ] ;



var matrix = [[1,2,3], [4,5,6], [7,8,9] ];
console.log("multi dimensional empty array : \n ");
console.log(multiDimensionalarr );
console.log(" \n  matrix : \n \n ");

document.write("<h2> Matrix: </h2> " + "<br />")

for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i] + "\n");
document.write("<h2> " + matrix[i] + "</h2>" +  "<br />");

}



//  Q2
console.log(" \n \n \n Counting : ");
document.write("<h2> Counting : </h2>")

for (var i = 1 ; i<=10 ; i++){
    console.log( i+ "\n");
    document.write( "<h2> " + i  + "</h2>" + "<br />")
}