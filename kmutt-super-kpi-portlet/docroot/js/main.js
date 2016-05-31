//check role here start
/*
var user =$(".user-full-name").text().trim();
var admin="";
//alert(user);
//Kosit Aromsava
//Joe Bloggs
if("Kosit Aromsava"==user){
	admin="1";
}else{
	admin="0";
}
*/
//check role here end
var theme=["#d2ddeb","#c7a1e3","#e4b4af","#d2d2d2","#d5e2bc","#f6d2b4","#cccccc","#cccccc","#cccccc","#cccccc","#cccccc"];



var responsiveFn=function(){
	var device;

	var widnDowWidth=$( window ).width();
	
	if(widnDowWidth<=480){
		/* Landscape phones and down */
	    //max-width: 480px
		device="landscapePhonesAndDown";
		
		
	}else if(widnDowWidth<=767){
		/* Landscape phone to portrait tablet */
	    //media max-width: 767px
		device="landscapePhoneToPortraitTablet";
		
	}else if(widnDowWidth>=768 && widnDowWidth<=979){
		/* Portrait tablet to landscape and desktop */
	    //media (min-width: 768px) and (max-width: 979px) 
		device="PortraitTabletTolandscapeAndDesktop";
		
		
	}else if(widnDowWidth>=980 && widnDowWidth<=1199){
		/*  desktop */
	    //@media (min-width: 980px) and (max-width: 1199px) 
		device="desktop";
		
		
	}else if(widnDowWidth>=1200){
		/* Large desktop */
	    //@media (min-width: 1200px)
		device="largeDesktop";
		
		
	}
	return device;
	
	
	
	
	
	
	
	
	
	
	
};
//alert(responsiveFn());

var getRangeThreholdFn = function(paramYear){
	var rangeThrehold="";
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/rangeThreshold.jsp",
		type:"get",
		dataType:"json",
		async:false,
		data:{"paramYear":""+paramYear+""},
		success:function(data){
			//alert(data);
			/*
			 [
              {
                  "minValue": "0",
                  "maxValue": "25",
                  "code": "#e00000",
                  "alpha": "80"
              },
              {
                  "minValue": "0",
                  "maxValue": "25",
                  "code": "#e00000",
                  "alpha": "80"
              }
              ]
              */
			rangeThrehold+="[";
			$.each(data,function(index,indexEntry){
				
				//alert(indexEntry[0]+"---"+indexEntry[1]);
				if(index==0){
					rangeThrehold+="{";
				}else{
					rangeThrehold+=",{";
				}
				rangeThrehold+="\"minValue\":\""+indexEntry[0]+"\",";
				rangeThrehold+="\"maxValue\":\""+indexEntry[1]+"\",";
				rangeThrehold+="\"code\":\""+indexEntry[2]+"\",";
				rangeThrehold+="\"alpha\":\"80\"";
				
				rangeThrehold+="}";
			});
			rangeThrehold+="]";
		}
	});
	//var eval("("+rangeThrehold+")");
	return eval("("+rangeThrehold+")");
};
//console.log(getRangeThreholdFn(2559));

//function  find target percentage
var findTargetPercentage = function(percentage,result,target){
	
		var percentageTarget=""; 
			
		percentageTarget=(percentage/result)*target;
		
		return parseFloat(percentageTarget).toFixed(2);
		
};
//alert(findTargetPercentage(83.52,50.00,59.86));


var monthFiscalFn = function(monthTHCurrent){
	var monthFiscalMonth = "";
	if(monthTHCurrent==1){
		monthFiscalMonth=4;
	}else if(monthTHCurrent==2){
		monthFiscalMonth=5;
	}else if(monthTHCurrent==3){
		monthFiscalMonth=6;
	}else if(monthTHCurrent==4){
		monthFiscalMonth=7;
	}else if(monthTHCurrent==5){
		monthFiscalMonth=8;
	}else if(monthTHCurrent==6){
		monthFiscalMonth=9;
	}else if(monthTHCurrent==7){
		monthFiscalMonth=10;
	}else if(monthTHCurrent==8){
		monthFiscalMonth=11;
	}else if(monthTHCurrent==9){
		monthFiscalMonth=12;
	}else if(monthTHCurrent==10){
		monthFiscalMonth=1;
	}else if(monthTHCurrent==11){
		monthFiscalMonth=2;
	}else if(monthTHCurrent==12){
		monthFiscalMonth=3;
	}
	return monthFiscalMonth;
};
var insertCommentFn = function(kpiID,editor_data,paramYear,paramMonth,paramOrg){
	/*
	alert(kpiID);
	alert(editor_data);
	alert(paramYear);
	alert(paramMonth);
	alert(paramOrg);
	*/
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiPerspective/mComment.jsp",
		type:"get",
		dataType:"json",
		async:false,
		data:{"paramMonth":paramMonth,"paramOrg":paramOrg,"paramYear":paramYear,"editor_data":editor_data,"kpiID":kpiID,"action":"updateComent"},
		success:function(data){
		
			if(data=='success'){
				alert("บันทึกเรียบร้อย");
				if(editor_data.trim()==""){
					$("#kpiIDComment-"+kpiID).removeClass("icon-info-sign").css({"color":"gray"}).addClass("icon-plus-sign");
				}else{
					$("#kpiIDComment-"+kpiID).removeClass("icon-plus-sign").css({"color":"green"}).addClass("icon-info-sign");
				}
				$("#dialog-comment").dialog( "close" );
			}else{
				alert("ไม่สามารถบันทึกได้");
			}
		}
	});
}
var modalAddCOmmentFn=function(kpiID){
	var editor="";
	var editor_data="";
//dialog add comment here start
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiPerspective/mComment.jsp",
		type:"get",
		dataType:"html",
		async:false,
		data:{"paramMonth":$("#paramMonthEmbed").val(),"paramOrg":$("#paramOrgEmbed").val(),"paramYear":$("#paramYearEmbed").val(),"kpiID":kpiID,"action":"getDataComment"},
		success:function(data){
			
			
			if(data.trim()=="null"){
				data="";
				
			}
			if($("#checkRole").val().trim()=="Admin"){
			$("#CommentArea").hide();
			setTimeout(function(){
				
				$("#CommentArea").html("<textarea name=\"editor1\" id=\"editor1\" rows=\"9\" cols=\"85\">"+data+"</textarea>");
				//$(".ui-dialog-buttonpane").show();
			    editor=CKEDITOR.replace( 'editor1', {
			    	toolbar:
			    		[ ['Bold', 'Italic', 'Underline','-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink'],
			    		['Outdent', 'Indent', '-', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']]
			    });
			    $("#CommentArea").show();
			},500);
		  //dialog start
			
		    $( "#dialog-comment" ).dialog({
		    	
		        resizable: true,
		        height:350,
		        width:350,
		        modal: true,
		        buttons: {
		          "Save": function() {
		        	  //logic save data to dataabase start
		        	 
		        	  editor_data = editor.getData();
		        	  //alert(kpiID);
		        	  //alert(editor_data);
		        	  
		        		  
		        	  insertCommentFn(kpiID,editor_data,$("#paramYearEmbed").val(),$("#paramMonthEmbed").val(),$("#paramOrgEmbed").val());
		        	 
		           // $( this ).dialog( "close" );
		          },
		          Cancel: function() {
		            $( this ).dialog( "close" );
		          }
		        }
		      });
		    //dialog end
		    
			}else{
				$("#CommentArea").html(data);	
				//$(".ui-dialog-buttonpane").hide();
				//dialog start
			    $( "#dialog-comment" ).dialog({
			    	
			        resizable: true,
			        /*height:350,*/
			        width:350,
			        modal: true
			       
			      });
			    //dialog end
			}
			
			
		}
	});
	
    
	//dialog add comment here end
}
var checkDataNotNull = function(valueData){
	var dataReturn="";
	if(valueData==null){
		dataReturn="N.A.";
	}else{
		dataReturn=parseFloat(valueData).toFixed(2);
	}
	return dataReturn;
};
var checkDataNotNullAndPercentage = function(valueData){
	var dataReturn="";
	if(valueData==null){
		dataReturn="N.A.";
	}else{
		dataReturn=parseFloat(valueData).toFixed(2)+"%";
	}
	return dataReturn;
};


var convertNullToZero = function(valueData){
	var dataReturn=0;
	if(valueData==null){
		dataReturn=0;
	}else{
		dataReturn=parseFloat(valueData).toFixed(2);
	}
	return dataReturn;
};
var paramMonthFn=function(month_current,paramYear){
	//alert(month_current);

	var htmlParam="";
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/paramMonth.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"fiscal_year":paramYear},
			success:function(data){
				
				/*Logic program here.*/
				//console.log(data);
				$("#monthParamArea").html("<select style=\"width:100px;\" id=\"monthParam\"> </select>");
                $.each(data,function(index,indexEntry){
                	if(parseInt(month_current)==parseInt(indexEntry[0])){
                		
                		htmlParam+="<option selected value='"+indexEntry[1]+"'>"+indexEntry[1]+"</option>";	
                	}else{
                		htmlParam+="<option value='"+indexEntry[1]+"'>"+indexEntry[1]+"</option>";
                	}
                });
                $("#monthParam").html(htmlParam);
                $("#monthParam").kendoDropDownList();
                
                /*Logic program here.*/
			}
		});
	
	}

var paramMonthFiscalFn=function(month_current,paramYear){

	var htmlParam="";
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/paramMonth.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"fiscal_year":paramYear},
			success:function(data){
				
				/*Logic program here.*/
				//console.log(data);
				$("#monthParamArea").html("<select style=\"width:100px;\" id=\"monthParam\"> </select>");
                $.each(data,function(index,indexEntry){
                	if(parseInt(month_current)==parseInt(indexEntry[1])){
                		
                		htmlParam+="<option selected value='"+indexEntry[1]+"-"+indexEntry[0]+"'>"+indexEntry[2]+"</option>";	
                	}else{
                		htmlParam+="<option value='"+indexEntry[1]+"-"+indexEntry[0]+"'>"+indexEntry[2]+"</option>";
                	}
                });
                $("#monthParam").html(htmlParam);
                $("#monthParam").kendoDropDownList();
                
                /*Logic program here.*/
			}
		});
	
	}

var paramOrgFn=function(){
	
	
	
	var checkDevice=responsiveFn();
	var widthGraph="";
	
	if(checkDevice=="largeDesktop"){
		widthGraph=300;
	}else{
		widthGraph=200;
	}
	
	var htmlParam="";
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/paramOrg.jsp",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				/*Logic program here.*/
                
                $.each(data,function(index,indexEntry){
                	
                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[1]+"</option>";
                });
                
                $("#orgParam").html(htmlParam).css({"width":widthGraph+"px"});
                
                $("#orgParam").kendoDropDownList();
                /*Logic program here.*/
			}
		});
	
	};
var paramYearFiscalFn=function(year_current,monthCurrent){
		
		
		var htmlParam="";
			$.ajax({
				url:"/kmutt-super-kpi-portlet/Model/paramYear.jsp",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
					
					 /*Logic program here.*/
	                
					console.log(data);
	                $.each(data,function(index,indexEntry){
	                	if(parseInt(year_current)==parseInt(indexEntry[0])){
	                		
	                		htmlParam+="<option selected value='"+indexEntry[0]+"'>"+indexEntry[0]+"</option>";
	                	}else{
	                		
	                		htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[0]+"</option>";
	                	}
	                });
	                $("#paramYear").html(htmlParam);
	                $("#paramYear").kendoDropDownList();
	                //cal month function here start
	                $("#paramYear").change(function(){
	                	
	                	
	                	paramMonthFiscalFn(monthCurrent,$(this).val());
	                });
	                $("#paramYear").change();
	                
	                //cal month function here end
	                /*Logic program here.*/
				}
			});
		
		}
var paramYearFn=function(year_current,monthCurrent){
		
		
		var htmlParam="";
			$.ajax({
				url:"/kmutt-super-kpi-portlet/Model/paramYear.jsp",
				type:"get",
				dataType:"json",
				async:false,
				success:function(data){
					
					
					 /*Logic program here.*/
	                
					console.log(data);
	                $.each(data,function(index,indexEntry){
	                	if(parseInt(year_current)==parseInt(indexEntry[0])){
	                		
	                		htmlParam+="<option selected value='"+indexEntry[0]+"'>"+indexEntry[0]+"</option>";
	                	}else{
	                		
	                		htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[0]+"</option>";
	                	}
	                });
	                $("#paramYear").html(htmlParam);
	                $("#paramYear").kendoDropDownList();
	                //cal month function here start
	                $("#paramYear").change(function(){
	                	
	                	/*
	                	var yearTHCurrent= parseInt(yearCurrent)+543;
	                	if( $("#paramYear").val()!=yearTHCurrent){
	                		
	                		alert("year not current");
	                		$("#monthParam").kendoDropDownList({
                			  enable: false
                			});
                			
	                		$(".monthParam").hide();
	                		
	                	}else{
	                		
	                		$("#monthParam").kendoDropDownList({
                			  enable: true
                			});
	                		
	                		$(".monthParam").show();
	                		//alert("year current");
	                		
	                	}
	                		*/
	                		
	                	
	                	
	                	paramMonthFn(monthCurrent,$(this).val());
	                });
	                $("#paramYear").change();
	                
	                //cal month function here end
	                /*Logic program here.*/
				}
			});
		
		}

var bindingDonutFn = function(id,score,fillColor,foregroundColorParam){
	 // binding donut chart 
	if(score==0){

		$("#donutChart-"+id).circliful({
		    animation: 1,
		    animationStep: 5,
		    foregroundBorderWidth: 30,
		    backgroundBorderWidth: 30,
		    percent: score,
		    text:"text",
		    textSize: 28,
		    textStyle: 'font-size: 14px; color:#ffffff;',
		    textColor: 'white',
		    fill:'#ffffff',
		    fillColor:fillColor,
		    multiPercentage: 1,
		    percentages: [10, 20, 30],
		    foregroundColor:foregroundColorParam,
		    icon: "f06a" ,
		    iconColor:"yellow",
		    iconPosition:"bottom",
		    backgroundColor:"#eeece1",
		    fontColor:"#000000"
		   
		    
		});
	}else{
		$("#donutChart-"+id).circliful({
		    animation: 1,
		    animationStep: 5,
		    foregroundBorderWidth: 30,
		    backgroundBorderWidth: 30,
		    percent: score,
		    textSize: 28,
		    textStyle: 'font-size: 14px; color:#ffffff;',
		    textColor: 'white',
		    fill:'#ffffff',
		    fillColor:fillColor,
		    multiPercentage: 1,
		    percentages: [10, 20, 30],
		    foregroundColor:foregroundColorParam,
		    backgroundColor:"#eeece1",
		    fontColor:"#000000",
		    textAdditionalCss:"box-shadow: 5px 5px 10px 10px rgba(50,50,50,.4);"
		  
		    
		});
	}
    
   // binding donut chart 
};

//var browser;
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

function getImageByOrg(paramOrg,paramType){
	//"picturePersonArea"
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mGetPicture.jsp",
		type:"get",
		dataType:"json",
		async:false,
		data:{"org_id":""+paramOrg+""},
		success:function(data){
			//alert(data[0]);
			//console.log(data);
			if(paramType=="per"){
				$("#picturePersonPerArea").html("<img width='200' src='/kmutt-super-kpi-portlet"+data[0]+"' />");
			}else{
				$("#picturePersonGoldsArea").html("<img width='200' src='/kmutt-super-kpi-portlet"+data[0]+"' />");	
			}
			
			
		}
	});
}




$(document).ready(function(){
	$(".powered-by").remove();
	$("#breadcrumbs").remove();
	

	 
	
	
	
	$( document ).ajaxStart(function() {
		var height=0;
		height=$( window ).height();
		height=(height/2);
		//alert(height);
		
		$(".loading").css({"top":height+"px"}).show();
		$(".aui .portlet-content, .aui .portlet-minimized .portlet-content-container").css({"opacity":"0.5"});
	});
	
	$( document ).ajaxStop(function() {
		$(".loading").hide();
		$(".aui .portlet-content, .aui .portlet-minimized .portlet-content-container").css({"opacity":"1"});
	});
	
	
});
//getImageByOrg(1);
/*
var dataThreshold = getThresholdFn("2559","0.00");

if(dataThreshold==""){
	alert("1");
}else{
	alert("2");
}
*/
//console.log(dataThreshold[0][1]);
//console.log(dataThreshold[0]);

