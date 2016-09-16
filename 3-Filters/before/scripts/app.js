var employeeList = [];  //create an empty list to store employee objects
fillEmployeeList();

document.getElementById('output').innerHTML = "There are "  + employeeList.length + " employees listed." ;

/**
 *  Iterate over the company object stored in companyDetails.js
 *  to fill the employeeList array for future use.
 **/
function fillEmployeeList(){
    var divList, division, divName, empList, employee, empName;
    divList = company[0].divisions;
    for(var i = 0, dCount = divList.length; i < dCount; i++) {
        division = divList[i];
        divName = division.divisionName;
        empList = division.employees;
        for(var j = 0, eCount = empList.length; j < eCount; j++) {
            employee = empList[j];
            empName = employee.name;
            // Restrict to only active employees
            // but don't be a NOOB and use === true
            if(employee.isActive){
                var emp = new Employee(
                    empName.first,
                    empName.last,
                    employee.email,
                    divName
                )
                employeeList.push(emp);
            }
            // Now that we have only active employees,
            // do we really want to loop again and write
            // our own sort?
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