function greet(person : string, date : Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Maddison", new Date());


  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
