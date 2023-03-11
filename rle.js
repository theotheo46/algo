function compressText(text) {
    if (text.match(/^[A-Z]+$/) === null) {
        throw new Error('Error');
    }
    var result = '';
    if (text.length > 0) {
        var count = 1;
        var value = text[0];
        for (var i = 1; i < text.length; ++i) {
			var entry = text[ i ];
            if (entry == value) {
                count += 1;
            } else {
              	result +=  value + '' + count;
              	count = 1;
				value = entry;
            }
        }
      	result +=  entry + '' + count ;
    }
    return result;
}

//var text = 'AAAAAABBBBBBACCCCCCCCCCCCCDDDAAAAAAAAAAAAA';
var text = '12345';
var compressedText = compressText('A');

console.log(compressedText); 
