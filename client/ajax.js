var request = require('superagent')

//getTasks
var getTasks = function (callback) {

console.log('get bands')
  //asynchronous
  request
	.get('http://localhost:3000/bands')
  	.end(function(err, res){
  	var bands = res.body
  	callBack(bands)
  	})
}

//addTask
var addTask = function (taskName, printTasks) {
	request
		.post('http://localhost:3000/to-do-list' + id)
		.send(name = taskName)
		.end(function(err, res){
			console.log('add')
			printTasks()
			})
}

//completedTask
var completedTask = function (callback) {
	console.log('delete')
	request
		.del('http://localhost:3000/to-do-list/' + id)
		.end(function(err, res) {
			callback()
		})
}

editTask
var editTask = function (id, callback) {
	console.log('id', id, 'name', newName)
	request
		.put('http://localhost:3000/to-do-list' + id)
		.send({title: newName})
		.end (function(err, res){
  		console.log('edit')
		  printTasks()
	})
}

module.exports = {getTasks, addTask, completedTask, editTask}