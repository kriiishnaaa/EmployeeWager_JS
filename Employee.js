const present = 1;

let isPresent = Math.floor(Math.random()*10)%2;

if(isPresent == present){
    console.log("Employee is Present");
}
else{
    console.log("Employee is not Present");
    return;
}

let workingHours = Math.floor(Math.random()*10)%3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

switch(workingHours){

    case isPartTime:
        workingHours = partTime;
        break;

    case isFullTime:
        workingHours = fullTime;
        break;

    default :
        workingHours = 0;
        break;

}

let wage = wagePerHour*workingHours;

console.log("Daily wage generated for employee is ",wage);