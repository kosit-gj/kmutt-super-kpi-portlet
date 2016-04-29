
function getThresholdFn(paramYear,paramScore){
	var dataReturn=[];
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiGolds/threshold.jsp",
		type:"get",
		dataType:"json",
		async:false,
		data:{"paramScore":""+paramScore+"","paramYear":""+paramYear+""},
		success:function(data){
			//alert(data);
			//console.log(data);
			dataReturn= data;
			
		}
	});
	return dataReturn;
}

var dataThreshold = getThresholdFn("2558","2");
console.log(dataThreshold[0][1]);
