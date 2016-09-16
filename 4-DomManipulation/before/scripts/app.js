//NOTE - fillEmployeeList() now returns a list
// And this message was moved to writeListToPage
// document.getElementById('output').innerHTML = "There are "  + employeeList.length + " employees listed." ;

writeListToPage(fillEmployeeList(), "empList", "output");

/**
 * Iterate over a list of object and write each item to the page
 * using the objects toString method (overridden below...)
 **/
function writeListToPage(list, listElement, countElement){
    var domList, domListItem;
    document.getElementById(countElement).innerHTML = "There are "  + list.length + " employees listed." ;
    domList = document.getElementById(listElement);
    for(var i = 0, count = list.length; i < count; i++){
        var domListItem = document.createElement("li");                     //create a list item in memory
        domListItem.appendChild(document.createTextNode(list[i].toString)); //append the employee text to the item
        domList.appendChild(domListItem);                                   //append the item directly to the DOM
    }
}

/**
 *  Iterate over the company object stored in companyDetails.js
 *  and return a storted list.
 **/
function fillEmployeeList(){
    var divList, division, divName, empList, employee, empName, tempList;
    tempList = [];
    divList = company[0].divisions;
    for(var i = 0, dCount = divList.length; i < dCount; i++) {
        division = divList[i];
        divName = division.divisionName;
        empList = division.employees;
        var filteredEmployees = empList.filter(function(item){
            return item.isActive;    
        }).sort(function(a, b){
            return a.name.last === b.name.last ? 0 : +(a.name.last > b.name.last) || -1;    
        });
        for(var j = 0, eCount = filteredEmployees.length; j < eCount; j++) {
            employee = filteredEmployees[j];
            empName = employee.name;
            var emp = new Employee(
                empName.first,
                empName.last,
                employee.email,
                divName
            )
            tempList.push(emp);
        }                                                       
    }
    return tempList;
}

/**
 * Employee object
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
    // added toString method
    this.toString = division + ': ' + firstName + ' ' + lastName; 
}