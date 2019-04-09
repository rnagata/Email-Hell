const json = require('./email-log.json');

const fixer = function () {

  function uniqueEmailCount(inputArr){
    let results = [];
    inputArr.forEach( function (inputElem){
      let index = results.findIndex( function (resultsElem){
        return resultsElem.address === inputElem.email;
      });

      if (index === -1){
        results.push({
          address : inputElem.email,
          count : 1
        })
        return;
      }

      results[index].count++;
    });
    
    return results;
  }

  return {
    uniqueEmailCount,
  }

}();

console.log(fixer.uniqueEmailCount(json.emails));
