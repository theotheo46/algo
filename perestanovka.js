function match(s) {
    let min = 0;
    let max = s.length;
    const retArr = [];
    [...s].forEach(element => {
        if (element === 'I') {
            retArr.push(min);
            min++;
        }
        else {
            retArr.push(max);
            max--;
        }
    });
    retArr.push(min);
    return retArr;
  }
  
  console.log(match('III')) // [0,1,2,3]
  console.log(match('DDI')) // [3,2,0,1]
  console.log(match('IDID')) // [0,4,1,3,2]
