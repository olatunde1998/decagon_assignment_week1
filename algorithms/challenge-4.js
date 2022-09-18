function calculateGrade(marks) {
    let sumArr = marks.reduce((a,b) => a + b)
    let totalResult = sumArr/marks.length
    if(totalResult <= 49){
        console.log(totalResult);
        console.log(`Your average mark is ${totalResult} and it is F`);
    }else if(totalResult >= 50 && totalResult <= 59){
        console.log(totalResult);
        console.log(`Your average mark is ${totalResult} and it is E`);
    }else if(totalResult >= 60 && totalResult <= 69){
        console.log(totalResult);
        console.log(`Your average mark is ${totalResult} and it is D`);
    }else if(totalResult >= 70 && totalResult <= 79){
        console.log(totalResult);
        console.log(`Your average mark is ${totalResult} and it is C`);
    }else if(totalResult >= 80 && totalResult <= 89){
        console.log(totalResult);
        console.log(`Your average mark is ${totalResult} and it is B`);
    }else{
        console.log(totalResult);
        console.log(`Your average mark is ${totalResult} and it is A`);
    }
}
calculateGrade([95]); 
//A
calculateGrade([80,90]);    
//B
calculateGrade([80,80,70]); 
//C
calculateGrade([89,50,40,90,77]);
//D
calculateGrade([59,80,40,2,77]);
//E
calculateGrade([19,5,42,2,77]);
//F

module.exports = calculateGrade
