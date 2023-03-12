function compressText(text) {
    if (text === "") {
        return text;
    }
    if (text.match(/^[A-Z]+$/) === null) {
        throw new Error('Error');
    }
    let result = '';
    let count = 1;
  
    for (let i = 0; i < text.length; i++) {
      let j = i + 1;
      while (text[i] === text[j]) {
        count++;
        j++;
      }
      result = result.concat((count === 1) ? `${text[i]}` : `${text[i]}${count}`);
      count = 1;
      i = j - 1;
    }
    return result;
}

var text = 'AAAAAABBBBBBACCCCCCCCCCCCCDDDAAAAAAAAAAAAA';
//var text = '12345';
var compressedText = compressText(text);

console.log(compressedText); 
