<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	String paramGetContextPath = request.getParameter("paramGetContextPath");
	String txtHtml = request.getParameter("txtHtml");
	String sk_id = request.getParameter("sk_id");
	String bg_color = request.getParameter("bg_color");
	


%>



<!-- 
<link type="text/css" rel="stylesheet" href="/<%=paramGetContextPath%>/css/subSupperKpi1_1_1.css">
 
<script type="text/javascript" src="/<%=paramGetContextPath%>/js/fusioncharts-jquery-plugin.js"></script>
<script type="text/javascript" src="/<%=paramGetContextPath%>/js/genPanelSE.js"></script>
-->
<!-- 
<script type="text/javascript" src="../js/fusioncharts-suite-xt/js/fusioncharts.js"></script>
<script type="text/javascript" src="../js/fusioncharts-suite-xt/js/fusioncharts.charts.js"></script>
<script type="text/javascript" src="../js/jquery-1.11.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="../js/bootstrap/css/bootstrap.css">
<script type="text/javascript" src="../js/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/fusioncharts-jquery-plugin.js"></script>
<script type="text/javascript" src="../js/main.js"></script>
<script type="text/javascript" src="../Controller/genPanelSE.js"></script>
 -->
 
<div id='genCylinder'></div>
<div id='genChart'></div>


<style>
#spanHead{
	/*width:1012px;*/
}
</style>
<!-- header -->
<!-- <div class="container-fluid"> -->
	<div class="row-fluid">
		<div class="span10 " id='spanHead'>
			<div id="colHead" style='background:<%=bg_color%>'>
			<h4>
			<div class='prevvGolds' id='prevvGolds-1'>
			
			<i class="icon-chevron-left icon-prev" ></i>
			
			</div>
			<div class='goldTitleContent'><%=txtHtml%></div>
			<div class='nextGolds' id='nextGolds-1'>
			
			<i class="icon-chevron-right icon-next"></i>
			
			</div>
		 	<br style='clear:both'>
			</h4>
				<!-- 
				<h4>Goal 2 S&T Core Capability and Clustering <br/> 
				- - - - - - - - - - - - - - - - - - - - - - - -<br/> 
				SK 2-High Impact Research  20 % </h4>
				 -->
			</div>
		</div>
		<div class="span2"  id='spanDonut'> 
			<div id="donutChart-<%=sk_id%>-Sub" class='donutSub'></div>
		</div>
	</div>
	<!-- content -->	
	<div id=Content class="row-fluid">
	
		
		
	</div>
<!-- </div> -->

