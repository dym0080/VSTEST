var teacher=require('./teacher');
var student=require('./student');
function addC(teacherName,students){
	teacher.addT(teacherName);
	students.forEach(function(item,index){
		student.addS(item);
	});
}
export.addC=addC;