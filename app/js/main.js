
// (function(){

 var Todo = function(options){
 var args = options || {};

 this.task = options.task;
 this.status = 'Open';

};
var storageBin = [];

$.fn.bluey = function(){
  $this.css('color', 'blue');
  return this;
};

Todo.prototype.Todo=true;

// var a = new Todo({task: taskText});

//Set up submit
//on submit create a new instance

$('#addTask').on('submit', function(event){
 event.preventDefault();
 var taskText = $('#taskText').val();
 var taskInstance = new Todo({task: taskText});
 storageBin.push(taskInstance);
 $('#tasks').append('<li><label><input type=radio>'+taskText+'</label><span class="fa fa-trash-o">to delete</span></li>');


 this.reset();
});

// toggle item

$('#tasks').on('click', 'label', function(event){
 event.preventDefault();

 //grab the list item I clicked on
 //mark that item as completed
 $(this).addClass('complete');
 var tTask= $(this).text();
 var taskToEdit = _.find(storageBin, { task: tTask });
 taskToEdit.status = 'Closed';

 $('#done').append('<li><label><input type=radio checked="checked">' + tTask + '</label><span class="fa fa-trash-o">to delete</span></li>');

 $(this).closest('li').remove();


});

$('#done').on('click', 'label', function(event){
 event.preventDefault();


 $(this).addClass('complete');
 var tTask= $(this).text();
 var taskToEdit = _.find(storageBin, { task: tTask });
 taskToEdit.status = 'Open';

 $('#tasks').append('<li><label><input type=radio>' + tTask + '</label><span class="fa fa-trash-o">to delete</span></li>');

 $(this).closest('li').remove();

});

$('ul').on("click", 'span', function(event){
  event.preventDefault();
  var tTask= $(this).closest('li').text();
  var taskToEdit = _.find(storageBin, { task: tTask });
  storageBin=_.without(storageBin, taskToEdit);
  $(this).closest('li').remove();

});

$('clicker.button').on("click", 'h2.bluey', function(){
});

// }());
