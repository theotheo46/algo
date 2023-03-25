const euclid = (...args: number[]): number => {
    const n = args.length;
    let x = Math.abs(Math.round(args[0]));
    for (let i = 1; i < n; i++)
     { var y = Math.abs(Math.round(args[ i ]));
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
    return x;
}

console.log(euclid(6006, 3738735, 51051));
console.log(euclid(7));
console.log(euclid(-421, 0.9923501, 3.1401525235324, -228.148832269))
console.log(euclid(-421, 1, 3, -228))
