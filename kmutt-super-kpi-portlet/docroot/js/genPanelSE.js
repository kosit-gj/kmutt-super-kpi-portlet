// TEST GET DATA FROM MODEL page.jsp

	function genDataColumnChart(dataParam,kpi_id,chart_id){
		/*
		alert(dataParam[0]);
		alert(dataParam[1]);
		alert(dataParam[2]);
		alert(dataParam[3]);
		alert(kpi_id);
		*/
		//paramMonth,paramYear,paramOrg,paramSK
		/*
		 	[{
	            "label": "2557",
	            "value": "70.65"
	        }, {
	            "label": "2558",
	            "value": "88.88"
	        }, {
	            "label": "2559",
	            "value": "67.87"
	        }]
		 */
		var fomatJsonData="";
		$.ajax({
			url: "/kmutt-super-kpi-portlet/Model/SKPI/mQuery1Get3year.jsp",
			type: "get",
			dataType: "json",
			data:{"month_id":dataParam[0],"paramYear":dataParam[1],"org_id":dataParam[2],"sk_id":dataParam[3],"kpi_id":kpi_id},
			async: false,
			success:function(data) {
				fomatJsonData+="[";
				//["1","SKPI1","ผลการสำรว..","2559","50.00","83.52","0"]
				$.each(data,function(index,indexEntry){
					if(index==0){
						fomatJsonData+="{";
					}else{
						fomatJsonData+=",{";
					}
					fomatJsonData+="\"label\":\""+indexEntry[3]+"\",";
					fomatJsonData+="\"value\":\""+indexEntry[5]+"\"";
					
					fomatJsonData+="}";
				});
				
				fomatJsonData+="]";
			var objJsonData=eval("("+fomatJsonData+")");
			/*
			console.log("objJsonData");
			console.log(objJsonData);
			*/
			genChart(chart_id,objJsonData)
			
			}
		});
		
	}
	function genSubDataColumnChart(dataParam,kpi_id,chart_id){
		//month_id=59&org_id=1&paramYear=2559&kpi_id=9
		var fomatJsonData="";
		$.ajax({
			url: "/kmutt-super-kpi-portlet/Model/SKPI/mQuery2Get3year.jsp",
			type: "get",
			dataType: "json",
			data:{"month_id":dataParam[0],"paramYear":dataParam[1],"org_id":dataParam[2],"kpi_id":kpi_id},
			async: false,
			success:function(data) {
				fomatJsonData+="[";
				//["1","SKPI1","ผลการสำรว..","2559","50.00","83.52","0"]
				$.each(data,function(index,indexEntry){
					if(index==0){
						fomatJsonData+="{";
					}else{
						fomatJsonData+=",{";
					}
					fomatJsonData+="\"label\":\""+indexEntry[3]+"\",";
					fomatJsonData+="\"value\":\""+indexEntry[5]+"\"";
					
					fomatJsonData+="}";
				});
				
				fomatJsonData+="]";
			var objJsonData=eval("("+fomatJsonData+")");
			/*
			console.log("objJsonData");
			console.log(objJsonData);
			*/
			genChart(chart_id,objJsonData)
			
			}
		});
		
	}
	
	function genChart(chart_id,objJsonData){
		
		var checkDevice=responsiveFn();
		var widthGraph="";
		var heightGraph="";
		if(checkDevice=="landscapePhonesAndDown"){
			widthGraph=255;
			heightGraph=146;
			
		}else if(checkDevice=="landscapePhoneToPortraitTablet"){
			
			widthGraph=380;
			heightGraph=195;
			
		}else{
			widthGraph=350;
			heightGraph=146;
		}
		
		$(chart_id).insertFusionCharts({
			type: 'column2d',
	        renderAt: 'chart-container',
	        width: widthGraph,
	        height: heightGraph,
	        dataFormat: 'json',
	        dataSource: {
	            "chart": {
	            	"paletteColors": "#ffd625,#9ecf6c,#00cfff",
	                "bgColor": "#ffffff",
	                "borderAlpha": "0",
	                "canvasBorderAlpha": "0",
	                "usePlotGradientColor": "0",
	                "plotBorderAlpha": "10",
	                "rotatevalues": "0",
	                "valueFontColor": "#000000",                
	                "xAxisLineColor": "#999999",
	                "divlineColor": "#999999",               
                    "divLineAlpha": "0",
	                "showAlternateHGridColor": "0",
	                "showYAxisValues":"0",
	                "placeValuesInside": "0",
	                "valueFontColor": "#000000",
	          
	            },            
	            "data": objJsonData
		    }
		});
		
	}
	
	
	
	
	
	function genBulletChart(chart_id,result){
		
		//alert(result);
		
		var checkDevice=responsiveFn();
		var widthGraph="";
		var heightGraph="";
		if(checkDevice=="landscapePhonesAndDown"){
			widthGraph=121;
			heightGraph=0;
			
		}else if(checkDevice=="landscapePhoneToPortraitTablet"){
			
			widthGraph=370;
			heightGraph=0;
			
		}else{
			widthGraph=210;
			heightGraph=0;
			
		}
		
		

		$(chart_id).insertFusionCharts({
		        type: 'hbullet',
		        renderAt: 'chart-container',
		        width: widthGraph,
		        height: '54',
		        dataFormat: 'json',
		        dataSource: {
		            "chart": {
		                "lowerLimit": "0",
		                "upperLimit": "100",
		                "bgColor": "#D3D3D3,#ECECEC",
		                "bgRatio": "#D3D3D3,#ECECEC",
		                "chartBottomMargin": "25",
		                "showBorder": "0",
		                "showShadow": "0",
		                "targetFillPercent": "80",
		                "targetColor": "#004b7f",
		                "targetThickness": "5",
		                "setAdaptiveYMin": "1",
		                "showTickMarks":"0",
		                "showTickValues":"0",
		                "plotfillpercent": "50",
		                "targetFillPercent": "100"
		            },
		            "colorRange": {
		            	/*
		                "color": [
		                    {
		                        "minValue": "0",
		                        "maxValue": "25",
		                        "code": "#e00000",
		                        "alpha": "80"
		                    },
		                    {
		                        "minValue": "25",
		                        "maxValue": "50",
		                        "code": "#ffff00",
		                        "alpha": "80"
		                    },
		                    {
		                        "minValue": "50",
		                        "maxValue": "75",
		                        "code": "#9eff39",
		                        "alpha": "80"
		                    },
		                    {
		                        "minValue": "75",
		                        "maxValue": "100",
		                        "code": "#00b456",
		                        "alpha": "80"
		                    }
		                ]*/
		            	 "color": getRangeThreholdFn($("#paramYearEmbed").val())
		            	
		            },
		            "target": result
		        }
		    });

		}
	var setBorderBox = function(id,paramYear,dataScore){
		
		/*get color from thershold start*/
		if(parseInt(dataScore).toFixed(2)=="NaN"){
			dataScore=0;
		}else{
			dataScore=parseInt(dataScore).toFixed(2);
		}
		var dataThreshold = getThresholdFn(paramYear,dataScore);
		var colorThreshold=dataThreshold[0][4];
		/*get color from thershold end*/
		
		
		$("#panel-"+id).css({"border-color":colorThreshold});
	}
	var createSubPanelKpi = function(id,data,dataParam){
		//dataParam
		//["1","SKPI1","ผลการสำรวจความคิดเห็นเกี่ยวกับประสบการณ์ ","2559","50.00","83.52","0"]

		//check comment on kpi table start
		$.ajax({
			 url:'/kmutt-super-kpi-portlet/Model/kpiPerspective/mComment.jsp',
			 type:'get',
			dataType:'html',
			data:{"kpiID":id,"action":"getDataComment"},
			async:false,
			success:function(data){
				//alert("["+data.trim()+"]");
				if(data.trim()==null || data.trim()=="" || data.trim()=="null"){
					//alert("data is null");
					if($("#checkRole").val().trim()=="Admin"){
						textComment="<i class='icon-plus-sign btnCommintInline'  id='kpiIDComment-"+id+"'></i>";
					}else{
						textComment="";
					}
				}else{
						textComment="<i class='icon-info-sign btnCommintInline' style='color:green;' id='kpiIDComment-"+id+"'></i>";
				}
			}
		});
		//check comment on kpi table end
		
			$("#panel_"+id+"_content").html(data[1]);
			
			$("#panelTitleChart_"+id).html(data[2]+""+textComment);
			
			//panel_9_title
			//bullet_result_9
			$("#panel_"+id+"_title").html(checkDataNotNullAndPercentage(data[4]));
			$("#bullet_result_"+id).html(checkDataNotNullAndPercentage(data[5]));
			
			 genBulletChart("#bullet_"+id,data[5]);
			 /*
			 alert(dataParam);
			 alert(data[0]);
			 alert(id);
			 */
			 genSubDataColumnChart(dataParam,data[0],"#chart_"+id);
			 setBorderBox(id,dataParam[1],data[5]);
			 
			 
			 
			 $(".btnCommintInline").click(function(){
					//alert(this.id);
					var kpiID=this.id.split("-");
					kpiID=kpiID[1];
					modalAddCOmmentFn(kpiID);
				});
			 
		
	};
	var pagingKpiFn=function(id,data,dataParam){
		
		var pointCurrent=0;
		var end =data.length-1;
		
		$("#next-"+id).click(function(){
			if(end==pointCurrent){
				//pointCurrent=end;
				pointCurrent=0;
				//return false;
			}else{
				pointCurrent+=1;
			}
			
			createSubPanelKpi(id,data[pointCurrent],dataParam);
			//alert("hello next-->"+pointCurrent+"=and="+data[pointCurrent]);
		});
		
		$("#prev-"+id).click(function(){
			
			if(pointCurrent==0){
				//pointCurrent=0;
				pointCurrent=end;
				//return false;
			}else{
				pointCurrent-=1;
			}
			createSubPanelKpi(id,data[pointCurrent],dataParam);
			//alert("hello prev-->"+pointCurrent+"=and="+data[pointCurrent]);
		});
	}
	
var createPanelKpi = function(data,dataParam,foregroundColorParam){
	//["1","SKPI1","ผลการสำรวจความคิดเห็นเกี่ยวกับประสบการณ์ ","2559","50.00","83.52","0"]

	var panel_chart_count = data.length;
	$("#Content").empty();
	$.each(data,function(index,indexEntry){
		
		//check comment on kpi table start
		$.ajax({
			 url:'/kmutt-super-kpi-portlet/Model/kpiPerspective/mComment.jsp',
			 type:'get',
			dataType:'html',
			data:{"kpiID":indexEntry[0],"action":"getDataComment"},
			async:false,
			success:function(data){
				//alert("["+data.trim()+"]");
				if(data.trim()==null || data.trim()=="" || data.trim()=="null"){
					//alert("data is null");
					if($("#checkRole").val().trim()=="Admin"){
						textComment="<i class='icon-plus-sign btnCommintInline'  id='kpiIDComment-"+indexEntry[0]+"'></i>";
					}else{
						textComment="";
					}
				}else{
						textComment="<i class='icon-info-sign btnCommintInline' style='color:green;' id='kpiIDComment-"+indexEntry[0]+"'></i>";
				}
			}
		});
		//check comment on kpi table end
		
		
		var weight_kpi="";
		var kpi_result="";
		
		//check null weight kpi
		if(indexEntry[4]==null){
			
			weight_kpi="&nbsp;";
		}else{
			weight_kpi=checkDataNotNullAndPercentage(indexEntry[4]);
			
		}
		//check null kpi result
		if(indexEntry[5]==null){
			
			kpi_result="&nbsp;";
		}else{
			kpi_result=indexEntry[5]+"%";
			
		}
		
		/*get color from thershold start*/
		var dataScore="";
		if(parseInt(kpi_result).toFixed(2)=="NaN"){
			dataScore=0;
		}else{
			dataScore=parseInt(kpi_result).toFixed(2);
		}
		var dataThreshold = getThresholdFn(dataParam[1],dataScore);
		var colorThreshold=dataThreshold[0][4];
		/*get color from thershold end*/

		var content = "";
		//alert(indexEntry);
		//alert(indexEntry[5]);
		content+="<div class=\"panel\" id=\"panel-"+indexEntry[0]+"\" style='border-color:"+colorThreshold+"' >";  
		 content+="<div class=\"page\"> "; 
		 content+="<div style=\"width:130px; height:5px; background:"+foregroundColorParam+";\" class=\"pagehead\"></div> "; 
		 content+="<div class=\"row-fluid\">  ";
		 if(indexEntry[6]==1){
			 content+="<div class=\"span4 areaPrev\"> "; 
		 }else{
			 content+="<div class=\"span4\" style='display:none;'> ";  
		 }
		 content+="<a onclick=\"return false;\" class=\"prev\"  id=\"prev-"+indexEntry[0]+"\" href=\"#\">";
		 content+="<img style=\"float:left;\" src=\"/kmutt-super-kpi-portlet/images/1461912837_icon-arrow-left-b.png\">";
		 content+="</a>  ";
		 content+="</div>  ";
		 if(indexEntry[6]==1){
		 content+="<div class=\"span4 pagecontentSub\" id=\"pagecontentSub\" >   ";
		 }else{
		 content+="<div class=\"span4\" id=\"pagecontent\"'>  ";	 
		 }
		 content+="<div class=\"row-fluid\">";
		 content+="<span id=\"panel_"+indexEntry[0]+"_content\">"+indexEntry[1]+"</span>";
		 content+="</div>  ";
		 content+="<div class=\"row-fluid\">";
		 content+="<span class='panel_weight' id=\"panel_"+indexEntry[0]+"_title\">"+weight_kpi+"</span></div>  ";
		 content+="</div>  ";
		 
		 if(indexEntry[6]==1){
			 content+="<div class=\"span4 areaNext\"> "; 
		 }else{
			 content+="<div class=\"span4\" style='display:none;'> ";  
		 }
		 content+="<a onclick=\"return false;\" class=\"next\"  id=\"next-"+indexEntry[0]+"\" href=\"#\">";
		 content+="<img style=\"float:right;\" src=\"/kmutt-super-kpi-portlet/images/1461912800_icon-arrow-right-b.png\">";
		 content+="</a>  ";
		 content+="</div>  ";
		 
		 content+="</div>  ";
		 content+="</div>  ";
		 content+="<div class=\"bulletbar\" id=\"bullet_"+indexEntry[0]+"\">Bullet</div>  ";
		 content+="<div class=\"bulletbar_result\" id=\"bullet_result_"+indexEntry[0]+"\">"+kpi_result+"</div>  ";
		 content+="<div class=\"barchart\" id=\"chart_"+indexEntry[0]+"\">columnChart</div>  ";
		 content+="<div class=\"panelTitleChart\">  ";
		 content+="<p style='margin: 0 0 0px;' id=\"panelTitleChart_"+indexEntry[0]+"\">";
		 
		 content+=""+indexEntry[2]+""+textComment+"";
		
		 content+="</p>  ";
		 content+="</div>  ";
		 content+="</div>";
		 
		 $("#Content").append(content);
		 genBulletChart("#bullet_"+indexEntry[0],indexEntry[5]);
		 //genChart("#chart_"+indexEntry[0]);
		 genDataColumnChart(dataParam,indexEntry[0],"#chart_"+indexEntry[0]);
		 
		 if(indexEntry[6]==1){
			 //alert("has child");
			 //month_id=59&org_id=1&paramYear=2559&kpi_id=9
			 $.ajax({
					url: "/kmutt-super-kpi-portlet/Model/SKPI/mQuery2.jsp",
					type: "get",
					dataType: "json",
					data:{"month_id":dataParam[0],"paramYear":dataParam[1],"org_id":dataParam[2],"kpi_id":indexEntry[0]},
					async: false,
					success:function(data) {
						//alert(data.length);
						pagingKpiFn(indexEntry[0],data,dataParam);
					}
			 });
			 
		 }
		 //dataParam
	});
	
	$(".btnCommintInline").click(function(){
		//alert(this.id);
		var kpiID=this.id.split("-");
		kpiID=kpiID[1];
		modalAddCOmmentFn(kpiID);
	});
	
};

	
var callSubKPIFn=function(paramYear,paramMonth,paramOrg,paramSK,score,fillColor,foregroundColorParam){
	
	//biding donut chart here
	 bindingDonutFn(paramSK+"-Sub",score,fillColor,foregroundColorParam);
	
	
	var dataParam=[paramMonth,paramYear,paramOrg,paramSK]
	$.ajax({
		url: "/kmutt-super-kpi-portlet/Model/SKPI/mQuery1.jsp",
		type: "get",
		dataType: "json",
		data:{"month_id":paramMonth,"paramYear":paramYear,"org_id":paramOrg,"sk_id":paramSK},
		async: false,
		success:function(data) {
			console.log(data);
			//jquery1.10+
			//var data = results.responseJSON;
			/*listvalueTemp = data;
			console.log("listvalueTemp");
			console.log(listvalueTemp);
			*/
			//click prev and next golds start
				
				$.ajax({
      			url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mGoal.jsp", 
      			type:"get", 
      			dataType:"json",
      			data:{"paramMonth":$("#paramMonthEmbed").val(),"paramOrg":$("#paramOrgEmbed").val(),"paramYear":$("#paramYearEmbed").val()},
      			async:false,
      			success:function(data){
      				//alert("mGoal");
      				//alert(data);
      				
      				pagingGoldKpiFn(data,paramSK);
      				
      			}
				});
				
			//click prev and next golds end	
			createPanelKpi(data,dataParam,foregroundColorParam);
			//genDataFn(data);
			
		}
	});

	
};	





