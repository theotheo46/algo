
function compress(data)
{
    if (data.length === 0) {
        return 'undefined';
    }
    const a = [...data].sort((a, b) => a-b), r = [[a[0], a[0]]];
    for (i = 1; i < a.length; i++) {
      if (r[r.length - 1][1] + 1 === a[i]) {
        r[r.length - 1][1] = a[i];
      } else {
        r.push([a[i], a[i]]);
      }
    }
    return r.map(rr => rr[0] === rr[1] ? rr[0] : rr.join('-')).join(',');
  }


  console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]));
  console.log(compress([1, 4, 3, 2]));
  console.log(compress([]));
