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
  </style>
  
</head>
<body>

        
<!-- 
<form>
            <textarea name="editor1" id="editor1" rows="10" cols="80">
                This is my textarea to be replaced with CKEditor.
            </textarea>
            <script>
                // Replace the <textarea id="editor1"> with a CKEditor
                // instance, using default configuration.
                CKEDITOR.replace( 'editor1' );
            </script>
        </form>
        
<liferay-ui:input-editor />
<input name="<portlet:namespace />htmlCodeFromEditorPlacedHere" id="editorTest" type="hidden" value="" />

    <form name="<portlet:namespace />addContent">
    <liferay-ui:input-editor toolbarSet="liferay-article" initMethod="initEditor" />  
  
    <input type="button" value="Save" onClick="saveData()" />
    </form>

 -->


<script type="text/javascript">


function initEditor(){
	var contentValue;
	var contentValue="";
	/* var contentLocale=document.getElementById("contentText").value;
	Above statement will set the contentValue to the value of HTML input variable named 'contentText'. Useful in scenario where data comes from database/java class from server. */
	return  contentValue;
	}
	
function saveData()
{
var x = window.<portlet:namespace />editor.getHTML();
alert(x);
//pass x as query string to submit url or set to an html input element to access it on server side.
} 
   
            
</script>


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
<div class='picturePerson' id="picturePersonGoldsArea">
	<!-- <img width='200' src='<%= renderRequest.getContextPath() + "/images/professor240.png" %>' /> -->
</div>
<div class='mainText'>
	
	
	<p>
	รายการตัวชี้วัด(KMUTT Supporting KPIs)
	</p>
	<p>
	ตามเป้าประสงค์เชิงกลยุทย์ของมหาวิทยาลัย(KMUTT Supper KPIs)
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


