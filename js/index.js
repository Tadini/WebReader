define(function(require,exports,module){
	//通过exports对外提供接口
	/*exports.doSomething = function(){
		console.log('my ok')
	}

	exports.doSomething2 = function(){
		console.log('my ok2')
	}*/

	var a = {};
	a.doSomething = function(){
		console.log('my ok')
	}

	a.doSomething2 = function(){
		console.log('my ok2')
	}
	//通过module.exports 提供整个接口
	module.exports = a;
});
