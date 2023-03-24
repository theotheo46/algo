// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

function allSentences(entries) {
    let counter = Array(entries.length).fill(0);
    let bases   = entries.map(e => e.length).reverse();
    let total   = bases.reduce((acc, v) => acc * v);
    let s       = entries.length - 1;
    let i = 0;

    return function() {
        let retval;
        if (i < total) {
            retval = entries.reduce((r, v, i) => (`${r} ${v[counter[s - i]]}`), "");
            counter.some((e, ci) => (counter[ci] = (e + 1) % bases[ci]));
            retval = retval.trim();
            }
        else {
            retval = undefined;
        }
        i++;
        return retval;
    }
  }
  
  const nextSentence = allSentences([
      ['внучка', 'внучок'],
      ['маша', 'махать', 'машу'],
      ['крыса', 'крысу', 'крысой']
  ]);
  
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
  console.log(nextSentence()); 
