//单例模式
var Conf=(function(){
	//私有变量
	var conf={
		MAX_NUM:100,
		MIN_NUM:1,
		COUNT:1000
	}
	//返回取值器对象
	return {
		//取值器方法
		get:function(name){
			return conf[name] ? conf[name]:null;

		}
	}
})();


var count=Conf.get('COUNT');
console.log(count);

//惰性载入单例
var LazySingle=(function(){
	//单例实例引用
	var instance=null;
	//单例
	function Single(){
		return {
			publicMethod:function(){},
			publicProperty:'1.0'
		}
	}
	//获取单例对象接口
	return function(){

		//如果为创建单例将创建单例
		if(!instance){
			_instance=Single();
		}
		//返回单例
		return _instance;
	}
})();

console.log(LazySingle().publicProperty);


