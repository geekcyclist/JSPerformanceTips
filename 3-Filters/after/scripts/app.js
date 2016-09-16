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
        //We can filter and sort the emplist for each division
        // before adding to the employeeList.
        //Don't forget you can chain operations'
        var filteredEmployees = empList.filter(function(item){
            return item.isActive;    
        }).sort(function(a, b){
            return a.name.last === b.name.last ? 0 : +(a.name.last > b.name.last) || -1;    
        });
        // Make sure you remember to replace empList with filteredEmployees...
        for(var j = 0, eCount = filteredEmployees.length; j < eCount; j++) {
            employee = filteredEmployees[j];
            empName = employee.name;
            var emp = new Employee(
                empName.first,
                empName.last,
                employee.email,
                divName
            )
            employeeList.push(emp);
        }                                                       
    }
    //we could apply our filter and sorting here but it's a little more complicated
    // since we have already flattened the list - have to sort division and name...
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