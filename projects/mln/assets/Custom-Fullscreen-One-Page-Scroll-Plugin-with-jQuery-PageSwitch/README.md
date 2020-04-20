# PageSwitchPlugin
基于Jquery插件开发方式自定义的全屏切换效果插件
可以实现横屏和竖屏的动态切换，图片个数,动画时间，是否轮回，是否支持键盘等都可以自定义参数。具体可选参数如下：
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
   	//滑动方向 可选vertical  horizontal
   	direction:"vertical",
   	//滑动以后的回调函数
    callback:""
   };
