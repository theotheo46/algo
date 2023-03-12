const entries = [
    ['внучка', 'внучок'],
    ['маша', 'махать', 'машу'],
    ['крыса', 'крысу', 'крысой']
];
  
  let counter = Array(entries.length).fill(0);
  let bases   = entries.map(e => e.length).reverse();
  let total   = bases.reduce((acc, v) => acc * v);
  let s       = entries.length - 1;
  let result  = [];

  console.log(entries);
  
  for (let i = 0; i < total; i++) {
    result.push(
      entries.reduce((r, v, i) => (`${r} ${v[counter[s - i]]}`), "")
    );
  
    counter.some((e, ci) => (counter[ci] = (e + 1) % bases[ci]));
  }
  
  console.log(result);
