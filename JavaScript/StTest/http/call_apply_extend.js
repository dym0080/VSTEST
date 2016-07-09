function pet(words){
	this.words=words;
	console.log(this===global);
	this.speak=function(say){
		console.log(say+' '+this.words);
	}
}
pet('...');

// function dog(words){
// 	pet.call(this,words);
// }
// var d=new dog('wang');
// d.speak('ass');