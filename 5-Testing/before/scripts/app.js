var employeeList = [];
fillEmployeeList();
console.log(employeeList.length);

function fillEmployeeList(){
    for(var i = 0; i < company[0].divisions.length; i++) {
        for(var j = 0; j < company[0].divisions[i].employees.length; j++) {
            var emp = new Employee(
                company[0].divisions[i].employees[j].name.first,
                company[0].divisions[i].employees[j].name.last,
                company[0].divisions[i].employees[j].email,
                company[0].divisions[i].divisionName            
            )
            employeeList.push(emp);
        }
    }
}

//simplified Employee constructor
function Employee (firstName, lastName, email, division){
    this.firstName = firstName;
    this.lastName = lastName;
    this.division = division;
    this.fullName = firstName + ' ' + lastName;
}