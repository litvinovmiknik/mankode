$(document).ready(function () {

function get_timer() {
	
	var date_new = dateEnd;
	var date_t = new Date(date_new);
	var date = new Date();
	var timer = date_t - date;
	
	if(date_t > date) {
		
		var day = parseInt(timer/(60*60*1000*24));
		if(day < 10) {
			day = '0' + day;
		}
		day = day.toString();
			
		var hour = parseInt(timer/(60*60*1000))%24;
		if(hour < 10) {
			hour = '0' + hour;
		}
		hour = hour.toString();
			
		var min = parseInt(timer/(1000*60))%60;
		if(min < 10) {
			min = '0' + min;
		}
		min = min.toString();
			
		var sec = parseInt(timer/1000)%60;
		if(sec < 10) {
			sec = '0' + sec;
		}
		sec = sec.toString();
		
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countdown__days0"),day[0]);
		}
		else {
			$(".countdown__days0").html(day[0]);
		}

		if(hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countdown__days1"),day[1]);
		}
		else {
			$(".countdown__days1").html(day[1]);
		}
		
		if(hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countdown__hours0"),hour[0]);
		}
		else {
			$(".countdown__hours0").html(hour[0]);
		}

		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countdown__hours1"),hour[1]);
		}
		else {
			$(".countdown__hours1").html(hour[1]);
		}
			
		if(min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countdown__minutes0"),min[0]);
		}
		else {
			$(".countdown__minutes0").html(min[0]);
		}

		if(sec[0] == 5 && sec[1] == 9) {
			animation($(".countdown__minutes1"),min[1]);
		}
		else {
			$(".countdown__minutes1").html(min[1]);
		}
			
		if(sec[1] == 9) {
			animation($(".countdown__seconds0"),sec[0]);
		}
		else {
			$(".countdown__seconds0").html(sec[0]);
		}

		animation($(".countdown__seconds1"),sec[1]);	
		setTimeout(get_timer,1000);
	}
	else {
		$('.prototype').val('Без бесплатного прототипа');
		$('.countdown').hide();
	}
	
}

function animation(vibor,param) {
	vibor.html(param)
		.css({'marginTop':'-20px','opacity':'0'})
		.animate({'marginTop':'0px','opacity':'1'});
}

function returnEndDate(d,h,m) {
	myDate.setDate(myDate.getDate() + d);
    myDate.setHours(myDate.getHours() + h);
    myDate.setMinutes(myDate.getMinutes() + m);
    return myDate;
}

var myDate = new Date();

if($.cookie("timer")) {
	var dateEnd = $.cookie("timer");
} else {
	var dateEnd = returnEndDate(0, 12, 0);
	$.cookie("timer", dateEnd, {expires: 7});
}

get_timer();
	
});