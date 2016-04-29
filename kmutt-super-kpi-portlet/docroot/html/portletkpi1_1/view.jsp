<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://alloy.liferay.com/tld/aui" prefix="aui"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	
   
<portlet:defineObjects />


	<script src="//code.jquery.com/jquery-1.9.1.min.js"></script> 
   
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
    
   <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"> 
   <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
   

<div class='container'>
	<div class='row-fluid '>
	
		<div class='span12 headerGraph'>
			<div class='paramArea'>
				<!-- year -->
				<div class='paramYearArea' >
					<div class='paramYearText'>ปีปฏิทิน</div>
					<div class='paramYear'>
						<select id='paramYear' style='width:100px;'>
							<option>2559</option>
							<option>2558</option>
							<option>2557</option>
							<option>2556</option>
						</select>
					</div>
				</div>
				<!-- year -->
				<!-- month -->
				<div class='paramMonthArea' >
					<div class='paramMonthText'>เดือน</div>
					<div class='paramMonth'>
						<select id='monthParam' style='width:100px;'>
							
						</select>
					</div>
				</div>
				<!-- month -->
				<!-- org -->
				<div class='paramOrgArea' >
					<div class='paramOrgText'>หน่วยงาน</div>
					<div class='paramOrg'>
						<select id='orgParam' style='width:280px;'>
							
						</select>
					</div>
				</div>
				<div class='btnSubmitArea' >
					<button class='btnSubmit' id='btnSubmit'>&nbsp;&nbsp; ตกลง &nbsp;&nbsp;</button>
				</div>
				
				<!-- orgs -->
				
			</div>
		</div>
		
	</div>	

	<div class='row-fluid '>
		<div id="SKdataArea"></div>
		
		
	</div>
	<div class="clearfix"></div>
</div>

<div class="clearfix"></div>
      

