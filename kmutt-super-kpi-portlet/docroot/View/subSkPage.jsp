<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	String paramGetContextPath = request.getParameter("paramGetContextPath");

%>


<link rel="stylesheet" href="/<%=paramGetContextPath%>/css/superKpis1_2.css"> 
<div class="container-fluid" style="width:auto; height:150px; background:#e2b2ae; border-radius: 10px;">
  <div class="row">
    
  </div>
</div>

	<div id = "main">
		<div id = "topContent">
			<div class = "panel">
				<div class = "page">
					<div class = "pagehead" style="width:190px; height:10px; background:#e2b2ae;"></div>
					<div class = "pageleft">
						<a href="#" id="prev"><img src='/<%=paramGetContextPath%>/images/1461912837_icon-arrow-left-b.png' style="float:left;"></a>
					</div>
					<div class = "pageright">
			        	<a href="#" id="next"><img src='/<%=paramGetContextPath%>/images/1461912800_icon-arrow-right-b.png' style="float:right;"></a>
			        </div>
					<div class = "pagecontent">
						SKPI4 
						<span id="panel_1_title">2.90%</span>
					</div>
				</div>
				<!-- TODO: loop for data  -->		
<!-- 				<div id="panel_1_detail1" style=""> -->
<!-- 				    <span>Data 1</span>  -->
<!-- 				</div> -->
<!-- 				<div id="panel_1_detail2" style="display: none;"> -->
<!-- 				    <span>Data 2</span>  -->
<!-- 				</div> -->
<!-- 				<div id="panel_1_detail3" style="display: none;"> -->
<!-- 				    <span>Data 3</span>  -->
<!-- 				</div>	  -->	
				<div id = "Chart" class = "chart"> 
				</div>
				
				<div class = "panelTitleChart">
					<span><b>จำนวนผลการวิจัยที่ตีพิมพ์ในวารสารระดับนานาชาติ<br>ประจำปี 2559</b></span>
				</div>
				
			</div>
		</div>	
		<br style = "clear:both">
	</div>

<script>
//A $( document ).ready() block.
$( document ).ready(function() {
	var valueList = ["2.90%", "3.10%", "1.5%"];
	var panel_1_count = valueList.length;
	var panel_1_currentDetail = 0;
	//alert(panel_1_count);
	document.getElementById("panel_1_title").innerHTML = valueList[0];
	$("#next").click(function() {
		//alert(panel_1_currentDetail+" < "+panel_1_count);
		
		if(panel_1_currentDetail < panel_1_count){
			++panel_1_currentDetail;
			document.getElementById("panel_1_title").innerHTML = valueList[panel_1_currentDetail-1];
			}
		else
			{
				console.log("Array Out of Bound");
			}
		//panel1Function(panel_1_currentDetail);
		return false	
	});
	
	$("#prev").click(function() {
		//alert(panel_1_currentDetail+" > "+0);
		
		if(panel_1_currentDetail > 1){
			--panel_1_currentDetail;
			document.getElementById("panel_1_title").innerHTML = valueList[panel_1_currentDetail-1];
			}
		else
			{
				console.log("Array Out of Bound");
			}
		//panel1Function(panel_1_currentDetail);
		return false
		});
	
// 	function panel1Function(panel1_current) {
// 		document.getElementById("panel_1_detail1").style.display = "none";
// 		document.getElementById("panel_1_detail2").style.display = "none";
// 		document.getElementById("panel_1_detail3").style.display = "none";
// 		document.getElementById("panel_1_detail"+panel1_current).style.display = "";
// 	}
 });
</script>