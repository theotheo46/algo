function buildPyramid(tiers) {
    let arr = new Array(tiers).fill(' ');
    arr[tiers - 1] = '*';
    console.log(arr.join(''));
    for (let i = 2; i <= tiers; i++) {
        arr[arr.length] = '*';
        arr[tiers - i] = '*';
        console.log(arr.join(''));
    }
    let arr1 = new Array(tiers).fill(' ');
    arr1[tiers - 1] = '|';
    console.log(arr1.join(''));
}
buildPyramid(8);
