//UC-1 checking 
const present = 1;

let isPresent = Math.floor(Math.random()*10)%2;

if(isPresent == present){
    console.log("Employee is Present");
}
else{
    console.log("Employee is not Present");
    return;
}

//UC-2 and UC-3 calculating dailywage of an employee with using a function
let workingHours = Math.floor(Math.random()*10)%3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

function getWorkingHours(workingHours){
    switch(workingHours){

        case isPartTime:
            return partTime;

        case isFullTime:
            return fullTime;

        default :
            return 0;

    }
}

let wage = wagePerHour*getWorkingHours(workingHours);

console.log("Daily wage generated for employee is ",wage);

//UC-4 calcultating wages for a Month

const numberOfWorkingDays = 20;

let empHrs = 0;

for(let i = 1; i<=numberOfWorkingDays;i++){
    let empCheck = Math.floor(Math.random()*10)%3;    //getting fulltime, partime or notime status
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs*wagePerHour;
console.log("Monthly Wage of the Employee for hours "+empHrs+" is "+empWage);


//UC-5 calculating Employee wage Untill hours are 160 or days completed are 20 

empHrs = 0;
let numberOfTotalDays = 0;
while(empHrs <= 160 && numberOfTotalDays < 20){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
    numberOfTotalDays++;

}
empWage = empHrs*wagePerHour; 

console.log("Total working days are : "+numberOfTotalDays+", Total working hours are : "+empHrs+", Wage of Employee is : "+empWage);

//UC-6 storing the daily wage in an array and also calculating totalWage

function getWage(empHrs){
    return empHrs*wagePerHour;
}

const maxWorkingHrs = 160;
const maxWorkingDays = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = new Array();

numberOfTotalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    dailyWages.push(getWage(empHrs));

    numberOfTotalDays++;

}

empWage = totalEmpHrs*wagePerHour;
console.log("Total working days are : "+numberOfTotalDays+", Total working hours are : "+totalEmpHrs+", Wage of Employee is : "+empWage);

//UC-7A calculate total wage using array forEach traversal  

let totalEmpWage = 0;

function sum(currentWage){
    totalEmpWage += currentWage;
}

dailyWages.forEach(sum);

console.log("Total working days are : "+numberOfTotalDays+", Total working hours are : "+totalEmpHrs+", Wage of Employee is : "+totalEmpWage);

//UC-7B Mapping Day with Daily Wage

let dayCount = 0;

function mapDayWithWage(wage){
    dayCount++;
    return "(Day : "+dayCount+", Wage : "+wage+") ";
}

let mappedWages = dailyWages.map(mapDayWithWage);

console.log("Mapped array is => "+mappedWages);

//UC-7C Days with Full Wage

function fullWage(wage){
    return wage.includes("160");
}

let fullWageDays = mappedWages.filter(fullWage);

console.log("Full Wage Day array is => "+fullWageDays);

//UC-7D finding first day on which full wage was earned

console.log(fullWageDays.find((wage) => wage.includes("160")));

//UC-7E checking if every wage in fullWageDays have full wage or not

function isFullWage(wage){
    return wage.includes("160");
}

console.log("Every wage in fullWageDays array has full wage ? : "+fullWageDays.every(isFullWage));

//UC-7F checking if any wage is there as part time wage

function isPartWage(wage){
    return wage.includes("80");
}

console.log("Is there any wage as Part time wage in the wage array ? :"+mappedWages.some(isPartWage));

//UC-7G finding total number of days employee worked

function totalDaysWorked(numOfDays, wage){
    if(wage > 0)
        return numOfDays+1;
    else
        return numOfDays;
}

console.log("Number of days worked by the employee are "+dailyWages.reduce(totalDaysWorked,0));


//UC-8 storing the day and daily wage along with the total wage in map

dailyWages = new Array();
let empDailyWageMap = new Map();

totalEmpHrs = 0;
numberOfTotalDays = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    dailyWages.push(getWage(empHrs));

    numberOfTotalDays++;

    empDailyWageMap.set(numberOfTotalDays, getWage(empHrs));

}

console.log(empDailyWageMap);

console.log("Emp wage map total wage : "+Array.from(empDailyWageMap.values()).reduce((totalWage, wage)=> totalWage+wage, 0));

//UC-9 Arrow Functions

//creating a daily hrs map
let empDailyHrsMap = new Map();

numberOfTotalDays = 0;
totalEmpHrs = 0;

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;
    numberOfTotalDays++;

    empDailyHrsMap.set(numberOfTotalDays, empHrs);
}



const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);

console.log("Total working hours are : "+totalHours);
console.log("Total wage of employee is : "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

nonWorkingDays = empDailyHrsMap.forEach((value, key)=>{
    if(value == 0)
        nonWorkingDays.push(key);
    if(value == 4)
        partWorkingDays.push(key);
    else
        fullWorkingDays.push(key);
})

console.log("Full working days are : "+fullWorkingDays);
console.log("Part working days are : "+partWorkingDays);
console.log("No working days are : "+nonWorkingDays);

//UC-10 Storing Object of day, hours and wage inside an array

totalEmpHrs = 0;
numberOfTotalDays = 0;
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs <= maxWorkingHrs && numberOfTotalDays < maxWorkingDays){
    
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;
    numberOfTotalDays++;

    empDailyHrsAndWageArr.push({
        dayNum : numberOfTotalDays,
        dailyHours : empHrs,
        dailyWage : getWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum+" => Working Hours is "+this.dailyHours+" And Wage Earned = "+this.dailyWage
        }
    });

   
}

console.log("Daily hours worked and wage earned : "+empDailyHrsAndWageArr);