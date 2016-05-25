	//var pointCurrentGold=0;
	//var endGold =0;

var pagingGoldKpiFn=function(data,sk_id){
		//alert("hellos");
		//alert(sk_id);
		var pointCurrentGold=(sk_id-1);
		var endGold=data.length-1;
		//alert(pointCurrentGold);
	
		$(".nextGolds").on("click",function(){
			
			if(endGold==pointCurrentGold){
				pointCurrentGold=endGold;
				return false;
			}else{
				pointCurrentGold+=1;
			}
			//alert(pointCurrentGold);
			//createSubPanelKpi(id,data[pointCurrent],dataParam);
			//alert("hello next-->"+pointCurrent+"=and="+data[pointCurrent]);
			//alert("hello next-->"+pointCurrent+"=and="+data[pointCurrent][0]);
			$("#donutChart-"+data[pointCurrentGold][0]).click();
		});
		
		$(".prevvGolds").on("click",function(){
			
			if(pointCurrentGold==0){
				pointCurrentGold=0;
				return false;
			}else{
				pointCurrentGold-=1;
			}
			//alert(pointCurrentGold);
			//createSubPanelKpi(id,data[pointCurrent],dataParam);
			//alert("hello prev-->"+pointCurrent+"=and="+data[pointCurrent]);
			//alert("hello prev-->"+pointCurrent+"=and="+data[pointCurrent][0]);
			$("#donutChart-"+data[pointCurrentGold][0]).click();
		});
	}

$(document).ready(function(){
	
	
	
	
	
	
	getKpiSKDataFn=function(paramYear,paramMonth,paramOrg){
		
		$("#SKdataArea").empty();
		var score ="";
		var thresholdName="";
   	    var thresholdColor="";
		var htmlParam="";
		
			$.ajax({
				url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mKpiSKData.jsp",
				type:"get",
				dataType:"json",
				async:false,
				data:{"month_id":paramMonth,"org_id":paramOrg},
				success:function(data){
					
					

					if(data==''){
						alert("ไม่มีข้อมูล");
						return false;
					}
					
					/*Logic program here.*/
	                  //alert(data);
	                  $.each(data,function(index,indexEntry){
	                	//alert(indexEntry[4]); 
	                	 
	                	   score = parseFloat(indexEntry[4]).toFixed(2);
	                	 
	                	 // alert(score);
	                	  var dataThreshold = getThresholdFn(paramYear,score);
	                	  if(dataThreshold!=""){
	                		  
	                		   thresholdName=dataThreshold[0][1];
	                		   thresholdColor=dataThreshold[0][4];
		                	  
	                	 }else{
	                		   thresholdName="#";
		                	   thresholdColor="#CCCCCC";
	                	 }
	                	  
	                	  
	                      
	                	  htmlParam="";
	                	  /*
	                	  [["1","Goal 1: New Approach to Learning","1","SK 1-Social Change Agent 5.00","86.200000"]]
	                	  */
	                	  
	                	  htmlParam+="<div class='span4'>";
	                		  htmlParam+="<div class='row-fluid'>";
	                			  htmlParam+="<div class='span6  boxGraph' >";
	             				
	                				htmlParam+="<div style='border: 5px solid "+thresholdColor+"; background:"+theme[index]+"' class='contentGraph' id='graph-"+indexEntry[0]+"' style= border: 5px solid "+thresholdColor+";>";
	                				 htmlParam+="<center>";
	                				 htmlParam+=""+indexEntry[1]+" <br>";
	                				  htmlParam+="- - - - - - - - - - - - - - <br>";
	                				  htmlParam+=""+indexEntry[3]+" <br>";
	                				  htmlParam+="<span style='display:none;' id='result-"+indexEntry[0]+"'>"+parseFloat(indexEntry[4]).toFixed(2)+"%</span>";
	                				  htmlParam+=" <span style='display:none;' id='fillColor-"+indexEntry[0]+"'>"+thresholdColor+"</span>";
		                			  htmlParam+=" <span style='display:none;' id='foregroundColorParam-"+indexEntry[0]+"'>"+theme[index]+"</span>";
	                				  htmlParam+="</center>";
	                				htmlParam+="</div>";
	             					
	                				htmlParam+="</div>";
	                				htmlParam+="<div id='contentDonut-"+indexEntry[0]+"'  class='span4  boxGraph contentDonut graph2'  >";
	             					
	                				htmlParam+="<div class='areaGraph' >";
	                				htmlParam+=" <div class='donutChart' id='donutChart-"+indexEntry[0]+"'></div>";
	                				
	                				htmlParam+="</div>";
	             					
	                			htmlParam+="</div>";
	             				
	                		htmlParam+="</div>";
	                	htmlParam+="</div>";
	                	
	                	
	                	$("#SKdataArea").append(htmlParam);
	                	
	                	bindingDonutFn(indexEntry[0],score,thresholdColor,theme[index]);
	             
	                  });
	                  
	                  
	                 
	                  
	                //start
	              	$(".contentDonut").click(function(){
	              		
	              		var sk_id=this.id.split("-");
	              		
	              		sk_id=sk_id[1];
	              		//alert("sk_id1"+sk_id);
	              		var txtHtml=$("#graph-"+sk_id).html();
	              		

	              		var result=parseFloat($("#graph-"+sk_id).find("#result-"+sk_id).text()).toFixed(2);
	              		var fillColor=$("#graph-"+sk_id).find("#fillColor-"+sk_id).text();
	              		var foregroundColorParam=$("#graph-"+sk_id).find("#foregroundColorParam-"+sk_id).text();
	              	
	              		$.ajax({
	              			url:"/kmutt-super-kpi-portlet/View/subSkPage.jsp",
	              			type:"get", 
	              			dataType:"html",
	              			data:{"paramGetContextPath":"kmutt-super-kpi-portlet","txtHtml":txtHtml,"sk_id":sk_id,"result":result,"bg_color":foregroundColorParam},
	              			async:false,
	              			success:function(data){
	              				//alert(data);
	              				$("#SKdataArea").hide();
	              				$("#subSKdataArea").html(data).show();
	              				$(".btnRollbackArea").show();
	              				callSubKPIFn($("#paramYearEmbed").val(),$("#paramMonthFiscalEmbed").val(),$("#paramOrgEmbed").val(),sk_id,result,fillColor,foregroundColorParam);
	              			
	              			
	              				
	              				
	              			}
	              		});
	              		
	              	});
	              	$(".contentGraph").click(function(){
	              		//alert("hello jquery");
	              		//alert(this.id);
	              		//alert($(this).html());
	              		var sk_id=this.id.split("-");
	              		sk_id=sk_id[1];
	              		var txtHtml=$(this).html();
	              		
	              		var result=parseFloat($(this).find("#result-"+sk_id).text()).toFixed(2);
	              		var fillColor=$(this).find("#fillColor-"+sk_id).text();
	              		var foregroundColorParam=$(this).find("#foregroundColorParam-"+sk_id).text();
	              		/*
	              		alert(fillColor);
	              		alert(foregroundColorParam);
	              		*/
	              		
	              		$.ajax({
	              			url:"/kmutt-super-kpi-portlet/View/subSkPage.jsp",
	              			//url:"/kmutt-super-kpi-portlet/View/skpage.jsp",
	              			type:"get", 
	              			dataType:"html",
	              			data:{"paramGetContextPath":"kmutt-super-kpi-portlet","txtHtml":txtHtml,"sk_id":sk_id,"result":result,"bg_color":foregroundColorParam},
	              			async:false,
	              			success:function(data){
	              				//alert(data);
	              				$("#SKdataArea").hide();
	              				$("#subSKdataArea").html(data).show();
	              				$(".btnRollbackArea").show();
	              				
	              				//paramYearEmbed
	              				//paramMonthEmbed	
	              				//paramOrgEmbed
	              				
	              				callSubKPIFn($("#paramYearEmbed").val(),$("#paramMonthFiscalEmbed").val(),$("#paramOrgEmbed").val(),sk_id,result,fillColor,foregroundColorParam);
	              				
	              			}
	              		});
	              		
	              		
	              	});
	              	
	              	$("#btnRollback").click(function(){
	              		$("#SKdataArea").show();
	              		$("#subSKdataArea").hide();
          				$(".btnRollbackArea").hide();
	              		
	              	});
	                //end
	                /*Logic program here.*/
				}
			});
		
		}
	 
	
	
  //initial data start
	var d = new Date();
	var monthCurrent = d.getMonth(); 
	var monthTHCurrent=parseInt(monthCurrent)+1;
	//alert(monthTHCurrent);
	var yearCurrent = d.getFullYear(); 
	var yearTHCurrent= parseInt(yearCurrent)+543;
	
	setTimeout(function(){
		
		paramYearFiscalFn(yearTHCurrent,monthFiscalFn(monthTHCurrent));
		paramOrgFn();
		
	},1000);
	
	
  //initial data end
	
  //search data for data start
	$(".btnRollbackArea").hide();
	$("#btnSubmit").click(function(){
		
		
		
		var paramYear = $("#paramYear").val();
		var paramMonth =$("#monthParam").val();
		var paramMOnthArray=$("#monthParam").val().split("-");
		var paramMOnthFiscal=paramMOnthArray[0];
		var paramMOnth=paramMOnthArray[1];
		
		var paramOrg =$("#orgParam").val();
		
		$(".paramEmbed").remove();
		$("body").append("<input type=\"hidden\" id=\"paramYearEmbed\" class=\"paramEmbed\" name=\"paramYearEmbed\" value=\""+paramYear+"\">");
		
		$("body").append("<input type=\"hidden\" id=\"paramMonthFiscalEmbed\" class=\"paramEmbed\" name=\"paramMonthFiscalEmbed\" value=\""+paramMOnthFiscal+"\">");
		$("body").append("<input type=\"hidden\" id=\"paramMonthEmbed\" class=\"paramEmbed\" name=\"paramMonthEmbed\" value=\""+paramMOnth+"\">");
		$("body").append("<input type=\"hidden\" id=\"paramOrgEmbed\" class=\"paramEmbed\" name=\"paramOrgEmbed\" value=\""+paramOrg+"\">");
		
		
		//alert($("#paramYearEmbed").val()+"="+$("#paramMonthEmbed").val()+"="+$("#paramOrgEmbed").val());
		
		getKpiSKDataFn($("#paramYearEmbed").val(),$("#paramMonthEmbed").val(),$("#paramOrgEmbed").val());
		
		$("#SKdataArea").show();
		$("#subSKdataArea").hide();
		$(".btnRollbackArea").hide();
			
		
		return false;
	});
	
	setTimeout(function(){
		$("#btnSubmit").click();
	},1000);
	
  //search data for data end
	
	
	
 

});