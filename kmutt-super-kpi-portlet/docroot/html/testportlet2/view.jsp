<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<portlet:defineObjects />

  

<div class='container'>
	<div class='row '>
	
		<div class='col-md-12 headerGraph'>
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

	<div class='row '>
		<div id="SKdataArea"></div>
		
		
	</div>
	<div class="clearfix"></div>
</div>

<div class="clearfix"></div>
