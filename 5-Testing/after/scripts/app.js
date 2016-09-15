var employeeList = [];

//create an array to hold the objects passed in as test parameters
var paramList = [company[0], employeeList];

//wrap the code to test in an anonymous function
var fillEmployeeList = function(paramList){ //pass in the param list
    for(var i = 0; i < paramList[0].divisions.length; i++) {
        for(var j = 0; j < paramList[0].divisions[i].employees.length; j++) {
            var emp = new Employee(
                paramList[0].divisions[i].employees[j].name.first,
                paramList[0].divisions[i].employees[j].name.last,
                paramList[0].divisions[i].employees[j].email,
                paramList[0].divisions[i].divisionName            
            )
            paramList[1].push(emp);
        }
    }
}

//setup and run the test
var fillEmpListTest = new PerformanceTest(fillEmployeeList, paramList);
fillEmpListTest.runTest();

//simplified Employee constructor
function Employee (firstName, lastName, email, division){
    this.firstName = firstName;
    this.lastName = lastName;
    this.division = division;
    this.fullName = firstName + ' ' + lastName;
}