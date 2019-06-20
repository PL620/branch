welcome()
function welcome(){
	var arr = ['./img/title.png','./img//title2.png','./img/logo.png','./img/tree.jpg','./img/shake.png','./img/cloud.png']
	var num = 0;
	var onoff = false;
	var timer = null;
	var startTime = new Date().getTime();//记录页面一打开的时间
	
	$('#index').addClass('show');
	
	for(var i=0;i<arr.length;i++){
		var oImg = new Image();//实例化对象
		oImg.src = arr[i];//加载图片
		oImg.onload = function(){//图片全部加载完触发事件
			num++;
			if(num == arr.length){
				onoff = !onoff;
			}
		}
		oImg.onerror = function(){//图片加载失败触发事件
			console.log(2);
		}
	}
	timer = setInterval(function(){
		var newTime = new Date().getTime();
		var dis = newTime - startTime;
		if(dis>=5000&&onoff){//判断页面打开的时间有没有达到6秒并且图片都加载成功
			$("#welcome").animate({
				opacity : 0
			},1000,function(){
				$("#welcome").removeClass("show")
			})
			clearInterval(timer);
		}
	},40)
}

/* 首页 */
indexFn()
function indexFn(){
	/* 轮播图 */
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay : true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })
  /* 星星*/
  $(".scroe .list li").on('tap',function(ev){//添加手机按下事件
	var inputs = $(this).find('input');//获取隐藏的input的值
	if(ev.target.nodeName == 'A'){//使用事件委托的方式给星星添加点击事件
		var all = $(ev.target).parent().children();//由于zepto没有prevAll()找到所有的上一个兄弟标签的方法所有就自己写
		var index = $(ev.target).index();//点击哪一个就获取哪个的下标
		all.each(function(i,el){//遍历里面的所有元素比较下标
			if(i<=index){//小于当前点击的元素的下标，则出现星星
				$(el).animate({
					backgroundPosition : '0 0',
				},200)
			}else{//大于的则不出现
				$(el).animate({
					backgroundPosition : '-38px 0',
				},200)
			}
		})
		inputs.val(index+1)//有值则给按钮添加类名
		//console.log(inputs.val(index+1));
		$('#index .btn').addClass('btn1');
	  }
  })
  /*点击提交*/
  $('#index .btn').on('tap',function(){
	
	  var onoffScore = true;//评分
	  var onoffChecked = false;//标签
	  //判断是不是都有评分
	  $('.scroe .list li input').each(function(i,el){
		  // console.log(el.value);
		  if(el.value == ''){
			  onoffScore = false;
		  }
	  })
	  //判断是否有添加标签
	  $('.label input').each(function(i,el){
		  if(el.checked){
			  onoffChecked = true;
		  }
	  })
	  if(onoffScore){//已经有评分
		if(onoffChecked){//有添加标签
			/* 显示遮罩层 */
			$('#mask').addClass('show');//给第三个页面添加类名
			$('#mask').css({//改变层级
				zIndex : 20
			}).animate({//改变透明度
				opacity : 1
			},1500,function(){
				$('#index').animate({//改变模糊度
					filter:'blur(4px)'
				},300)
			})
			
			/* 遮罩层消失 */
			setTimeout(function(){
				$('#mask').animate({
					opacity : 0
				},1000,function(){
					$('#mask').css({
						zIndex : 6
					}).removeClass('show');
					$('#index').animate({
						filter:'blur(0px)'
					},300)
				})
				$("#news").addClass('show');
				$('#index').animate({
					opacity :0
				},1000,function(){
					$('#index').removeClass('show').css({
						opacity : 1
					})
				})	
			},2500)
			
			
		}else{//没有添加标签
			$('#index .info').css({
				transform : 'scale(1)',
				opacity : 1
			}).html('请给景区添加标签')
			setTimeout(function(){
				$('#index .info').css({
					transform : 'scale(0)',
					opacity : 0
				})
			},1500)
		} 
	  }else{
		  $('#index .info').css({
			transform : 'scale(1)',
			opacity : 1
		  }).html('请给景区评分')
		  setTimeout(function(){
			$('#index .info').css({
				transform : 'scale(0)',
				opacity : 0
			})
		  },1500)
	  }
    })
}
//新闻
newFn()
function newFn(){
	var infoObj = {
		video:null,
		image:null
	}
	$('#news input').eq(0).on('change',function(){
			var info = $('#news input').get(0).files[0];
			var str = info.type.split('/')[0];
			
			if(str == 'video'){
				infoObj.video = info;
				$('#news .btn').addClass('btn1');
			}else{
				alert('请选择正确的文件')
			}
		})
		
		$('#news input').eq(1).on('change',function(){
			var info = $('#news input').get(1).files[0];
			var str = info.type.split('/')[0];
			
			if(str == 'image'){
				infoObj.image = info;
				$('#news .btn').addClass('btn1');
			}else{
				alert('请选择正确的文件')
			}
		})
		
		$('#news .btn').on('tap',function(){
			
			// 判断是否有上传的内容
			if(infoObj.image||infoObj.video){
				
				//跳转到底五页
				$('#uplod').addClass('show');
				$('#news').animate({
					opacity:0
				},1000,function(){
					$('#news').removeClass('show');
					$('#news').css({
						opacity : 1
					})
				})
				
			}else{
				$('#news .info').css({
					opacity:1,
					transform: 'scale(1)'
				})
				setTimeout(function(){
					$('#news .info').css({
						opacity:0,
						transform: 'scale(0)'
					})
				},1500)
			}
		})
				
}

//uplod页面
uplodFn()
	function uplodFn(){
		
		$('#uplod label').on('tap',function(){
			
			$('#uplod .btn').addClass('btn1');
		})
		
		$('#uplod .btn').on('tap',function(){
			var onoff = false;
			var allInput = $('#uplod .uplod_bg input');
			allInput.each(function(i,el){
				
				if(el.checked){
					onoff = true;
				}
			})
			if(onoff){
				//跳转到第六平
				$('#reset').addClass('show');
				$('#uplod').animate({
					opacity:0
				},1000,function(){
					$('#uplod').removeClass('show').css({
						opacity:1
					})	
				})			
			}else{
				$('#uplod .info').css({
					transform : 'scale(1)',
					opacity : 1
				})
				setTimeout(function(){
					$('#uplod .info').css({
						transform : 'scale(0)',
						opacity : 0
					})
				},1500)
				
				
			}
		})
		
		
		
		
		
		
		
		
		
		
	}
	// 重置页面
	fnReset()
	function fnReset(){
		
		$('#reset .btn').on('tap',function(){	
			$('#index').css({
				zIndex:1
			}).addClass('show')
			
			$('#reset').animate({
				opacity:0
			},1000,function(){
				$('#reset').removeClass('show')
				.css({
						opacity : 1
					});
				$('#index').css({
					zIndex:7
				})
			})
			
		})
	}