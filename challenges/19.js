//Challenge #19 - Remove spaces

function noSpace(x){
    const arr=x.split(" ");
    let newarr=[];
    for(let i=0;i<arr.length;i++){
      trimmedstr=arr[i].trim();
      newarr.push(trimmedstr);
    }
    let finalstr=newarr.join("");
    return finalstr;
  }