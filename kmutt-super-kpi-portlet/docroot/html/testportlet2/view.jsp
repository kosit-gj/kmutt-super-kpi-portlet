<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %> 
<%@ page import="javax.portlet.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>    

<portlet:defineObjects />
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
	<!-- 
    <script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
 	-->
    <!-- Jquery -->
    <!-- 
     <script src="<c:url value="/js/ChartLib_KendoUI/js/jquery-1.11.2.min.js"/>"></script> 
      -->
    
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<!-- 
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
     -->
    
   <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> 
   <!-- 
   <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
   -->
  
  

	
  <style>
  h3{
  line-height: 10px;
  }
  .ui-accordion .ui-accordion-content{
  padding:0px;
  }
  .aui h1, .aui h2, .aui h3, .aui h4, .aui h5, .aui h6{
  margin:0px;
  }
  .aui #breadcrumbs {
    margin-bottom: 0;
}
  
  .aui .portlet-content, .aui .portlet-minimized .portlet-content-container {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #eaeaea;
    border-image: none;
    border-style: solid;
    border-width: 0 1px 1px;
    padding: 1px 1px 1px;
}
.ui-dialog .ui-dialog-content{
padding: 0.5px 1px;
}
.aui p {
    margin: 2px;
}
  </style>
  
</head>
<body>

<div id="dialog-comment" style="height:273px;" title="Commment" >
  <span id="CommentArea">
   			
  </span>
  		
</div>

<div class='paramArea'>
		<div class='paramYearArea'>
			<div class='yearLabel'>
				ปี
			</div>
			<div class='yearParam' >
				<select style='width:100px;' id='paramYear'>
				<!-- 
					<option>2559</option>
					<option>2558</option>
					<option>2557</option>
					<option>2556</option>
				 -->
				</select>
			</div>
		</div>
		<div class='paramMonthArea'>
			 
			<div class='monthLabel'>
				เดือน
			</div>
			<div class='monthParam' id='monthParamArea'>
			
				<select style='width:100px;' id='paramMonth'>
					<!-- 
					<option value='1'>มกราคม</option>
					<option value='2'>กุมภาพันธ์</option>
					<option value='3'>มีนาคม</option>
					<option value='4'>เมษายน</option>
					 -->
				</select>
				
			</div>
			
			
		</div>
		
		<div class='paramOrgArea'>
			
			<div class='OrgLabel'>
				หน่วยงาน 
			</div>
			<div class='OrgParam' >
			
				<select style='width:342px;' id='orgParam'>
				<!-- 
					<option value='1'>หน่วยงานที่1</option>
					<option value='2'>หน่วยงานที่2</option>
					<option value='3'>หน่วยงานที่3</option>
					<option value='4'>หน่วยงานที่4</option>
				-->
				</select>
				
			</div>
			
		</div>
		
		<div class='paramSubmitArea'>
			<button class='btnSubmit' id='btnSubmit'> &nbsp;&nbsp;Submit&nbsp;&nbsp;</button>
		</div>
		<div class='clearfix'></div>
</div>



<div class='bgKpi' >
	<h3 class='titleKpi'>
		<div class='picturePerson' id="picturePersonPerArea">
			<!-- 
			<img width='200' src='<%= renderRequest.getContextPath() + "/images/main.png" %>' />
			 -->
		</div>
		<div class='mainText'>
			
			<center>
			<p>
			รายการตัวชี้วัด(KMUTT Supporting KPIs) 
			</p>
			<p>
			ตามมิติของ Balanced Scorecard: BSC
			</p>
			</center>
		
		</div>
	
	</h3>
	
	
	 <div  class='subTitleGold'>
	   
	  
	</div>
	
	   
	<span id='accordionArea'></span>

</div>   
</body>
</html>


