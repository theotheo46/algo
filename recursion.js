function recursion(n) {
   if (n === 0) {
        console.log('recursion end'); 
        return; 
    }

   console.log(`recursion ${n}`);
   recursion(n - 1);
}

recursion(4); 