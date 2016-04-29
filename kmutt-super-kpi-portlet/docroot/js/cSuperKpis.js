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
						kpiLIstData+="Field2:\""+indexEntry[0]+"\",";
						kpiLIstData+="Field3:\""+indexEntry[2]+"\",";
						kpiLIstData+="Field4:\""+indexEntry[3]+"\",";
						kpiLIstData+="Field5:\""+indexEntry[4]+"\",";
						kpiLIstData+="Field6:\""+indexEntry[5]+"\",";
						kpiLIstData+="Field7:\""+indexEntry[6]+"\",";
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

paramMonthFn();
paramOrgFn();
console.log("11111111111111111111111111");
console.log(getKpiGoldsListFn());


//Call Param by ajax end

$(document).ready(function(){
	
	
	

	$( "#accordion" ).accordion();
	
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
	kpiLIstData2+="Field1:1,";
	kpiLIstData2+="Field2:\"afad\",";
	kpiLIstData2+="Field3:\"afad\",";
	kpiLIstData2+="Field4:\"afad\",";
	kpiLIstData2+="Field5:\"afad\",";
	kpiLIstData2+="Field6:\"afad\",";
	kpiLIstData2+="Field7:\"afad\",";
	kpiLIstData2+="Field8:\"<div class='textPercentage'>80% </div><div class='sparkLine sparkLineArea'></div> \"";

	kpiLIstData2+="}";
	kpiLIstData2+="]";
	
	var objKpiListData2=eval("("+kpiLIstData2+")");
	console.log(objKpiListData2);

	var $titleJ2 =[
		
	              {
	                  field: "Field1",
					   width: 277
	              },
	              {
	                  field: "Field2",
					  width:65
					 
				 },
	              {
	                  field: "Field3",
						 width:80
					
				
				 },
	              {
	                  field: "Field4",
					 width:55
				
				 },
	              {
	                  field: "Field5",
					 width:80
						
					

				 },
	          
	              {
	                  field: "Field6",
					 width:85
					 
				 },
	              {
	                  field: "Field7",
					 width:100
					
				 },
	              {
	                  field: "Field7",
					 width:80
			
					
				 },
	              
	              {
	                  field: "Field8"
				
					 
				 }];
	
function detailInit(e) {
	
	
	$("<table bgcolor='#f5f5f5'><th></th></table>").kendoGrid({
		columns: $titleJ2,
		dataSource: {
		data: objKpiListData2,
		pageSize: 100,
		}
	
	}).appendTo(e.detailCell);

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
                 { field: "Field3"},
                 { field: "Field4"},
                 { field: "Field5" },
                 { field: "Field6"},
                 { field: "Field7"},
                 { field: "Field8"},
                 { field: "Field9"},
                 { field: "Field10"},
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
   




	
});