var $ = require('jquery')
var getTasks = require('./ajax.js').getTasks
var addTask = require('./ajax.js').addTask
var completedTask = require('./ajax.js').completedTask
var editTask = require('./ajax.js').editTask

var getTaskNameFromInput = function() {
  var name = $('#name').val() 
  addTask(name, printTasks)
}

var printTasks = function() {
getTasks(appendTasks)
}

function appendTasks (tasks) {
  $('#task-list').text('')
  tasks.forEach((task) => {
    $('#task-list').append('<div id = "' + task.id + '" >' + task.title + '<button class= "task-delete-X"> X </button>' + '<button class= "task-edit"> Edit </button>' + '</div>')
    //edit task function
  })
}

function deleteID () { 
  const id = $('#id').val() 
  deleteTask(id, printTasks)
  //delete object that includes the id given in input. 
  //printTasks
}

function editTaskName (id, printTasks) {
  var newName = prompt("Please edit the task")
  if (newName === null) {
    return
  }
  editTask(id, newName, printTasks)
}

//listen functions

var listen = function () {
	$('#get-tasks').click(function() {
		printTasks()
	})
	$('#add-task').click(function() {
		getTaskNameFromInput()
	})
    $('#delete-task').click(function() {
   		deleteID()
  	})
}

$("#task-list").delegate(".task-delete-X", 'click', function(){
//get id of clicked item 
var div = $(this).parent()
deleteTask(div.attr("id"), printTasks)
 })


$("#task-list").delegate(".task-edit", 'click', function(){
//get id of clicked item 
var div = $(this).parent()
editTaskName(div.attr("id"), printTasks)
 })

module.exports = {listen}