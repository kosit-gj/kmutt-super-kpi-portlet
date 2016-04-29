$(document).ready(function(){
	
//alert("heloo");
	
	

	
	
	paramMonthFn=function(){
		var htmlParam="";
			$.ajax({
				url:"/kmutt-super-kpi-portlet/Model/kpiGolds/paramMonth.jsp",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
					 /*Logic program here.*/
	                
					console.log(data);
	                $.each(data,function(index,indexEntry){
	                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[2]+"</option>";
	                });
	                $("#monthParam").html(htmlParam);
	                
	                
	                /*Logic program here.*/
				}
			});
		
		}
	paramOrgFn=function(){
		
		var htmlParam="";
			$.ajax({
				url:"/kmutt-super-kpi-portlet/Model/kpiGolds/paramOrg.jsp",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
					/*Logic program here.*/
	                
	                $.each(data,function(index,indexEntry){
	                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[1]+"</option>";
	                });
	                $("#orgParam").html(htmlParam);
	                
	                /*Logic program here.*/
				}
			});
		
		};
	
	getKpiSKDataFn=function(paramYear,paramMonth,paramOrg){
		
		var htmlParam="";
			$.ajax({
				url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mKpiSKData.jsp",
				type:"get",
				dataType:"json",
				async:false,
				data:{"month_id":paramMonth,"org_id":paramOrg},
				success:function(data){
					
					/*Logic program here.*/
	                  //alert(data);
	                  $.each(data,function(index,indexEntry){
	                	// alert(indexEntry[1]); 
	                	 
	                	  
	                	  var dataThreshold = getThresholdFn("2558","2");
	                	  var thresholdName=dataThreshold[0][1];
	                	  var thresholdCOlor=dataThreshold[0][4];
	                ;
						  
	                	  
	                	  
	                	  htmlParam+="<div class='span6'>";
	                		  htmlParam+="<div class='row-fluid'>";
	                			  htmlParam+="<div class='span6  boxGraph' >";
	             				
	                				htmlParam+="<div class='contentGraph' style= border: 5px solid "+thresholdCOlor+";>";
	                				 htmlParam+="<center>";
	                				 htmlParam+="Goal "+(index+1)+" <br>";
	                				 htmlParam+="New Approach <br>";
	                				  htmlParam+="to Learning<br>";
	                				  htmlParam+="- - - - - - - - - - - - - - <br>";
	                				  htmlParam+="SK 1-Social Change<br>";
	                				  htmlParam+="Agent<br>";
	                				  htmlParam+="25 %<br>";
	                				  htmlParam+="</center>";
	                				htmlParam+="</div>";
	             					
	                				htmlParam+="</div>";
	                				htmlParam+="<div class='span6  boxGraph graph2' >";
	             					
	                				htmlParam+="<div class='areaGraph'>";
	                				htmlParam+=" <div class='donutChart'></div>";
	                				htmlParam+="</div>";
	             					
	                			htmlParam+="</div>";
	             				
	                		htmlParam+="</div>";
	                	htmlParam+="</div>";
	             
	                  });
	                  $("#SKdataArea").html(htmlParam);
	                  
	                  // binding donut chart 
	                  $(".donutChart").circliful({
	              	    animation: 1,
	              	    animationStep: 5,
	              	    foregroundBorderWidth: 30,
	              	    backgroundBorderWidth: 30,
	              	    percent: 38,
	              	    textSize: 28,
	              	    textStyle: 'font-size: 14px;',
	              	    textColor: '#666',
	              	    multiPercentage: 1,
	              	    percentages: [10, 20, 30]
	              	});
	                  
	                  
	                /*Logic program here.*/
				}
			});
		
		}
	
	
	
  //initial data start
	paramOrgFn();
	paramMonthFn();
	
	
	
  //initial data end
	
  //search data for data start
	$("#btnSubmit").click(function(){
		
		
		var paramYear = $("#paramYear").val();
		var paramMonth =$("#monthParam").val();
		var paramOrg =$("#orgParam").val();
		
		getKpiSKDataFn(paramYear,paramMonth,paramOrg);
		
		return false;
	});
  //search data for data end

});