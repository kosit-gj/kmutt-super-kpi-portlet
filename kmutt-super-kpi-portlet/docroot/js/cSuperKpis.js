paramYearFn=function(){

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
                	htmlParam+="<option value='"+indexEntry[0]+"'>"+indexEntry[0]+"</option>";
                });
                $("#yearParam").html(htmlParam);
                
                
                /*Logic program here.*/
			}
		});
	
	}
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
                	htmlParam+="<option value='"+indexEntry[1]+"'>"+indexEntry[2]+"</option>";
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
	
	}
getGoldFn = function(){
	var htmlCotent="";
	var htmldataContent="";
	$.ajax({
		url:"/kmutt-super-kpi-portlet/Model/kpiGolds/mGoal.jsp?paramMonth=59&paramOrg=1",
		type:"get",
		dataType:"json",
		async:false,
		data:{"paramMonth":$("#monthParam").val(),"paramOrg":$("#orgParam").val()},
		success:function(data){
			
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
					                    	<th data-field="Filed0"></th>
					                        <th data-field="Filed1"><b>ตัวที่</b></th>
					                        <th data-field="Filed2"><b>ชื่อตัวชี้วัด</b></th>
					                        <th data-field="Filed3"><b>ประเภทปี</b></th>
					                        <th data-field="Filed4"><b>ช่วงเวลา</b></th>
					                        <th data-field="Filed5"><b>เป้าหมาย</b></th>
					                        <th data-field="Filed6"><b>หน่วยวัด</b></th>
					                        <th data-field="Filed7"><b>ผลงาน</b></th>
					                        <th data-field="Filed8"><b>%ผลงานเทียบเป้าหมาย</b></th>
					                        <th data-field="Filed9"><b>น้ำหนัก</b></th>
					                        <th data-field="Filed10"><b>%เฉลี่ยถ่วงน้ำหนัก</b></th>
					                        <th data-field="Filed11"><b>ข้อมูลล่าสุด</b></th>
					                        
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
			htmldataContent+="<table id=\"grid\" style='height:500px;'>

			htmldataContent+="<thead>
				htmldataContent+="<tr>
					htmldataContent+="<th data-field=\"Filed0\"></th>
					htmldataContent+="<th data-field=\"Filed1\"><b>ตัวที่</b></th>
					htmldataContent+="<th data-field=\"Filed2\"><b>ชื่อตัวชี้วัด</b></th>
					htmldataContent+="<th data-field=\"Filed3\"><b>ประเภทปี</b></th>
					htmldataContent+="<th data-field=\"Filed4\"><b>ช่วงเวลา</b></th>
					htmldataContent+="<th data-field=\"Filed5\"><b>เป้าหมาย</b></th>
					htmldataContent+="<th data-field=\"Filed6\"><b>หน่วยวัด</b></th>
					htmldataContent+="<th data-field=\"Filed7\"><b>ผลงาน</b></th>
					htmldataContent+="<th data-field=\"Filed8\"><b>%ผลงานเทียบเป้าหมาย</b></th>
					htmldataContent+="<th data-field=\"Filed9\"><b>น้ำหนัก</b></th>
					htmldataContent+="<th data-field=\"Filed10\"><b>%เฉลี่ยถ่วงน้ำหนัก</b></th>
					htmldataContent+="<th data-field=\"Filed11\"><b>ข้อมูลล่าสุด</b></th>
                    
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
			
			
			
			$.each(data,function(index,indexEntry){
				htmlCotent+="<h3 class='titleGold'>";
				htmlCotent+="<div class='titleLeft'>";
				htmlCotent+=""+indexEntry[1]+"";
				htmlCotent+="</div>";
				htmlCotent+="<div class='titleRight'>";
				htmlCotent+="% เฉลี่ยถ่วงน้ำหนักรวม = "+indexEntry[2]+"";
				htmlCotent+="</div>";
				htmlCotent+="<div class='clearfix'></div>";
				htmlCotent+="</h3>";
				htmlCotent+="<div>";
				htmlCotent+=""+htmldataContent+"";
				htmlCotent+="</div>";
				
				//alert(indexEntry[0]+"="+indexEntry[1]+"="+indexEntry[2]);
				
	
				
			});
			
			
			//setTimeout(function(){
				
				$("#accordion").html(htmlCotent);
				$( "#accordion" ).accordion();
			
			//},1000);
			
			/*End Logic program here.*/
		}
	});
			
}
getGoldFn();

getKpiGoldsListFn=function(){
	var kpiLIstData =[];
		$.ajax({
			url:"/kmutt-super-kpi-portlet/Model/kpiGolds/kpiGoldsList.jsp",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				
				/*Logic program here.*/
                
				
                
                //kpiLIstData
      			 kpiLIstData+="[";
               
					$.each(data,function(index,indexEntry){
						
						
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
						
						kpiLIstData+="Field1:"+(index+1)+",";
						kpiLIstData+="Field2:\"<div class='textGrid'>"+indexEntry[0]+"</div>\",";
						kpiLIstData+="Field3:\"<div class='textGrid'>"+indexEntry[2]+"</div>\",";
						kpiLIstData+="Field4:\"<div class='textGrid'>"+indexEntry[3]+"</div>\",";
						kpiLIstData+="Field5:\"<div class='textGrid'>"+indexEntry[4]+"</div>\",";
						kpiLIstData+="Field6:\"<div class='textGrid'>"+indexEntry[5]+"</div>\",";
						kpiLIstData+="Field7:\"<div class='textGrid'>"+indexEntry[6]+"</div>\",";
						kpiLIstData+="Field8:\"<div class='textPercentage'>80% </div><div class='sparkLine sparkLineArea'></div> \",";
						kpiLIstData+="Field9:\"5%\",";
						kpiLIstData+="Field10:\"4.00%\",";
						kpiLIstData+="Field11:\"2015-10-28 03:00:31\"";
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

paramYearFn();
paramMonthFn();
paramOrgFn();




//Call Param by ajax end

$(document).ready(function(){
	
	
	

	//$( "#accordion" ).accordion();
	
	$("#btnSubmit").click(function(){
		//alert("hello world");
		var yearParam= $("#yearParam").val();
		var monthParam= $("#monthParam").val();
		var orgParam= $("#orgParam").val();
		
		alert(yearParam);
		alert(monthParam);
		alert(orgParam);

	});
	
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
	kpiLIstData2+="Field11:\"<div class='textGrid'>afad</div>\"";

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
	kpiLIstData2+="Field11:\"<div class='textGrid'>afad</div>\"";

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
	kpiLIstData2+="Field11:\"<div class='textGrid'>afad</div>\"";

	kpiLIstData2+="}";
			
	kpiLIstData2+="]";
	
	var objKpiListData2=eval("("+kpiLIstData2+")");
	console.log(objKpiListData2);

	var $titleJ2 =[
		
	              {
	                  field: "Field1",
					   width: 50
	              },
	              {
	                  field: "Field2",
					  width:300
					 
				 },
	              {
	                  field: "Field3",
						 width:100
					
				
				 },
	              {
	                  field: "Field4",
					 width:100
				
				 },
	              {
	                  field: "Field5",
					 width:100
						
					

				 },
	          
	              {
	                  field: "Field6",
					 width:100
					 
				 },
	              {
	                  field: "Field7",
					 width:100
					
				 },
	              {
	                  field: "Field8",
					 width:120
			
					
				 },
	              
	              {
	                  field: "Field9"
				
					 
				 },{
	                  field: "Field10"
				
					 
				 },{
	                  field: "Field11"
				
					 
				 }];
	
function detailInit(e) {
	
	
	$("<table bgcolor='#f5f5f5'><th></th></table>").kendoGrid({
		columns: $titleJ2,
		dataSource: {
		data: objKpiListData2,
		pageSize: 100,
		}
	
	}).appendTo(e.detailCell);
	
	//set data
	$(".k-grid td").css({"padding":"0em 0em"});
	//setTimeout(function(){
		$(".sparkLine").sparkline([10,12,12,9,7], {
		    type: 'bullet'});
	//},1000);

	return false;
	
} // End Function detailInit




	
	$("#grid").kendoGrid({
		   //ไม่กำหนดความสูง height จะเป็น auto
       height: 500, 
       
       dataSource: {
           data: getKpiGoldsListFn()
       },
       
      
       columns: [
   
                 { field: "Field1",  width: "50px"},
                 //{ field: "Field2", title: "ชื่อตัวชี้วัด", format: "{0:c}", width: "130px" },
                 { field: "Field2",  width: "300px" },
                 { field: "Field3",  width: "100px" },
                 { field: "Field4",  width: "100px" },
                 { field: "Field5" ,  width: "100px" },
                 { field: "Field6",  width: "100px" },
                 { field: "Field7",  width: "100px" },
                 { field: "Field8",  width: "120px" },
                 { field: "Field9",  width: "100px" },
                 { field: "Field10",  width: "100px" },
                 { field: "Field11",width: "100px" }
             ],
             
       dataBound: function() {
           this.expandRow(this.tbody.find("tr.k-master-row").first());
       },
		  
       detailInit: detailInit,
		
   });
	setTimeout(function(){
		$(".sparkLine").sparkline([10,12,12,9,7], {
		    type: 'bullet'});
	},1000);
   
	$(".k-grid td").css({"padding":"0em 0em"});




	
});