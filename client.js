console.log('sourced');
$(document).ready(readyNow);

function readyNow() {
  console.log('ready');
  $("#submit").on('click', storeEmployee);
  $('table').on('click','.remove', removeRow);
}

var totalCost = 0;
var i = 0;

function storeEmployee(){
  //i = i + 1;
  var employeeInfo = new Employee ($('#firstName').val(),$('#lastName').val(),$('#idNumber').val(),$('#jobTitle').val(),$('#annualSalary').val());
  //createTable();
  $("table").append("<tr><td>" + employeeInfo.first + '</td><td>' + employeeInfo.last + '</td><td>'+ employeeInfo.id + '</td><td>'+ employeeInfo.title + '</td><td>' + employeeInfo.salary + "</td><td><button class='remove'>Remove</button></td></tr>");
  totalCost = totalCost + parseInt(employeeInfo.salary);
  $("#totalCost").text(totalCost);
  //employeeObjectsArray.push(employeeInfo);
  //createTable();
//  console.log(employeeObjectsArray);
  $("input").val("");
  console.log(employeeInfo);
  //console.log(i);

//var employeeObjectsArray = [];

//function createTable(){
//var table
//for (var i=0, i < employeeObjectsArray.length, i +=1){
  //};
}

function removeRow() {
  //updateMonthlyCost();
  $(this).closest ('tr').remove ();
  console.log('removed');
  }

function updateMonthlyCost(){
  var row = $(this).closest('tr');
  //console.log(row);
  //$(this).find('td:last-child').text()
  console.log(row.find('td:first-child').text());
  totalCost = totalCost - 1;
  $('#totalCost').text(totalCost);
}


function Employee (first, last, id, title, salary) {
  console.log('clicked submit');
  this.first = first;
  this.last = last;
  this.id = id;
  this.title = title;
  this.salary = salary;

}
