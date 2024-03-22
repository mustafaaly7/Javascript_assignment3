// ---------- > Q1
// var multiDimensionalarr = [ [] ] ;



// var matrix = [[1,2,3], [4,5,6], [7,8,9] ];
// console.log("multi dimensional empty array : \n ");
// console.log(multiDimensionalarr );
// console.log(" \n  matrix : \n \n ");

// document.write("<h2> Matrix: </h2> " + "<br />")

// for (var i = 0; i < matrix.length; i++) {
//     console.log(matrix[i] + "\n");
// document.write("<h2> " + matrix[i] + "</h2>" +  "<br />");

// }



// // -------------> Q2
// console.log(" \n \n \n Counting : ");
// document.write("<h2> Counting : </h2>")

// for (var i = 1 ; i<=10 ; i++){
//     console.log( i+ "\n");
//     document.write( "<h2> " + i  + "</h2>" + "<br />")
// }


//  --------> Q3
// var userInput =+ prompt( "Enter Any number for multiplication :");

// for (var i = 1; i<= 10 ; i++){
//     document.write( "<h2> " + userInput + "x " + i + "=" + userInput * i + "<br />" + "</h1");
// }



// -----------> Q4

// var userInput =+ prompt( "Enter Any number for multiplication :");
// var tableLength =+ prompt("Enter Your Table Length :")
// document.write("<h1> TABLE :  <br />" )

// for (var i = 1; i <= tableLength ; i++){
//     document.write( "<h2> " + userInput + " x " + i + "=" + userInput * i + "<br />" +  "<br />" +"</h1");
// }



//  -------------> Q5

// var fruitArr = [ "apple", "banana"," mango","Orange","strawberry"];

// for(i=0 ; i< fruitArr.length ; i++){
//     document.write(" <h1> Element at Index"+ " " + i +"  "+ "is" +" " + fruitArr[i] +"</h1>");
//     document.write("<h1> " + fruitArr[i] + "<br /> </h1>");
// }



// ------> Q6

// -----> Q6 (a)

document.write("<h1> Counting </h1>");

var a;
for (a=0; a<=50 ; a++){
    document.write(  a + ",");
}


document.write("<h1> Reverse Counting </h1>");

var b;
for (b= 50 ; b>=0 ; b--){
    document.write(  b + ",");

}

document.write("<h1> Even Numbers </h1>");
for(var i = 0 ; i <= 100; i++){
    if(i % 2 === 0){
        document.write(i+ " " + ", " + " ");
    }
}



document.write("<h1> ODD Numbers </h1>");
for(var i = 0 ; i <= 100; i++){
    if(i % 2 === 1){
        document.write(i+ " " + ", " + " " );
    }
}










