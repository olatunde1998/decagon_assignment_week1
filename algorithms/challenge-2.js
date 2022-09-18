function fizzBuzz(input){
    if(input % 3 == 0){
        console.log('fizz');
    }else if(input % 5 == 0){
        console.log('buzz')
    }else if(input % 3 == 0 && input % 5 == 0){
        console.log('fizzbuzz')
    }else if(input.filter(item => item > 0)){
        console.log(input);

    }else{
        console.log(`${input} not divisible by 3 or 5`)
    }
}
fizzBuzz(3) 
// to return "fizz" 
fizzBuzz(5) 
// to return "buzz" 
fizzBuzz(15) 
// to return "fizzBuzz" 
fizzBuzz(7) 
// to return 7 
filterArray([4, "z", "f", 5]) 
// to return [4,5]
filterArray(["$%^", 567, "&&&"]) 
// to return [567]
 

module.exports = fizzBuzz
