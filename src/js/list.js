(function(){
	var $updownup = $("* #updowmup");
	var $updowndown = $("* #updowmdowm");
	var $inputNum = $("* #needname");
	var $onegood = $("* #goodlistmessage li");
	var $baihuo = $("#baihuo");
	var $jiantou = $("* .jiantou");
	console.log($jiantou);
	$updownup.click(function(){
		var $upday = $(this).eq(0).parent().parent().find("input");
		var Num = parseInt($upday.val())  + 1;
		$upday.val(Num);
	});
	
 	$updowndown.click(function(){
		if( $(this).eq(0).parent().parent().find("input").val() > 0){
			var $downbottom = $(this).eq(0).parent().parent().find("input");
			var Num = parseInt($downbottom.val())  - 1;
			$downbottom.val(Num);
		}
	});
	$onegood.mouseover(function(){
		$(this).eq(0).css('border','1px solid rgb(197, 21, 32)');
	});
	$onegood.mouseout(function(){
		$(this).eq(0).css('border','1px solid rgb(255, 255, 255)');
	});
	$baihuo.mouseover(function(){
		$(this).find("b").css('display','none');
		$(this).find("i").css('display','block');
	});
	$baihuo.mouseout(function(){
		$(this).find("b").css('display','block');
		$(this).find("i").css('display','none');
	});
	$jiantou.mouseover(function(){
		$(this).removeClass("jiantou");
		$(this).addClass("jiantouchange");
	});
	$jiantou.mouseout(function(){
		$(this).removeClass("jiantouchange");
		$(this).addClass("jiantou");
	});
	
})();