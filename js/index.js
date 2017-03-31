var currentpages = 0;
		$('.top-li').each(function(i){
			$('.top-li').eq(i).click(function()
			{
				$(this).addClass('select');
				$(this).siblings().removeClass('select');
				currentpages = i;
				$('#linear').css('left',(currentpages*33.3)+'%');
               slidebox(i);
			})
		})
		$('.icon').each(function(i){
			$('.icon').eq(i).click(function(){
				if($(this).hasClass("red"))
					return ;
				else
				{
				 $(this).addClass('red');
                 console.log($(this))
                 $(this).next().addClass('red');              
                 $(this).next().text(parseInt($(this).next().text())+1);	
				}
                
			})
		})
      function getclick(i)
      {
      	$('.top-li').eq(i).addClass('select');
      	$('.top-li').eq(i).siblings().removeClass('select');
      	$('#linear').css('left',(i*33.3)+'%')
      }
      function slidebox(i)
      {
      	var translateXsize = 33*i;
      	$('#main-box').css({
             'transform':'translateX(-'+translateXsize+'%)',
			'-ms-transform':'translateX(-'+translateXsize+'%)', 	
			'-moz-transform':'translateX(-'+translateXsize+'%)', 
			'-webkit-transform':'translateX(-'+translateXsize+'%)',
			'-o-transform':'translateX(-'+translateXsize+'%)'
      	})
      }

//返回角度
function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}
 
//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
 
    //如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }
 
    var angle = GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 4;
    } else if (angle >= 45 && angle < 135) {
        result = 1;
    } else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }
    return result;
}
 
//滑动处理
var startX, startY;
document.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;   
}, false);
document.addEventListener('touchend', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
          //  alert("没滑动");
            break;
        case 1:
          //  alert("向上");
            break;
        case 2:
            //alert("向下");
            break;
        case 3:
        {  
          
        	currentpages++;
        	if(currentpages===3)
        		currentpages=2;
        	getclick(currentpages);
        	slidebox(currentpages);
        }
           
            break;
        case 4:
             {
        	currentpages--;
        	if(currentpages===-1)
        		currentpages=0;
        	getclick(currentpages);
        	slidebox(currentpages);
        }
            break;
        default:            
    }   
}, false);