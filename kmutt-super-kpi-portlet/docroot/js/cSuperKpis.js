var $titleJ2 =[
               
	              {
	                  field: "Field1",
					   width: 45
	              },
	              {
	                  field: "Field2",
					  width:350
					 
				 },
	              {
	                  field: "Field3",
						 width:70
					
				
				 },
	              {
	                  field: "Field4",
					 width:60
				
				 },
	              {
	                  field: "Field5",
					 width:60
						
					

				 },
	          
	              {
	                  field: "Field6",
					 width:60
					 
				 },
	              {
	                  field: "Field7",
					 width:55
					
				 },
	              {
	                  field: "Field8",
					 width:90
			
					
				 },
	              
	              {
	                  field: "Field9",
	                  width:55
				
					 
				 },{
	                  field: "Field10",
	                	  width:80
					 
				 }
				 /*
				 ,{
	                  field: "Field11",
	                	  width:80
				
					 
				 }
				 */
				 ];

var kpiLIstData2="[";
kpiLIstData2+="{";
kpiLIstData2+="Field1:1.1,";
kpiLIstData2+="Field2:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field3:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field4:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field5:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field6:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field7:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field8:\"<div class='textPercentage'>80% </div><div class='sparkLine sparkLineArea'></div> \",";
kpiLIstData2+="Field9:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field10:\"<div class='textGrid'>afad</div>\",";
//kpiLIstData2+="Field11:\"<div class='textGrid'>afad</div>\"";

kpiLIstData2+="},";
kpiLIstData2+="{";
kpiLIstData2+="Field1:1.2,";
kpiLIstData2+="Field2:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field3:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field4:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field5:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field6:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field7:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field8:\"<div class='textPercentage'>80% </div><div class='sparkLine sparkLineArea'></div> \",";
kpiLIstData2+="Field9:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field10:\"<div class='textGrid'>afad</div>\",";
//kpiLIstData2+="Field11:\"<div class='textGrid'>afad</div>\"";

kpiLIstData2+="}," ;
kpiLIstData2+="{";
kpiLIstData2+="Field1:1.3,";
kpiLIstData2+="Field2:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field3:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field4:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field5:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field6:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field7:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field8:\"<div class='textPercentage'>80% </div><div class='sparkLine sparkLineArea'></div> \",";
kpiLIstData2+="Field9:\"<div class='textGrid'>afad</div>\",";
kpiLIstData2+="Field10:\"<div class='textGrid'>afad</div>\",";
//kpiLIstData2+="Field11:\"<div class='textGrid'>afad</div>\"";

kpiLIstData2+="}";
		
kpiLIstData2+="]";

var objKpiListData2=eval("("+kpiLIstData2+")");
console.log(objKpiListData2);


/*
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
			
			//alert(data);
			if(admin==1){
			$("#CommentArea").html("<textarea name=\"editor1\" id=\"editor1\" rows=\"10\" cols=\"85\">"+data+"</textarea>");
			//$(".ui-dialog-buttonpane").show();
		    editor=CKEDITOR.replace( 'editor1', {
		    	toolbar:
		    		[ ['Bold', 'Italic', 'Underline','-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink'],
		    		['Outdent', 'Indent', '-', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']]
		    });
		    
		  //dialog start
		    $( "#dialog-comment" ).dialog({
		    	
		        resizable: true,
		        height:385,
		        width:700,
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
			        height:385,
			        width:700,
			        modal: true
			       
			      });
			    //dialog end
			}
			
			
		}
	});
	
    
	//dialog add comment here end
}
	*/
var genGridData = function(paramGridID){
//alert(paramGridID);
	
	$("#grid-"+paramGridID+"").remove();
	$("#contentGrid-"+paramGridID).html(genHTMLGirdContent(paramGridID));
	 

	$("#grid-"+paramGridID+"").kendoGrid({
	   //ไม่กำหนดความสูง height จะเป็น auto
	   height: "", 
       dataSource: {
    	    
    	   /*
    	   $("#paramOrgEmbed").val();
    	   $("#paramMonthEmbed").val();
    	   $("#paramOrgEmbed").val();
    	   */
    	   
           data: getKpiGoldsListFn($("#paramMonthEmbed").val(),$("#paramOrgEmbed").val(),paramGridID)
       },

       columns: [
			    // { field: "Field0",  width: "20px"},
                 { field: "Field1",  width: "45px"},
                 //{ field: "Field2", title: "ชื่อตัวชี้วัด", format: "{0:c}", width: "130px" },
                 { field: "Field2",  width: "350px" },
                 { field: "Field3",  width: "70px" , format: "{0:c}" },
                 { field: "Field4",  width: "60px" },
                 { field: "Field5" ,  width: "60px" , format: "{0:c}" },
                 { field: "Field6",  width: "60px"  , format: "{0:c}"},
                 { field: "Field7",  width: "55px"  , format: "{0:c}"},
                 { field: "Field8",  width: "90px" , format: "{0:c}"},
                 { field: "Field9",  width: "55px" },
                 { field: "Field10",  width: "80px" },
                 /*{ field: "Field11",width: "80px" }*/
             ],
             /*
       dataBound: function() {
           this.expandRow(this.tbody.find("tr.k-master-row").first());
       },
		  */
       detailInit: detailInit,
		
   });
	$(".k-grid-content").css({"height":"auto"});
	
	setTimeout(function(){
		$(".sparkLine-"+paramGridID).sparkline('html',
				{
					type: 'bullet',
					/*targetWidth: 5,
					targetHieght: 40,*/
					rangeColors: ['#dbe1fe','#a8b6ff','#7f94ff '],
					tooltipFormat: ''
				});
	},1000);
	//hidden rows start
	var dataHasChild =$(".hasChild").get();
	$(dataHasChild).each(function(index,indexEntry){
		
		console.log($(indexEntry).text());
		if($(indexEntry).text()==0){
			$(indexEntry).parent().prev().children().hide();
		}
		
	});
	//hidden rows end
	$(".k-grid td").css({"padding":"0em 0em"});
	/*
	$(".k-icon").click(function(){
		alert("hello");
	});
	*/

	$(".k-grid-header .k-header").css({"padding":"5px 0","text-align":"center"});
	$(".btnCommintInline").click(function(){
		//alert(this.id);
		var kpiID=this.id.split("-");
		kpiID=kpiID[1];
		modalAddCOmmentFn(kpiID);
	});
};
function detailInit(e) {
	//alert(e.data.FieldKpiCode);
	 //paramMonth=59&paramOrg=1&paramKPIID=9
	var kpiLIstData2="";
	$.ajax({
		 url:'/kmutt-super-kpi-portlet/Model/kpiGolds/kpiGoldsListbyKpiGroup.jsp',
		 type:'get',
		dataType:'json',
		data:{"paramMonth":$("#paramMonthEmbed").val(),"paramOrg":$("#paramOrgEmbed").val(),"paramKPIID":e.data.FieldKpiCode},
		async:false,
		success:function(data){
			kpiLIstData2+="[";
			$.each(data,function(index,indexEntry){
				//alert(indexEntry[0]+"=="+indexEntry[1]+"=="+indexEntry[2]);
				
				var textComment;

				if(indexEntry[13]==null || indexEntry[13]==""){
					//alert("data is null");
					if($("#checkRole").val().trim()=="Admin"){
						textComment="<i class='icon-plus-sign btnCommintInline'  id='kpiIDComment-"+indexEntry[11]+"'></i>";
					}else{
						textComment="";
					}
				}else{
						textComment="<i class='icon-info-sign btnCommintInline' style='color:green;' id='kpiIDComment-"+indexEntry[11]+"'></i>";
				}
				
				
				if(index==0){
					kpiLIstData2+="{";
				}else{
					kpiLIstData2+=",{";
				}
				kpiLIstData2+="Field0:\"\",";
				kpiLIstData2+="Field1:\""+indexEntry[12]+"\",";
				kpiLIstData2+="Field2:\"<div class='textGrid'>"+indexEntry[0]+""+textComment+"</div> \",";
				kpiLIstData2+="Field3:\"<div class='textGrid'>"+indexEntry[1]+"</div>\",";
				kpiLIstData2+="Field4:\"<div class='textGrid'>"+indexEntry[2]+"</div>\",";
				kpiLIstData2+="Field5:\"<div class='textNumber textGrid'>"+checkDataNotNull(indexEntry[3])+"</div>\",";
				kpiLIstData2+="Field6:\"<div class='textGrid'>"+indexEntry[4]+"</div>\",";
				kpiLIstData2+="Field7:\"<div class='textNumber textGrid'>"+checkDataNotNull(indexEntry[5])+"</div>\",";
				kpiLIstData2+="Field8:\"<div class='textNumber textPercentage'>"+checkDataNotNullAndPercentage(indexEntry[6])+"</div><div class='sparkLine-"+e.data.FieldKpiCode+" sparkLineArea'>"+convertNullToZero(indexEntry[6])+",100,100,100</div> \",";
				kpiLIstData2+="Field9:\"<div class='textNumber textGrid'>"+checkDataNotNullAndPercentage(indexEntry[7])+"</div>\",";
				kpiLIstData2+="Field10:\"<div class='textNumber textGrid'>"+checkDataNotNullAndPercentage(indexEntry[8])+"</div>\",";
				//kpiLIstData2+="Field11:\"<div class='textGrid'>"+indexEntry[9]+"</div>\"";
				kpiLIstData2+="}";
				
			});
			kpiLIstData2+="]";
		}
	});
	
	var objKpiListData2=eval("("+kpiLIstData2+")");
	console.log(objKpiListData2);
	
	$("<table bgcolor='#f5f5f5'><th></th></table>").kendoGrid({
		columns: $titleJ2,
		dataSource: {
		data: objKpiListData2,
		pageSize: 100,
		}
	}).appendTo(e.detailCell);
	
	//set data
	$(".k-grid td").css({"padding":"0em 0em"});
	setTimeout(function(){
		$(".sparkLine-"+e.data.FieldKpiCode).sparkline('html',
				{
			type: 'bullet',
			/*targetWidth: 5,*/
			rangeColors: ['#dbe1fe','#a8b6ff','#7f94ff ']
		});
	},1000);
		
		
		
	//Add commit KPI here start
		$(".btnCommintInline").click(function(){
			//alert(this.id);
			var kpiID=this.id.split("-");
			kpiID=kpiID[1];
			//alert(kpiID);
			modalAddCOmmentFn(kpiID);
		});
	//Add commit KPI here end

	return false;
	
} // End Function detailInit

/*
paramYearFn=function(){

	var htmlParam="";
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/paramYear.jsp",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				
				
                
				console.log(data);
                $.each(data,function(index,indexEntry){
                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[0]+"</option>";
                });
                $("#paramYear").html(htmlParam);
                $("#paramYear").kendoDropDownList();
                
               
			}
		});
	
	}*/
	/*
paramMonthFn=function(){
	var htmlParam="";
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/kpiGolds/paramMonth.jsp",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				
                
				console.log(data);
                $.each(data,function(index,indexEntry){
                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[2]+"</option>";
                });
                $("#monthParam").html(htmlParam);
                $("#monthParam").kendoDropDownList();
                
                
                
			}
		});
	
	}
	*/
/*
paramOrgFn=function(){
	var htmlParam="";
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/kpiGolds/paramOrg.jsp",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				
                
                $.each(data,function(index,indexEntry){
                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[1]+"</option>";
                });
                $("#paramOrg").html(htmlParam);
                $("#paramOrg").kendoDropDownList();
                
                =
			}
		});
	
	}
	*/
var genHTMLGirdContent = function(gridName){
	//style='height:500px;
	htmldataContent="";
	htmldataContent+="<table id=\"grid-"+gridName+"\"  class=\"gridTable\">";

	htmldataContent+="<thead>";
		htmldataContent+="<tr>";
			htmldataContent+="<th data-field=\"Field0\"></th>";
			htmldataContent+="<th data-field=\"Field1\"><b>รหัส</b></th>";
			htmldataContent+="<th data-field=\"Field2\"><b>ชื่อตัวชี้วัด</b></th>";
			htmldataContent+="<th data-field=\"Field3\"><b>ประเภทปี</b></th>";
			htmldataContent+="<th data-field=\"Field4\"><b>ช่วงเวลา</b></th>";
			htmldataContent+="<th data-field=\"Field5\"><b>เป้าหมาย</b></th>";
			htmldataContent+="<th data-field=\"Field6\"><b>หน่วยวัด</b></th>";
			htmldataContent+="<th data-field=\"Field7\"><b>ผลงาน</b></th>";
			htmldataContent+="<th data-field=\"Field8\"><b><center>%ผลงาน</center></b></th>";
			htmldataContent+="<th data-field=\"Field9\"><b>น้ำหนัก</b></th>";
			htmldataContent+="<th data-field=\"Field10\"><b><center>%เฉลี่ยน้ำหนัก</center></b></th>";
			/*htmldataContent+="<th data-field=\"Field11\"><b>ข้อมูลล่าสุด</b></th>";*/
            
		htmldataContent+="</tr>";
	htmldataContent+="</thead>";
	htmldataContent+="<tbody id=\"kpiLIstData1\">";
	htmldataContent+="<tr>";
		htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+="<td></td>";
			htmldataContent+=" <td></td>";
		htmldataContent+="</tr>";
		htmldataContent+="</tbody>";
	htmldataContent+="</table>";
htmldataContent+="<div class='clearfix'></div>";
return htmldataContent;
}
getGoldFn = function(paramOrg,paramMonth){
	//alert("hello");
	var htmlCotent="";
	var htmldataContent="";
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mGoal.jsp",
		type:"get",
		dataType:"json",
		async:false,
		data:{"paramMonth":paramMonth,"paramOrg":paramOrg},
		success:function(data){
			
			if(data==''){
				alert("ไม่มีข้อมูล");
				return false;
			}
			/*Start Logic program here.*/
			
			/*
		  	<h3 class='titleGold'>
		  	<!-- titleGold start -->
		  	<div class='titleLeft'>
		  		Goal 2: S&T Core Capability and Clustering
		  	</div>
		  	
		  	<div class='titleRight'>
		  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
		  	</div>
		  	
		  	<div class='clearfix'></div>
		  	
		  	<!-- titleGold end -->
		  	
		  	</h3>
		 
		  <div>
		   			
		   			<!-- data content start -->
		   			
					   <div  class='subTitleGold'>
					   
						<div class='subTitleLeft'>
							 <h4>ผลสำเร็จของการดำเนินงานในช่วงแผนกลยุทธ์ มจธ.</h4>
					  	</div>
					  	<div class='subTitleRight'>
					  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
					  	</div>
					  	<div class='clearfix'></div>
					   </div>
					
					
					         <!-- Table Grid Start -->
					     
					        
					         <table id="grid" style='height:500px;'>
					        
					        		
					                 	
					                <thead>
					                    <tr>
					                    	<th data-field="Field0"></th>
					                        <th data-field="Field1"><b>ตัวที่</b></th>
					                        <th data-field="Field2"><b>ชื่อตัวชี้วัด</b></th>
					                        <th data-field="Field3"><b>ประเภทปี</b></th>
					                        <th data-field="Field4"><b>ช่วงเวลา</b></th>
					                        <th data-field="Field5"><b>เป้าหมาย</b></th>
					                        <th data-field="Field6"><b>หน่วยวัด</b></th>
					                        <th data-field="Field7"><b>ผลงาน</b></th>
					                        <th data-field="Field8"><b>%ผลงานเทียบเป้าหมาย</b></th>
					                        <th data-field="Field9"><b>น้ำหนัก</b></th>
					                        <th data-field="Field10"><b>%เฉลี่ยถ่วงน้ำหนัก</b></th>
					                        <th data-field="Field11"><b>ข้อมูลล่าสุด</b></th>
					                        
					                    </tr>
					                </thead>
					                <tbody id="kpiLIstData1">
					                    <tr>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                        <td></td>
					                    </tr>
					                     
					                   
					                </tbody>
					            </table>
					         <!-- Table Grid End -->
					         
					    	<div class='clearfix'></div>
					    	
					    	
					    	<!-- data content end -->
		  </div>
		  */
			
			
			
			
			$.each(data,function(index,indexEntry){
				htmlCotent+="<h3 class='titleGold getGroupID' id='groupID-"+indexEntry[0]+"'>";
				htmlCotent+="<div class='titleLeft'>";
				htmlCotent+=""+indexEntry[1]+"";
				htmlCotent+="</div>";
				htmlCotent+="<div class='titleRight'>";
				htmlCotent+="% เฉลี่ยถ่วงน้ำหนักรวม = "+parseFloat(indexEntry[2]).toFixed(2)+"";
				htmlCotent+="</div>";
				htmlCotent+="<div class='clearfix'></div>";
				htmlCotent+="</h3>";
				htmlCotent+="<div id='contentGrid-"+indexEntry[0]+"' >";
				///*+genHTMLGirdContent(indexEntry[0])+*/
				//htmlCotent+="<p>"+genHTMLGirdContent(indexEntry[0])+"</p>";
				htmlCotent+="<div class=\"clearfix\"></div>";
				htmlCotent+="</div>";
				
				

			});
			
			
			  //setTimeout(function(){
				$("#accordion").remove();
				$("#accordionArea").append("<div id=\"accordion\"></div>");	
		
				$("#accordion").html(htmlCotent);
				setTimeout(function(){
					$("#accordion").accordion({
						
						 collapsible:false,
						 heightStyle: "content",
						 beforeActivate: function(event, ui) {
				             // The accordion believes a panel is being opened
				            if (ui.newHeader[0]) {
				                var currHeader  = ui.newHeader;
				                var currContent = currHeader.next('.ui-accordion-content');
				             // The accordion believes a panel is being closed
				            } else {
				                var currHeader  = ui.oldHeader;
				                var currContent = currHeader.next('.ui-accordion-content');
				            }
				             // Since we've changed the default behavior, this detects the actual status
				            var isPanelSelected = currHeader.attr('aria-selected') == 'true';
				            
				             // Toggle the panel's header
				            currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
				            
				            // Toggle the panel's icon
				            currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
				            
				             // Toggle the panel's content
				            currContent.toggleClass('accordion-content-active',!isPanelSelected)    
				            if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

				            return false; // Cancels the default action
				        }
					});
					$(".bgKpi").show();
					
					$(".getGroupID").click(function(){
						//alert("hello jquery test system");
						
						var id=this.id.split("-");
						id=id[1];
						//alert(id);
						
						genGridData(id);
					});
					
					$("#accordion h3:eq(0)").click();
					
				},1000);
				//$("#accordion" ).accordion();
				
			
			//},1000);
			
			/*End Logic program here.*/
		}
	});
			
}

var getOrgFn = function(paramMonth,paramOrg){
	//?paramMonth=59&paramOrg=1
	$(".subTitleGold").hide();
	var htmlOrg="";
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mOrg.jsp",
		type:"get",
		dataType:"json",
		async:false,
		data:{"paramMonth":paramMonth,"paramOrg":paramOrg},
		success:function(data){
			//alert(data[0][1]);
			
			htmlOrg+="<div class='subTitleLeft'>";
			//htmlOrg+=" <h4>ผลสำเร็จของการดำเนินงานในช่วงแผนกลยุทธ์ "+data[0][1]+"</h4>";
			htmlOrg+=" <h4>"+data[0][1]+"</h4>";
			htmlOrg+="</div>";
			htmlOrg+="<div class='subTitleRight'>";
			htmlOrg+="<h4>% เฉลี่ยถ่วงน้ำหนักรวม = "+parseFloat(data[0][2]).toFixed(2)+"</h4>";
			htmlOrg+="</div>";
			htmlOrg+="<br style='clear:both'>";
			
			$(".subTitleGold").html(htmlOrg);
			$(".subTitleGold").show();
	  	
		}
	});
};


getKpiGoldsListFn=function(paramMonth,paramOrg,paramKPIGroupID){
	

	
	var kpiLIstData =[];
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/kpiGolds/kpiGoldsList.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramMonth":paramMonth,"paramOrg":paramOrg,"paramKPIGroupID":paramKPIGroupID},
			success:function(data){
				
				/*Logic program here.*/
                
				
                
                //kpiLIstData
      			 kpiLIstData+="[";
               
					$.each(data,function(index,indexEntry){
						
						//alert(indexEntry[13]);
						var textComment;
						if(indexEntry[13]==null || indexEntry[13]==""){
							//alert("data is null");
							if($("#checkRole").val().trim()=="Admin"){
								textComment="<i class='icon-plus-sign btnCommintInline'  id='kpiIDComment-"+indexEntry[11]+"'></i>";
							}else{
								textComment="";
							}
						}else{
								textComment="<i class='icon-info-sign btnCommintInline' style='color:green;' id='kpiIDComment-"+indexEntry[11]+"'></i>";
						}
							/*
							kpiLIstData+="<tr>"; 
   							kpiLIstData+="<td>"+(index+1)+"</td> ";
   							kpiLIstData+="<td>"+indexEntry[0]+"</td> ";
   							kpiLIstData+="<td>"+indexEntry[2]+"</td> ";
   							kpiLIstData+="<td>"+indexEntry[3]+"</td> ";
   							kpiLIstData+="<td>"+indexEntry[4]+"</td> ";
   							kpiLIstData+="<td>"+indexEntry[5]+"</td> ";
   							kpiLIstData+="<td>"+indexEntry[6]+"%</td> ";
   							kpiLIstData+="<td><div class='textPercentage'>80% </div><div class='sparkLine sparkLineArea'></div> </td>"; 
   							kpiLIstData+="<td>5%</td> ";
   							kpiLIstData+="<td>4.00%</td>"; 
   							kpiLIstData+="<td>2015-10-28 03:00:31</td> ";
							kpiLIstData+="</tr> ";
							*/
				
						if(index==0){
							kpiLIstData+="{";
						}else{
							kpiLIstData+=",{";
						}
						/*
						 *  
						 * 0 kpi_name  
						 * 1 calendar_type_name
						 * 2 period_name
						 * 3 target_value
						 * 4 kpi_uom_name
						 * 5 actual_value
						 * 6 percent_actual_vs_target
						 * 7 kpi_weight
						 * 8 percent_wavg
						 * 9 updated_dttm
						 * 10 has_child
						 * 
						 *  
							htmldataContent+="<th data-field=\"Field2\"><b>ชื่อตัวชี้วัด</b></th>";
							htmldataContent+="<th data-field=\"Field3\"><b>ประเภทปี</b></th>";
							htmldataContent+="<th data-field=\"Field4\"><b>ช่วงเวลา</b></th>";
							htmldataContent+="<th data-field=\"Field5\"><b>เป้าหมาย</b></th>";
							htmldataContent+="<th data-field=\"Field6\"><b>หน่วยวัด</b></th>";
							htmldataContent+="<th data-field=\"Field7\"><b>ผลงาน</b></th>";
							htmldataContent+="<th data-field=\"Field8\"><b>%ผลงานเทียบเป้าหมาย</b></th>";
							htmldataContent+="<th data-field=\"Field9\"><b>น้ำหนัก</b></th>";
							htmldataContent+="<th data-field=\"Field10\"><b>%เฉลี่ยถ่วงน้ำหนัก</b></th>";
							htmldataContent+="<th data-field=\"Field11\"><b>ข้อมูลล่าสุด</b></th>";
			
						 */
						
						
						
						
						kpiLIstData+="Field1:\""+indexEntry[12]+"<span class='hasChild'>"+indexEntry[10]+"</span>\",";
						kpiLIstData+="Field2:\"<div class='textGrid'>"+indexEntry[0]+""+textComment+"</div>\",";
						kpiLIstData+="Field3:\"<div class='textGrid'>"+indexEntry[1]+"</div>\",";
						kpiLIstData+="Field4:\"<div class='textGrid'>"+indexEntry[2]+"</div>\",";
						kpiLIstData+="Field5:\"<div class='textNumber textGrid'>"+checkDataNotNull(indexEntry[3])+"</div>\",";
						kpiLIstData+="Field6:\"<div class='textGrid'>"+indexEntry[4]+"</div>\",";
						kpiLIstData+="Field7:\"<div class='textNumber textGrid'>"+checkDataNotNull(indexEntry[5])+"</div>\",";
						kpiLIstData+="Field8:\"<div class='textNumber textPercentage'>"+checkDataNotNullAndPercentage(indexEntry[6])+" </div><div  class='sparkLine-"+paramKPIGroupID+" sparkLineArea'>"+convertNullToZero(indexEntry[6])+",100,100,100</div> \",";
						kpiLIstData+="Field9:\"<div class='textNumber textGrid'>"+checkDataNotNullAndPercentage(indexEntry[7])+"</div>\",";
						kpiLIstData+="Field10:\"<div class='textNumber textGrid'>"+checkDataNotNullAndPercentage(indexEntry[8])+"</div>\",";
						/*kpiLIstData+="Field11:\""+indexEntry[9]+"\",";*/
						kpiLIstData+="FieldKpiCode:\""+indexEntry[11]+"\"";
						kpiLIstData+="}";
					});
					kpiLIstData+="]";
					
					
					//$("#kpiLIstData1").html(kpiLIstData);
					/*
					setTimeout(function(){
						$(".sparkLine").sparkline([10,12,12,9,7], {
						    type: 'bullet'});
					},1000);
					*/
					
				  	
                
                /*Logic program here.*/

			}
		});
		return eval("("+kpiLIstData+")");;
	
	}
//Call Param by ajax Start...

/*
paramYearFn();
paramMonthFn();
paramOrgFn();
*/
//initial data start
var d = new Date();
var monthCurrent = d.getMonth(); 
var monthTHCurrent=parseInt(monthCurrent)+1;

//alert(monthTHCurrent);
var yearCurrent = d.getFullYear(); 
var yearTHCurrent= parseInt(yearCurrent)+543;



//initial data end




//Call Param by ajax end

$(document).ready(function(){
	
	
	paramYearFn(yearTHCurrent,monthFiscalFn(monthTHCurrent));
	paramOrgFn();
	//$( "#accordion" ).accordion();
	
	$("#btnSubmit").click(function(){
		//alert("hello world");
		$(".bgKpi").hide();
		var paramYear= $("#paramYear").val();
		var paramMonth= $("#monthParam").val();
		var paramOrg= $("#orgParam").val();
		
		
		$(".paramEmbed").remove();
		$("body").append("<input type=\"hidden\" id=\"paramYearEmbed\" class=\"paramEmbed\" name=\"paramYearEmbed\" value=\""+paramYear+"\">");
		$("body").append("<input type=\"hidden\" id=\"paramMonthEmbed\" class=\"paramEmbed\" name=\"paramMonthEmbed\" value=\""+paramMonth+"\">");
		$("body").append("<input type=\"hidden\" id=\"paramOrgEmbed\" class=\"paramEmbed\" name=\"paramOrgEmbed\" value=\""+paramOrg+"\">");
		

		//$("#paramMonthEmbed").val()
		
		getGoldFn($("#paramOrgEmbed").val(),$("#paramMonthEmbed").val());
		getOrgFn($("#paramMonthEmbed").val(),$("#paramOrgEmbed").val());
		
		getImageByOrg($("#paramOrgEmbed").val());
		
		//getOrgFn();
		
		
		
		return false;
		
	});
	
	setTimeout(function(){
		
		$("#btnSubmit").click();
		
	},1000);
	 
	



	
});