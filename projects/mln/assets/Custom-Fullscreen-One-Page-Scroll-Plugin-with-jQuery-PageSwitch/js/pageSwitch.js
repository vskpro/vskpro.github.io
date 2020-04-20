//Jquery插件的开发
(function($){
    //定义私有方法(加下划线)
    /*说明：获取浏览器前缀*/
    /*实现：判断摸个元素的css样式中是否存在transition属性*/
    /*参数：DOM元素*/
    /*返回值：boolean类型 有则返回浏览器的样式前缀，否则返回false*/
    var _prefix=(function(temp){
       var aPrefix=["webkit","Moz","o","ms"],props="";
       for(var i in aPrefix){
          props=aPrefix[i]+"Transition";
          if(temp.style[props]!==undefined){
          	return "-"+aPrefix[i].toLowerCase()+"-";
          }
       }
       return false;
    })(document.createElement(PageSwitch)); //此处不一定是PageSwitch随便一个html标签就可以去测试浏览器相关信息


    //定义PageSwitch对象，也是自运行的匿名函数
    var PageSwitch=(function(){
         function PageSwitch(element,options){
         	this.settings=$.extend(true,$.fn.PageSwitch.defaults,options||{});
         	this.element=element;
         	this.init();

         }
         //定义PageSwitch原型中的方法
         PageSwitch.prototype={
         	/*说明：初始化插件  有下划线表示私有方法，没有表示共有方法*/
         	/*实现：初始化dom结构，布局，分页及绑定事件*/
         	init:function(){
                  //这里的this是PageSwitch对象
                  var me=this;
                  //setTimeout(function(me){
                    //  console.info(this);//这里的this 是window，为了不破坏这个this,则把PageSwitch对象给me
                  //},50);
                  //DOM结构初始化
                  me.selectors=me.settings.selectors;
                  me.selections=me.element.find(me.selectors.selections);
                  me.selection=me.selections.find(me.selectors.selection);
                  


                  me.direction=me.settings.direction=="vertical"?true:false;
                  me.pagesCount=me.pagesCount();
                  //index大于图片个数时默认从0开始
                  me.index=(me.settings.index>=0&&me.settings.index<me.pagesCount)?me.settings.index:0;

                  me.canScroll=true;


                  if(!me.direction){
                     me._initLayout();
                  }

                  if(me.settings.pagination){
                  	me._initPaging();
                  }

                  me._initEvent();
         	},
         	/*说明：获取滑动页面数量,返回数组长度*/
         	pagesCount:function(){
                  return this.selection.length;

         	},
         	/*说明：获取滑动的宽度(横屏滑动)和高度(竖屏滑动)*/
         	switchLenth:function(){
                  return this.direction?this.element.height():this.element.width();
         	},
         	/*说明：向前滑动一页*/
            prev:function(){
               var me=this;
               if(me.index > 0){
               	  me.index--;
               }else if(me.settings.loop){
               	  me.index=me.pagesCount-1;
               }
               me._scrollpage(); 

            },
            /*说明：向后滑动一页*/
            next:function(){
               var me=this;
               if(me.index < me.pagesCount){
               	  me.index++;
               }else if(me.settings.loop){
               	  me.index=0;
               }
               me._scrollpage(); 
            },
         	/*说明：主要针对横屏情况进行布局*/
         	_initLayout:function(){
                 var me=this;
                 var width=(me.pagesCount*100)+"%",
                     cellWidth=(100/me.pagesCount).toFixed(2)+"%";

                 me.selections.width(width);
                 me.selection.width(cellWidth).css("float","left");

         	},
         	/*说明：实现分页的dom结构及css样式*/
         	_initPaging:function(){
                   var me=this,
                   pagesClass=me.selectors.page.substring(1);

                   me.activeClass=me.selectors.active.substring(1);
                   var pageHtml="<ul class="+ pagesClass+" >";
                   for(var i=0;i<me.pagesCount;i++){
                   	  pageHtml+="<li></li>";
                   } 
                   pageHtml+="</ul>";
                   me.element.append(pageHtml);

                   var pages=me.element.find(me.selectors.page);
                   me.pageItem=pages.find("li");
                   me.pageItem.eq(me.index).addClass(me.activeClass);

                   if(me.direction){
                   	 pages.addClass("vertical");
                   }else{
                   	 pages.addClass("horizontal");
                   }


         	},
            /*说明:初始化插件事件*/
            _initEvent:function(){
                 var me=this;
                 me.element.on("click",me.selectors.page +" li",function(){
                 	 me.index=$(this).index();
                 	 me._scrollpage();
                 })
                 me.element.on("mousewheel DOMMouseScroll",function(e){

                 	if(me.canScroll){
	                 	//火狐方向判断与其他浏览器相反
	                 	var detal=e.originalEvent.wheelDelta || -e.originalEvent.detail;
	                 	//鼠标向上(考虑循环播放最后跟开始位置的特殊性)
	                 	if(detal>0 && (me.index && !me.settings.loop||me.settings.loop)){
	                        me.prev();
	                 	}else if(detal<0 && (me.index<(me.pagesCount-1) && !me.settings.loop || me.settings.loop)){
	                        me.next();
	                 	}
                 	}
                 });

                 //绑定键盘事件
                 if(me.settings.keyboard){
                     $(window).on("keydown",function(e){
                         var keyCode=e.keyCode;
                         //37 方向左 38 上
                         if(keyCode==37||keyCode==38){
                              me.prev();
                         }else if(keyCode==39||keyCode==40){// 39右边  40方向下
                              me.next();
                         }
                     });
                 }
                 //窗体改变大小事件
                 $(window).resize(function(){
                      var currentLength=me.switchLenth(),
                          offset=me.settings.direction?me.selection.eq(me.index).offset()
                          .top:me.selection.eq(me.index).offset().left;
                        if(Math.abs(offset)>currentLength/2 && me.index< (me.pagesCount-1)) {
                        	me.index++;
                        }
                        if(me.index){
                        	me._scrollpage();
                        }
                 });
                //在 CSS 完成过渡后修改 <div> 元素样式及文字：
                me.selections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){
                	   me.canScroll=true;
                       if(me.settings.callback && $.type(me.settings.callback) == "function"){
                       	   //回调事件
                       	   me.settings.callback();
                       }
                });
            },
            /*说明：滑动动画*/
            _scrollpage:function(){
            	var me=this,
            	    dest=me.selection.eq(me.index).position();
                
           
            	if(!dest){
            		return ;
            	}

            	me.canScroll=false;
                //浏览器是否支持Transition属性，原生实现
            	if(_prefix){
            		
                    me.selections.css(_prefix+"transition","all "+me.settings.duration+"ms "+me.settings.easing);
                    var translate=me.direction?"translateY(-"+dest.top+"px)":"translateX(-"+dest.left+"px)";
                    me.selections.css(_prefix+"transform",translate);
            	}else{
            	    //不支持就使用Jquery的animate来实现
                    var animateCss=me.direction?{top:-dest.top}:{left:-dest.left};
                    /*需要将div的postion属性设置为relative  jquery默认linaer swing两种*/
                    me.selections.animate(animateCss,me.settings.duration,"linear",function(){
                    	/*加锁防止鼠标一次性滚动多，跳过多页*/
                    	me.canScroll=true;
                    	if(me.settings.callback && $.type(me.settings.callback) == "function"){
                       	   //回调事件
                       	   me.settings.callback();
                       }
                    }); 
            	}
                /*分页实现*/
            	if(me.settings.pagination){
            		me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);
            	}   
            }
         }
         return PageSwitch;    
    })();

   //动态的原型方法创建插件，诸如addClass	
   $.fn.PageSwitch=function(options){
   	    //实现链式调用
        return this.each(function(){
        	var me=$(this),
        	    instance=me.data("PageSwitch");
        	    //单例模式
        	    if(!instance){
        	    	instance=new PageSwitch(me,options);
        	    	me.data("PageSwitch",instance);
        	    }
        	    if($.type(options)==="string"){
        	    	return instance[options]();
        	    }    
        });
   };
   $.fn.PageSwitch.defaults={
   	selectors:{
   		selections:".selections",
   		selection:".selection",
   		page:".pages",
   		active:".active"
   	},
   	index:0,
   	//动画效果
   	easing:"ease",
   	//动画时间
   	duration:"500",
   	//是否可以循环播放
   	loop:false,
   	//是否进行分页处理
   	pagination:true,
   	//是否触发键盘事件
   	keyboard:true,
   	//滑动方向
   	direction:"vertical",
   	//滑动以后的回调函数
    callback:""
   };
   
   //插件内部初始化
   $(function(){
   	$('[data-PageSwitch]').PageSwitch();
   });

})(jQuery);