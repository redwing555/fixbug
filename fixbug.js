

function fizzbuzz() {

    const myArray = [];
  
    for(let i=1; i <= 100; i++){
  
      if (i%15 == 0 ){
        myArray.push("FizzBuzz");
        
      }
  
  
      else if (i%3 == 0) {
        myArray.push("Fizz");
       
      }
  
      else if (i%5 == 0) {
        myArray.push("Buzz")
  
      }
  
      
      else{
        myArray.push(i);
      }
  
  
    
    console.log(myArray);
    
  
  
  }

fizzbuzz();