	var datepicker = {};
	datepicker.getMonthData = function (year,month){
		var ret = [];//返回结果，数组元素是当前月份的日期。
		if(!year || !month){//如果没有传入year或者month则使用当前日期。
			var today = new Date();//定义对象
			year = today.getFullYear();//获取年份。
			month = today.getMonth() + 1;//获取月份。
		}
		var firstDay = new Date(year,month - 1,1);//这个月的第一天。
		var firstDayWeekDay = firstDay.getDay();//判断这个月第一天是周几，判断这天前有多少上个月的数据需要显示。
		if(firstDayWeekDay === 0)//周日的值是默认是0。如果是周日，赋值为7.
			{
				firstDayWeekDay = 7;
			}
		var lastDayOfLastMonth = new Date(year,month - 1,0);//上个月的最后一天
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();//将最后一天的日期单独存储。
		var preMonthDayCount = firstDayWeekDay - 1;//在第一行需要显示多少个上个月的日期。
		var lastDay = new Date(year,month,0);//当月的最后一天
		var lastDate = lastDay.getDate();//单独保存上面的日期。
		
		for(var i = 0;i < 7*6; i++){//获取当月的每一天
			var date = i + 1 - preMonthDayCount;
			var showDate = date;
			var thisMonth = month;
			if(date <= 0){//上一月
				thisMonth = month - 1;
				showDate = lastDateOfLastMonth + date;
			}
			else if(date > lastDate){//下一月
				thisMonth = month +1;
				showDate  = showDate - lastDate;
			}
			
			if(month === 0) thisMonth = 12;
			if(month ===13) thisMonth = 1;
			
			ret.push({
				month : thisMonth,
				date : date,
				showDate : showDate 
			});
		}
		return ret; 

	};
	window.datepicker = datepicker;//暴露对象datepicker。
