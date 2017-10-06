console.log('sourced');
$(document).ready(readyNow);

function readyNow() {
  console.log('ready');
  clickHandlers();
}

var totalCost = 0;

function clickHandlers(){

$("#submit").on('click', storeEmployee);

}

function storeEmployee(){
  var employeeInfo = new Employee ($('#firstName').val(),$('#lastName').val(),$('#idNumber').val(),$('#jobTitle').val(),$('#annualSalary').val());
  $("table").append('<tr><td>' + employeeInfo.first + '</td><td>' + employeeInfo.last + '</td><td>'+ employeeInfo.id + '</td><td>'+ employeeInfo.title + '</td><td>' + employeeInfo.salary + '</td></tr>');
  totalCost = totalCost + parseInt(employeeInfo.salary);
  $("#totalCost").text(totalCost);
  $("input").val("");
  console.log(employeeInfo);
}

function Employee (first, last, id, title, salary) {
  console.log('clicked submit');
  this.first = first;
  this.last = last;
  this.id = id;
  this.title = title;
  this.salary = salary;
}
