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
    for(var i = 0; i < company[0].divisions.length; i++) { //3 steps * 3 divisions looking up length
        for(var j = 0; j < company[0].divisions[i].employees.length; j++) { //4 steps * 225 employees looking up length
            var emp = new Employee(
                company[0].divisions[i].employees[j].name.first, //5 steps
                company[0].divisions[i].employees[j].name.last,  //5 steps
                company[0].divisions[i].employees[j].email,      //4 steps
                company[0].divisions[i].divisionName             //3 steps
            )
            employeeList.push(emp);      // lookup steps in the constructor call: 17 * 225 = 3825
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