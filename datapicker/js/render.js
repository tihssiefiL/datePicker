	var datepicker = window.datepicker;
	var monthData;
	var $wrapper;
	var today = new Date();//定义对象
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
	datepicker.buildUi = function (year,month){	
		monthData = datepicker.getMonthData(year,month);
		var html = '<div class="ui-datepicker-header">'+
				'<span class="ui-datepicker-btn ui-datepicker-prev-btn" id="ui-datepicker-prev-btn" >&lt;</span>'+
				'<span class="ui-datepicker-btn ui-datepicker-next-btn" id="ui-datepicker-next-btn">&gt;</span>'+
				'<span class="ui-datepicker-curr-month">'+ year + '-' + month + '</span>'+
			'</div>'+
			'<div class="ui-datepicker-body">'+
				'<table>'+
					'<thead>'+
						'<tr>'+
							'<th>一</th>'+ 
							'<th>二</th>'+
							'<th>三</th>'+
							'<th>四</th>'+
							'<th>五</th>'+
							'<th>六</th>'+
							'<th style=" color: #FFF;background-color: rgba(255,0,0,0.7);">日</th>'+
						'</tr>'+
					'</thead>'+
					'<tbody>';
					for( var i = 0; i < monthData.length; i++){
						var date = monthData[i];
						if(i%7 === 0){
							html += '<tr>';
						}
						html +=  '<td>' + date.showDate + '</td>';
						if(i%7 === 6){
							html += '</tr>';
						}
					}
					html += '</tbody>'+
				'</table>'+
			'</div>';
			return html;
	};
	
	
	
datepicker.render = function (direction){
	if(direction == 'prev'){
		month--;
		if(month == 0){
			year--;
			month = 12;
		}
	}
	
	if(direction == 'next'){
		month++;
		if(month == 13){
			year++;
			month = 1;
		}
	}
			console.log("month="+month);
			console.log("year="+year);
			
	var html = datepicker.buildUi(year,month);
//	$wrapper = document.getElementById('datePicker');
	$wrapper = document.createElement("div");
	$wrapper.classList.add("ui-datepicker-wrapper");
	
	var sum = document.getElementsByClassName("ui-datepicker-wrapper");
	var sumLength = sum.length;
	$wrapper.innerHTML = html;
	document.body.appendChild($wrapper);

	
	
	}
	
	
datepicker.init = function(input){
	datepicker.render();
	var $input = document.querySelector(input);
	var isOpen = false;
	
	$input.addEventListener('click',function (){
		if(isOpen){
			$wrapper.classList.remove('ui-datePicker-wrapper-show');
			isOpen = false;
		}else{
			$wrapper.classList.add('ui-datePicker-wrapper-show');
			var top = $input.offsetTop;
			var left = $input.offsetLeft;
			var height = $input.offsetHeight;
			$wrapper.style.top = top + height + 2 + 'px';
			$wrapper.style.left = left + 'px';
			isOpen = true;
		}	
	},false);	
	var prevMonth = document.getElementById("ui-datepicker-prev-btn");
	var nextMonth = document.getElementById("ui-datepicker-next-btn");
	
	
	prevMonth.addEventListener('click',function(){
		console.log('prev');
		datepicker.render('prev');
	},false);
	nextMonth.addEventListener('click',function(){
	console.log('next');
	datepicker.render('next');
	},false);
}

