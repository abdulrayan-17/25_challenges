
//Challenge #6 - Vowel Count

unction getCount(str) {
    let count=0;
    const arr=str.split("");
    for(let i=0;i<arr.length;i++){
      switch(arr[i]){
          case 'a':count++;
          break;
          case 'e':count++;
          break;
          case 'i':count++;
          break;
          case 'o':count++;
          break;
          case 'u':count++;
          break;
        }
    }
    return count;
  }