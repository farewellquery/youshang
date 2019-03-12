
(function(){
            var $box = $("#carousel"),
                $picLi = $("#carousel a div"),
                $tabLi = $("#carousel #circle1 a"),
                $btnLe = $("#carousel #circle222 #carouselleft"),
				$btnRi = $("#carousel #circle222 #carouselright"),
                len = $tabLi.length,
                timer;
                first = 0;
            //初始化设置
            $picLi.hide().eq(0).show();//隐藏$picLi 然后显示第一个
            $tabLi.eq(0).addClass("on");//为第一张图片添加属性
            //tab区域
            $tabLi.mouseover(function () {
                var x = $(this).index();//tabLi[i].index = i;
                if(x != first){
                     change(x);//改变X的值
                }
            });
            //btn区域
            $btnLe.click(function () {
                var x = first;
					x --;
					if(x<0){
					x = len-1;
					}
                change(x);
            });
			$btnRi.click(function () {
			    var x = first;
					x ++;
					x %= len;
					change(x);
			});
 
            //自动轮播
            auto();
 
            $box.hover(function () {
                clearInterval(timer);
            },auto);
 
            function auto() {
               timer = setInterval(function () {
                    var x = first;
                    x++;
                    x %= len;
                    change(x);
                },5000)
            }
            //变化函数
            function change(i) {
                $picLi.eq(first).fadeOut(1000);
                $tabLi.eq(first).removeClass("on");
                first = i;
                $picLi.eq(first).fadeIn(1000);
                $tabLi.eq(first).addClass("on");
            }
        })();
		
(function(){
	var $commodity2 = $("* #commodity2"),
		$commodity21 = $("* #commodity21");
		$commodity2.mouseenter(function () {
		var $index = $(this).eq();
		$goods = $index.prevObject;
		$price = $goods[0].children[0];
 		console.log($price);
		console.log($goods);
		$goods.append('<div id="mark" style="height: 300px;width: 370px;background: #000;opacity: 0.2;position:relative;top:-140px;left:0;"></div>');
		console.log($($price));
		$($price).animate({top : 300},500);
	
		});
		$commodity2.mouseleave(function(){
			$("#mark").remove();
		$($price).animate({top : 380},500);	
		});
})();
