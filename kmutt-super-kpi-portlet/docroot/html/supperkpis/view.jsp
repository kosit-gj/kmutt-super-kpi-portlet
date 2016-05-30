<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %> 
<%@ taglib uri="http://alloy.liferay.com/tld/aui" prefix="aui"%>
<%@ page import="javax.portlet.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>    

<portlet:defineObjects />
<%
boolean role= request.isUserInRole("Administrator");
if(role){
	out.print("<input type='hidden' name='checkRole' id='checkRole' value='Admin'>");
}else{
	out.print("<input type='hidden' name='checkRole' id='checkRole' value='user'>");
}

%>
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
	<!--  
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	-->
	<!-- Latest compiled and minified JavaScript -->
	<!-- 
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
    
   <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> 
   <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> 
  	
  
  

	
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
  .aui ul, .aui ol {
    margin: 0;
    padding: 0;
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

.aui #breadcrumbs {
    margin-bottom: 0;
}
.ui-dialog .ui-dialog-content{
padding: 0.5px 1px;
}

.aui p {
    margin: 2px;
}


h3>.ui-icon{
	float: left;
    margin-top: 5px;
}

/*
h3>.ui-icon{
	float: left;
    margin-top: 5px;
}
*/




/* Large desktop #####################################*/
    @media (min-width: 1200px) { 
    
    	.aui .row-fluid .span4 {
		    width: 33.33%;
		}
		/*
		.aui body{
		background:red;
		}
		*/
		
     }
     
     /*  desktop #########################################*/
    @media (min-width: 980px) and (max-width: 1199px) {
    
    	
		
		/*
		
		.aui body{
		background:#cccccc;
		}
		
		*/
		
     }
     
    /* Portrait tablet to landscape and desktop ########################################3*/
    @media (min-width: 768px) and (max-width: 979px) {
    	.aui .portlet-body{
			
		}
		
		/*parameter start*/
		.aui .paramArea .paramYearArea .yearLabel{
		width: 29px;
		}
		.aui .paramArea .paramYearArea{
		width: 134px;
		}
		.aui .paramArea .paramOrgArea{
		width: 306px;
		}
			
		/*parameter end*/
		
		
		/*title content start*/
		.aui .subTitleGold .subTitleLeft{
		width: 85%;
		}
		.mainText {
		    font-size: 18px;
		    line-height: 18px;
		    margin-left: 0;
		    padding-top: 41px;
		    text-align: center;
		}
		.aui h4 {
		    font-size: 16px;
		}

		/*title content end*/
		/*
		.aui body{
		background:yellow;
		}
		*/
     }
     
    /* Landscape phone to portrait tablet ############################################*/
    @media (max-width: 767px) { 
   	 	.aui .portlet-body{
			
		}
		
		/*parameter start*/
		
		
		.aui .paramOrgArea .paramOrg{
		width: 200px;
		}
		.aui .paramArea .paramOrgArea{
		width: 100%;
		}
		.aui .paramArea .paramOrgArea .OrgLabel{
		width: 60px;
		}
		.aui .paramArea .paramMonthArea{
		clear:both;
		}
		.aui .paramArea .paramMonthArea .monthLabel{
		width: 60px;
		}
		.aui .paramArea .paramYearArea .yearLabel{
		width: 60px;
		}
		.aui .paramArea .paramSubmitArea{
		margin-left: 72px;
		clear: both;
		}
		
		.aui h4{
		font-size: 14.5px;
		}
		
		
		
		/*parameter end*/
		
		
		/*title content start*/
		.mainText{
		font-size: 16px;
	    line-height: 19px;
	    margin-left: 18px;
	    padding-top: 25px;
	    text-align: center;
		}
		
		.aui .subTitleGold .subTitleLeft{
		width: 85%;
		}
		/*title content end*/
		
		
		/*
		.aui body{
		background:red;
		}
		*/
     }
     
    /* Landscape phones and down ###############################################*/
    @media (max-width: 480px) { 
    	.aui .portlet-body{
			
		}
		
		
		/*parameter start*/
		
		
		.aui .paramOrgArea .paramOrg{
		width: 200px;
		}
		.aui .paramArea .paramOrgArea{
		width: 100%;
		}
		.aui .paramArea .paramOrgArea .OrgLabel{
		width: 60px;
		}
		.aui .paramArea .paramMonthArea .monthLabel{
		width: 60px;
		}
		.aui .paramArea .paramYearArea .yearLabel{
		width: 60px;
		}
		.aui .paramArea .paramSubmitArea{
		margin-left: 72px;
		clear: both;
		}
		
		.aui h4{
		font-size: 14.5px;
		}
		
		
		
		/*parameter end*/
		
		/*title content start*/
		.subTitleGold {
		    background: #eaeaea none repeat scroll 0 0;
		    color: #af7817;
		    display: none;
		    height: 50px;
		    padding: 5px;
		    position: relative;
		}
		.aui .subTitleGold .subTitleLeft{
			width: 95%;
			position: static;
		}
		.aui .subTitleGold .subTitleRight{
			float: left;
		    left: 0;
		    padding: 5px;
		    position: relative;
		    text-align: left;
		    top: -13px;
		    width: 95%;
		}
		.aui .subTitleGold{
			height: 50px;
		}
		.aui h3.titleKpi{
			height: 400px;
		}
		
		.mainText{
		
		background: #dddddd none repeat scroll 0 0;
	    font-size: 14px;
	    line-height: 18px;
	    margin-left: 0;
	    margin-top: 178px;
	    padding: 5px;
	    text-align: center;
		
		}
		.aui h3.titleKpi{
		height: 285px;
		}
		
		
		.aui .titleGold .titleLeft{
		
		float: left;
	    margin-left: 0px;
		padding:0px;
	    position: static;
	    width: 100%;
	    font-size: 13px;
	    
		}
		
		.aui .titleGold .titleRight{
		float: left;
	    font-size: 13px;
		padding:0px;
	    text-align: left;
	    top: 5px;
	    width: 100%;
		}
		/*title content end*/
		/*image start*/
		
		
		
		.picturePerson{
		float: right;
	    position: relative;
	    right: 73px;
	    top: 5px;
	    width: 173px;
		}
		/*image end*/
		
		
		
		/*
		.aui body{
		background:yellow;
		}
		*/
     }
     
    
    
  </style>
  
</head>
<body>

        
 <!-- LOOP LOADER -->
<div class="loading">
	<div class="content">
    <div class="ball"></div>
    <div class="ball1"></div>
    </div>
</div>
<!-- LOOP LOADER -->





<div id="dialog-comment" title="Commment" >
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
			<div class='monthParam'  id='monthParamArea'>
			
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
			
				<select  id='orgParam' >
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
<div class='picturePerson' id="picturePersonGoldsArea">
	<!-- <img width='200' src='<%= renderRequest.getContextPath() + "/images/professor240.png" %>' /> -->
</div>
<div class='mainText'>
	
	
	<p>
	รายการตัวชี้วัด (KMUTT Supporting KPIs)
	</p>
	<p>
	ตามเป้าประสงค์เชิงกลยุทย์ของมหาวิทยาลัย (KMUTT Super KPIs)
	</p>
	<p>
	และ ผลสำเร็จของการดำเนินงานในช่วงแผนกลยุทธ์ มหาวิทยาลัย
	</p>
	

</div>

</h3>


 <div  class='subTitleGold'>
   
   <!-- 
	<div class='subTitleLeft'>
		 <h4>ผลสำเร็จของการดำเนินงานในช่วงแผนกลยุทธ์ มจธ.</h4>
  	</div>
  	<div class='subTitleRight'>
  		<h4>% เฉลี่ยถ่วงน้ำหนักรวม = 48.98</h4>
  	</div>
  	<div class='clearfix'></div>
  	    -->
</div>

   
<span id='accordionArea'></span>

  
  
 


</div>   




 
 

</body>
</html>


