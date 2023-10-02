let value = "1234321"
// here use arrow function
//firstly use split method to create space and then use .reverse for reversing the element
let revValue = () =>{
              let myVal = value.split("").reverse().join("");
             
                let StrVal = value;
//and then gave if condition 
              if(StrVal == myVal){
                            console.log("true");
              }
              else{
                            console.log("false");
              }
}

revValue();
              

