define(function(require,exports,module){
	'use strict';//使用声明 要求严格模式 es6 
	require('zepto');
	require('jsonp');
	require('base64');
    //本地存储
    var Util = (function(){
        var prefix = 'html5_reader_';
        var StorageGetter = function(key){
            return localStorage.getItem(prefix+key);
        }
        var StorageSetter = function(key,val){
            return localStorage.setItem(prefix+key,val);
        }
        var getJSONP = function(url,callback){
        	return $.jsonp({
        		url:url,
        		cache:true,
        		callback:'duokan_fiction_chapter',
        		success: function(result){
        			
        			var data = $.base64.decode(result);
        			var json = decodeURIComponent(escape(data));
        			callback(json);

        		}
        	})
        }
        return {
        	getJSONP:getJSONP,
            StorageGetter:StorageGetter,
            StorageSetter:StorageSetter
        }
    })();
    var Dom = {
    	top_nav: $('#top-nav'),//顶部导航
    	bottom_nav: $('.j-bot-nav'),
    	night_day_switch_button:$('#night-button'),
    	font_container: $("#font-container"),
    	font_button: $('#font-button'),
    	bot_button: $('.bot-item'),
    	font_large: $('#large-font'),
    	font_small: $('#small-font'),
    	bg_btn: $('.bk-container')
    }
    var Win = $(window);
    var Doc = $(document);
    var Html = $('html');
    var rootDom = $('#root');
    var rootContainer = $('#fiction_container');
    var initFont = Util.StorageGetter('font-size')?Util.StorageGetter('font-size'):14; 
    var bgIndex =  Util.StorageGetter('bg')? Util.StorageGetter('bg'):1;
    var nightIndex = Util.StorageGetter('night')? Util.StorageGetter('night'):1;
    //初始化字体 
    rootContainer.css('font-size',initFont);
    //是否初始化背景样式
    if(bgIndex){
    	rootDom.data('bg',bgIndex);
    	$('.bk-container').eq(bgIndex-1).addClass('current').siblings().removeClass('current');
    }
    //是否初始化夜间模式
    if(bgIndex){
    	rootDom.data('night',nightIndex);
    	Dom.night_day_switch_button.addClass('current').find('span').html('白天');
    }
    
    
    //基本数据获取
    var clientData = {
    	width: $(window).width(),
    	height: $(window).height()
    };
    var readerModel,readerUI;
    // console.log(clientData);
    function main(){
        //整个项目的入口函数  
        readerModel = ReaderModel(); 
        readerUI = ReaderBaseFrame(rootContainer); 

        readerModel.init(function(data){
        	readerUI(data);
        });
        EventHandler();
    }
    
    //数据层
    function ReaderModel(){
      //实现和阅读器 相关的数据交互的方法  
      var Chapter_id;
      var ChapterTotal;//总共章节数
      var init = function(UIcallback){
      	/*getFictionInfo(function(){
      		getCurChapterContent(Chapter_id,function(data){
      			//TODO ...
      			UIcallback&&UIcallback(data);
      		});
      	})*/
      	getFictionInfoPromise().then(function(){
      		/*getCurChapterContent(Chapter_id,function(data){
      			//TODO ...
      			UIcallback&&UIcallback(data);
      		});*/
      		return getCurChapterContentPromise();
      	}).then(function(data){
      		UIcallback&&UIcallback(data);
      	})
      }
      var getFictionInfo = function(callback){
      	$.get('data/chapter.json',function(data){
      		//TODO 获得章节信息之后回调
      		//默认初始化的是第一章的id
      		Chapter_id = Util.StorageGetter('last_chapter_id')
      		Chapter_id = Chapter_id ? Chapter_id : data.chapters[1].chapter_id;
      		ChapterTotal = data.chapters.length;
      		callback&&callback();
      	},'json');
      };

      //ES6 promise 异步调用
      var getFictionInfoPromise = function(){
	    return new Promise(function(resolve,reject){
	      	$.get('data/chapter.json',function(data){
	      		//TODO 获得章节信息之后回调
	      		//默认初始化的是第一章的id
	      		if(data.result == 0){
	      			Chapter_id = Util.StorageGetter('last_chapter_id')
		      		Chapter_id = Chapter_id ? Chapter_id : data.chapters[1].chapter_id;
		      		ChapterTotal = data.chapters.length;
		      		resolve();
	      		}else{
	      			reject();
	      		}
	      		

	      	},'json');
	    });
      }
      var getCurChapterContent = function(chapter_id,callback){
      	$.get('data/data'+chapter_id+'.json',function(data){
      		if(data.result == 0){
      			var url = data.jsonp;
      			//通过跨域的请求获取数据
      			Util.getJSONP(url,function(data){
      				callback&&callback(data);
      			});
      		}
      	},'json');
      }
      //获取当前详情内容的promise对象
      var getCurChapterContentPromise = function(){
      	return new Promise(function(resolve,reject){
	      	$.get('data/data'+Chapter_id+'.json',function(data){
	      		if(data.result == 0){
	      			var url = data.jsonp;
	      			//通过跨域的请求获取数据
	      			Util.getJSONP(url,function(data){
	      				// callback&&callback(data);
	      				resolve(data);
	      			});
	      		}else{
	      			// reject(data);
	      			reject({msg:'fail'});
	      		}
	      	},'json');
	      });
      }	
      //上一页
      var prevChapter = function(UIcallback){
      	Chapter_id = parseInt(Chapter_id,10);
      	if(Chapter_id==0){
      		return;
      	}
      	Chapter_id-=1;
      	getCurChapterContent(Chapter_id,UIcallback);
      	//记录当前章节id
      	Util.StorageSetter('last_chapter_id',Chapter_id);
      }
      //下一页
      var nextChapter = function(UIcallback){
      	Chapter_id = parseInt(Chapter_id,10);
      	if(Chapter_id>=ChapterTotal){
      		return;
      	}
      	Chapter_id+=1;
      	getCurChapterContent(Chapter_id,UIcallback);
      	//记录当前章节id
      	Util.StorageSetter('last_chapter_id',Chapter_id);

      }
      return {
      	init:init,
      	prevChapter: prevChapter,
      	nextChapter: nextChapter,
      }
    }
    //ui实现 初始化页面 视图层
    function ReaderBaseFrame(conatiner){
        //渲染基本的ui结构
        //调用解析获得数据 放置到dom中
        function parseChapterData(jsonData){
        	var jsonObj = JSON.parse(jsonData);
        	var html = '<h4>'+jsonObj.t +'</h4>';
        	for(var i=0;i<jsonObj.p.length;++i){
        		html +='<p>'+jsonObj.p[i]+'</p>';
        	}
        	return html;
        }  

        return function(data){
        	conatiner.html(parseChapterData(data));
        }
        
    }
    //控制层
    function EventHandler(){

        //交互的事件绑定
        //菜单唤起
        Doc.click(function(ev){
        	var ny,scale,scrollTop;
        	ny = ev.clientY;
        	scale = parseFloat(ny/clientData.height);
        	if(scale>0.3&&scale<0.7){
        		//调用设置界面
        		initSetting();
        		return;
        	}
        	scrollTop = $('body').scrollTop();
        	if(scale>=0.7){
        		$('body').scrollTop(scrollTop+clientData.height);
        	}
        	if(scale<=0.3){
        		$('body').scrollTop(scrollTop-clientData.height);
        	}
        	return false;
        });


        $('#action_mid').click(function(){
        	if(Dom.top_nav.css('display')=='none'){
        		Dom.bottom_nav.show();
        		Dom.top_nav.show();
        	}else{
        		Dom.bottom_nav.hide();
        		Dom.top_nav.hide();
        		Dom.font_container.hide();
        		Dom.bot_button.removeClass('current');
        	}
        	return false;
        })

        //滚动事件
        Win.scroll(function(){
        	Dom.bottom_nav.hide();
        	Dom.top_nav.hide();
        	Dom.font_container.hide();
        	Dom.bot_button.removeClass('current');
        });

        //切换夜间模式
        Dom.night_day_switch_button.click(function(){
        	//todo 触发背景切换的事件
        	var index = rootDom.data('night');
        	index = index?index:0; 
        	if(!index){
				rootDom.data('night',1);
				Util.StorageSetter('night',1);
        		$(this).addClass('current').find('span').html('白天');
        	}else{
        		rootDom.data('night',0);
        		Util.StorageSetter('night',0);
        		$(this).removeClass('current').find('span').html('夜间');
        	}      
        	return false;  	
        });

        //调出字体设置面板
       	Dom.font_button.click(function(){
       		if(Dom.font_container.css('display')=="none"){
       			Dom.font_container.show();
       			Dom.font_button.addClass('current');
       		}else{
       			Dom.font_container.hide('current');
       			Dom.font_button.removeClass('current');
       		}
       		return false;
        });
       	//放大字体
       	Dom.font_large.click(function(){
       		if(initFont>20){
       			return;
       		}
       		initFont++;
       		rootContainer.css('font-size',initFont);
       		storageFont(initFont);
       		return false;
       	});
       	//缩小字体
       	Dom.font_small.on('click',function(){
       		if(initFont<12){
       			return;
       		}
       		initFont--;
       		rootContainer.css('font-size',initFont);
       		storageFont(initFont);
       		return false;
       	});
       	//背景设置
       	Dom.bg_btn.on('click',function(){
       		var index = $(this).index();
       		rootDom.data('bg',index);
       		$(this).addClass('current').siblings().removeClass('current');
       		storageBg(index);
       		return false;
       	});

       	//上一章
       	$('#prev_button').click(function(){
       		//先获得章节的数据->把数据拿出来渲染
       		readerModel.prevChapter();
       	})
       	//下一章
       	$('#next_button').click(function(){
       		//先获得章节的数据->把数据拿出来渲染
       		readerModel.nextChapter(function(data){
       			readerUI(data);
       		});
       	})

    }
    
    function storageFont(initFont){
    	Util.StorageSetter('font-size',initFont);
    }

    function storageBg(index){
    	Util.StorageSetter('bg',index);
    }

    function storageDark(index){
    	Util.StorageSetter('night',index);
    }

    function pageNext(){
    	$('body').scroll(200);
    }
    //调用设置界面设置
    function initSetting(){
    	if(Dom.top_nav.css('display')=='none'){
    		Dom.bottom_nav.show();
    		Dom.top_nav.show();
    		Html.addClass('no-scroll');
    	}else{
    		Dom.bottom_nav.hide();
    		Dom.top_nav.hide();
    		Dom.font_container.hide();
    		Dom.bot_button.removeClass('current');
    		Html.removeClass('no-scroll');
    	}
    }
    main();

});