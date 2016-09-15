var employeeList = [];  //create an empty list to store employee objects
fillEmployeeList();

document.getElementById('output').innerHTML = "There are "  + employeeList.length + " employees listed." ;

/**
 *  Iterate over the company object stored in companyDetails.js
 *  to fill the employeeList array for future use.
 *  The company object simulates the result passed back from 
 *  calling some data service.
 **/
function fillEmployeeList(){
    var divList, division, divName, empList, employee, empName;     //loop invariants to cache
    divList = company[0].divisions;                                 //company never changes. cache the list
    for(var i = 0, dCount = divList.length; i < dCount; i++) {      //cache the count of divisions
        division = divList[i];                                      //division only changes in the outer loop, but we look it up twice
        divName = division.divisionName;                            //the divisionName only changes in the outer loop        
        empList = division.employees;                               //the empList only changes in the outer loop
        for(var j = 0, eCount = empList.length; j < eCount; j++) {  //cache the count of employees **remember scope**
            employee = empList[j];                                  //cache for use in constructor
            var emp = new Employee(
                employee.name.first,    //3
                employee.name.last,     //3
                employee.email,         //2
                divName                 //1
            )
            employeeList.push(emp);     // have added steps outside, but constructor is 9 * 225 = 2025
        }                                                       
    }
}


/**
 * Employee object constructor
 **/
function Employee (firstName, lastName, email, division){
    this.firstName = firstName;
    this.lastName = lastName;
    this.division = division;
    this.fullName = firstName + ' ' + lastName;
    switch (division){
        case 'Administration':
            this.location = '10th Floor';
            break;
        case 'HR':
            this.location = '6th Floor';
            break;
        case 'Development':
            this.location = 'Satellite Campus';
            break;
        default:
            alert(this.fullName + ' should move to the parking garage with ' +
                               'thier red Swingline(TM) stapler.' );
    }
}