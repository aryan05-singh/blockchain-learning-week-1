// firstly we taken two variable name a and b ,and put value of a = 0 and b=1
let a = 0;
let b = 1;  
 //and then printed the value
console.log(a);
console.log(b);
//And then  started the loop i = 10
for(let i=0;i<=10;i++){
              let temp=a+b; //and then a+b,temp=1 , and then printed the value of temp
              console.log(temp);
              a = b; //and b value goes to a and temp value goes to b and it is repeating 10 times
              b = temp; 
}
