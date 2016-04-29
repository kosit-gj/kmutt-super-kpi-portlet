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
	
    <script src="//code.jquery.com/jquery-1.9.1.min.js"></script>

    <!-- Jquery -->
    <!-- 
     <script src="<c:url value="/js/ChartLib_KendoUI/js/jquery-1.11.2.min.js"/>"></script> 
      -->
    
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


<div class='paramArea'>
		<div class='paramYearArea'>
			<div class='yearLabel'>
				ปีปฎิทิน
			</div>
			<div class='yearParam' >
				<select style='width:100px;' id='yearParam'>
					<option>2559</option>
					<option>2558</option>
					<option>2557</option>
					<option>2556</option>
				</select>
			</div>
		</div>
		<div class='paramMonthArea'>
			 
			<div class='monthLabel'>
				เดือน
			</div>
			<div class='monthParam' >
			
				<select style='width:100px;' id='monthParam'>
					<option value='1'>มกราคม</option>
					<option value='2'>กุมภาพันธ์</option>
					<option value='3'>มีนาคม</option>
					<option value='4'>เมษายน</option>
				</select>
				
			</div>
			
			
		</div>
		
		<div class='paramOrgArea'>
			
			<div class='OrgLabel'>
				หน่วยงาน 
			</div>
			<div class='OrgParam' >
			
				<select style='width:150px;' id='orgParam'>
					<option value='1'>หน่วยงานที่1</option>
					<option value='2'>หน่วยงานที่2</option>
					<option value='3'>หน่วยงานที่3</option>
					<option value='4'>หน่วยงานที่4</option>
				</select>
				
			</div>
			
		</div>
		
		<div class='paramSubmitArea'>
			<button class='btnSubmit' id='btnSubmit'> &nbsp;&nbsp;ตกลง&nbsp;&nbsp;</button>
		</div>
		<div class='clearfix'></div>
</div>



<div class='bgKpi'>
<h3 class='titleKpi'>
<div class='picturePerson'>
	<img width='200' src='<%= renderRequest.getContextPath() + "/images/main.png" %>' />
</div>
<div class='mainText'>
	
	<center>
	<p>
	
	รายการตัวชี้วัด(KMUTT Supporting KPIs)
	</p>
	<p>
	ตามเป้าประสงค์เชิงกลยุทย์ของมหาวิทยาลัย(KMUTT Supper KPIs)
	</p>
	</center>

</div>

</h3>

<div id="accordion">
  
  
  <h3 class='titleGold'>
  
  
  	<!-- titleGold start -->
  	<div class='titleLeft'>
  		Goal 1: New Approach to Learing
  	</div>
  	
  	<div class='titleRight'>
  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
  	</div>
  	
  	<div class='clearfix'></div>
  	
  	<!-- titleGold end -->
  	
  	
  </h3>
 
  	
  	
  <div>
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
        
        		<!-- 
                <colgroup>
                   
                  
                    <col />
                    <col style="width:300px"/>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col style="width:140px" />
                    <col style="width:90px" />
                    <col style="width:90px" />
                    <col style="width:90px" />
                </colgroup>
                 -->
                 	
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
  </div>
  
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
    <p>
    1............<br>
    2............<br>
    3............<br>
    </p>
  </div>
  <h3 class='titleGold'>
  
  
  <!-- titleGold start -->
  	<div class='titleLeft'>
  		Goal 3: Humanization
  	</div>
  	
  	<div class='titleRight'>
  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
  	</div>
  	
  	<div class='clearfix'></div>
  	
  	<!-- titleGold end -->
  
  </h3>
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
  <h3 class='titleGold'>
  
  
   <!-- titleGold start -->
  	<div class='titleLeft'>
  		
  		Goal 4: Good Governance & Modern Management
  		
  	</div>
  	
  	
  	<div class='titleRight'>
  	
  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
  		
  	</div>
  	
  	<div class='clearfix'></div>
  	
  	<!-- titleGold end -->
  	
  
  </h3>
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
  
  <h3 class='titleGold'>
  
  <!-- titleGold start -->
  
  	<div class='titleLeft'>
  		Goal 5: Networking and Resource Utilization
  	</div>
  	
  	<div class='titleRight'>
  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
  	</div>
  	
  	<div class='clearfix'></div>
  	
  	<!-- titleGold end -->
  
  </h3>
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
  
  <h3 class='titleGold'> 
  
  
  <!-- titleGold start -->
  	<div class='titleLeft'>
  		Goal 6: Internationalization
  	</div>
  	
  	<div class='titleRight'>
  		% เฉลี่ยถ่วงน้ำหนักรวม = 48.98
  	</div>
  	
  	<div class='clearfix'></div>
  	
  	<!-- titleGold end -->
  	
  </h3>
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


