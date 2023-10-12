//Challenge #24 - Cat and Dog years

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
    let cat=0;
    let dog=0;
    if (humanYears==1){
     return [humanYears,15,15];
    }
    else if(humanYears==2){
       return [humanYears,24,24];
      }
    else{
      hy=humanYears-2;
      cat=4*hy+24;
      dog=5*hy+24;
      return [humanYears,cat,dog]
     }
  }