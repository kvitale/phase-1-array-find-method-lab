const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    ]
   
    // const inventory = [
    //     {name: 'apples', quantity: 2},
    //     {name: 'bananas', quantity: 0},
    //     {name: 'cherries', quantity: 5}
    //   ];
      
    //   const result = inventory.find( ({ name }) => name === 'cherries' );
      
    //   console.log(result) // { name: 'cherries', quantity: 5 }
    
    // Will loop through record
    // Find the first Object that returns true based on a callback

  function superbowlWin(record){
      const result = record.find(record => record.result === "W")
      return !!result ? result.year : undefined 
  }
//   condition ? exprIfTrue : exprIfFalse
// Will find the first year the Broncos got a 'W'
