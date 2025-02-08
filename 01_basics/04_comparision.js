console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);
console.log(2==2);

console.log("2">1);//true javascript automatically converts the string to number
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//equality check == and comparision operatot >= <+ works different 
//comparision convert null to zero number,treating it as zero,thats why null>=0;is true and null>0 is false
console.log(undefined==0);//false
console.log("2"===2);//false.  strict check means that it not only checks the value ,but also checks the datatype

