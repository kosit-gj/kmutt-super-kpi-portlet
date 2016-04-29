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
	aa
    <script src="//code.jquery.com/jquery-1.9.1.min.js"></script> 
   
    <!-- Jquery -->
    <!-- 
     <script src="<c:url value="/js/ChartLib_KendoUI/js/jquery-1.11.2.min.js"/>"></script> 
      -->
    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
    
   <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> 
   <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  	
  
  

	
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

  </style>
  
</head>
<body>

<%

SupperKPIs abc = new SupperKPIs();
//abc.init2();
//out.print("hello"+abc.init2());
abc.initTest();
out.print("get data form database="+abc.getdata1());
abc.selectByIndex("select * from Book", "2");
out.print("selectByIndex="+abc.getData());
String myResourceURL="";
%>






<script>

$(document).ready(function(){
	//alert("hello");
	/*
	$.ajax({
		
		//url:"testModel",
		url:"<portlet:resourceURL id='SecondCall'/>",
		dataType:"get",
		data:"html",
		success:function(data){
			alert(data);
		}
	});
	*/
});

</script>
<portlet:resourceURL var="connGetList" id="connGetList"></portlet:resourceURL>

<portlet:resourceURL var='resourceUrl12'>
	<portlet:param name="param1" value="value1"/>
</portlet:resourceURL>

<a href="${resourceUrl1}">This is resourceURL</a> 
<br>
<a href="#" onclick="callServeResource()">This is resourceURL</a>
<script type='text/javascript'>
function callServeResource(){
	AUI().use('aui-io-request',function(A){
		A.io.request('<%=resourceUrl12%>',{
			method:'post',
			data:{
				<portlet:namespace />param2:'value2',
			},
			on:{
				success:function(){
					alert(this.get('responseData'));
				}
			}
		});
	
	});
}
</script>



<portlet:resourceURL var="fileDownloadURL" id="fileDownload">
    <portlet:param name="filename" value="testModel.jsp"/>
    <portlet:param name="filepath" value="/Model"/>
</portlet:resourceURL>
<!-- <a href="${fileDownloadURL}" onClick="window.location ='${fileDownloadURL}';">Reporte »</a> -->





<div class='bgKpi'>
<h3 class='titleKpi'>
<center>
<p>

รายการตัวชี้วัด(KMUTT Supporting KPIs)
</p>
<p>
ตามเป้าประสงค์เชิงกลยุทย์ของมหาวิทยาลัย(KMUTT Supper KPIs)
</p>
</center>
</h3>

<div id="accordion">
  <h3 class='titleGold'>Goal 1: New Approach to Learing</h3>
  <div>
   <div  class='subTitleGold'>
    <h4>ผลสำเร็จของการดำเนินงานในช่วงแผนกลยุทธ์ มจธ.</h4>
   </div>
    <!-- Table Start -->
     <table class="table table-bordered table-striped"> 
        
        <thead> 
        <tr> 
        	<th><b>ตัวที่</b></th> 
	        <th><b>ชื่อตัวชี้วัด</b></th> 
	        <th><b>ประเภทปี</b></th> 
	        <th><b>ช่วงเวลา</b></th> 
	        <th><b>เป้าหมาย</b></th> 
	        <th><b>หน่วยวัด</b></th> 
	        <th><b>ผลงาน</b></th> 
	        <th><b>%ผลงานเทียบเป้าหมาย</b></th> 
	        <th><b>น้ำหนัก</b></th> 
	        <th><b>%เฉลี่ยถ่วงน้ำหนัก</b></th> 
	        <th><b>ข้อมูลล่าสุด</b></th> 
        </tr> 
        </thead> 
        <tbody> 
        <tr> 
        	<td>1</td> 
        	<td>ผลการสำรวจีความคิดเห็นเกี่ยวกับประสบการณ์การเรียนรู้ในการใช้ชีวิต และ
การมีส่วนร่วมก้ับกิจกรรมของมหาวิทยาลัย(Student Engagement)</td> 
        	<td>ผลการศึกษา</td> 
        	<td>เดือน</td> 
        	<td>70</td> 
        	<td>ระดับ</td> 
        	<td>56.00%</td> 
        	<td>80% BarGraph</td> 
        	<td>5%</td> 
        	<td>4.00%</td> 
        	<td>2015-10-28 03:00:31</td> 
        	
        </tr> 
        <tr> 
        	<td>2</td> 
        	<td>ร้อยละของนักศึกษาที่มีผลลัพธ์การเรียนรู้ตามเกฎ์มาตรฐาน  KMUTT- Student QF</td> 
        	<td>ผลการศึกษา</td> 
        	<td>เดือน</td> 
        	<td>70</td> 
        	<td>ร้อยละ</td> 
        	<td>56.00%</td> 
        	<td>80% BarGraph</td> 
        	<td>5%</td> 
        	<td>4.00%</td> 
        	<td>2015-10-28 03:00:31</td> 
         <tr> 
         	 <td>3</td> 
        	<td>ความสามารถในการได้รับการจ้างงาน่ของบัณฑิต(Graduate Employability)</td> 
        	<td>ผลการศึกษา</td> 
        	<td>เดือน</td> 
        	<td>70</td> 
        	<td>ระดับ</td> 
        	<td>56.00%</td> 
        	<td>80% BarGraph</td> 
        	<td>5%</td> 
        	<td>4.00%</td> 
        	<td>2015-10-28 03:00:31</td>  
         </tr> 
         
         <tr> 
         	 <td>4</td> 
        	<td>ความสามารถในการได้รับการจ้างงาน่ของบัณฑิต(Graduate Employability)</td> 
        	<td>ผลการศึกษา</td> 
        	<td>เดือน</td> 
        	<td>70</td> 
        	<td>ระดับ</td> 
        	<td>56.00%</td> 
        	<td>80% BarGraph</td> 
        	<td>5%</td> 
        	<td>4.00%</td> 
        	<td>2015-10-28 03:00:31</td>  
         </tr> 
         
         <tr> 
         	 <td>5</td> 
        	<td>ความสามารถในการได้รับการจ้างงาน่ของบัณฑิต(Graduate Employability)</td> 
        	<td>ผลการศึกษา</td> 
        	<td>เดือน</td> 
        	<td>70</td> 
        	<td>ระดับ</td> 
        	<td>56.00%</td> 
        	<td>80% BarGraph</td> 
        	<td>5%</td> 
        	<td>4.00%</td> 
        	<td>2015-10-28 03:00:31</td>  
         </tr> 
         
         <tr> 
         	 <td>6</td> 
        	<td>ความสามารถในการได้รับการจ้างงาน่ของบัณฑิต(Graduate Employability)</td> 
        	<td>ผลการศึกษา</td> 
        	<td>เดือน</td> 
        	<td>70</td> 
        	<td>ระดับ</td> 
        	<td>56.00%</td> 
        	<td>80% BarGraph</td> 
        	<td>5%</td> 
        	<td>4.00%</td> 
        	<td>2015-10-28 03:00:31</td>  
         </tr> 
         </tbody> 
         </table>
         <!-- Table End -->
    
  </div>
  
  	<h3 class='titleGold'>Goal 2: S&T Core Capability and Clustering</h3>
 
  <div>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
  </div>
  <h3 class='titleGold'>Goal 3: Humanization</h3>
  <div>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>
  </div>
  <h3 class='titleGold'>Goal 4: Good Governance & Modern Management</h3>
  <div>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
    <p>
   1............<br>
    2............<br>
    3............<br>
    </p>
  </div>
  
  <h3 class='titleGold'>Goal 5: Networking and Resource Utilization</h3>
  <div>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
  </div>
  
  <h3 class='titleGold'>Goal 6: Internationalization</h3>
  <div>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
  </div>
  
</div>


</div>   

</body>
</html>


