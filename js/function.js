define(function(require,exports,module){

	Function.prototype.before = function(fn){
		var _self = this;
		return function(){
			//先执行回调 在执行自身
			// console.log('before:',_self,fn);
			fn.apply(_self,arguments);//回调函数的调用对象默认为window
			//after和before放置的位置不同时_self作用对象不同
			_self.apply(_self,arguments);//调用自身如果是在最后 则调用after的return的function
		}
	}

	Function.prototype.after = function(fn){
		var _self = this;
		return function(){
			//先执行自身  再执行回调
			// console.log('after:',_self,fn);
			_self.apply(_self,arguments);//调用自身如果是在最后 则调用before的return的function
			fn.apply(this,arguments);
		}
	}
});