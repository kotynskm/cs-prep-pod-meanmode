//Challenge 1 
function modemean(array) {
    // the mode is the value that appears the most often
    // the mean is the total of all values / number of values
        
        // initialize variables
        let sum = 0;
        let mean = 0;
        let lengthOfArray = array.length; 
        let count = 0;
        let mode = 0;
        
        // create a count object to keep track of number of appearances of a number
        let countObj = {};
        // calculate the mean
          for(let i = 0; i < array.length; i++){
            sum += array[i];
        }
            mean = Math.floor(sum / lengthOfArray);
        
    
        // loop over array and add key:values to count object
        for(let i = 0; i < array.length; i++){
            let key = array[i];
            if(countObj[key] === undefined){
                countObj[key] = 1;
            }else{
                countObj[key]++;
            }  
        }
             
        // loop over count object and assign mode to the key which will be the actual value that appears the most times
        for(let key in countObj){
            if(count < countObj[key] || count === countObj[key]){
                count = countObj[key];
                mode = Number(key);
            }
        }
        return mode === mean;
        }
        
    console.log(modemean([5, 3, 3, 3, 1])); // true
    console.log(modemean([2,2,2,2,5,6,4,8,9])); // false
    console.log(modemean([2,2,2,3,4,5,7,7,7])); // false
    