<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://alloy.liferay.com/tld/aui" prefix="aui"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	
   
<portlet:defineObjects />
<style>
.aui .portlet-content, .aui .portlet-minimized .portlet-content-container{
	padding: 0px 0px 0px;	
}
.aui #breadcrumbs {
    margin-bottom: 0;
}
.aui .row-fluid .span4{
width: 33.33%;
}
</style>




<!-- 
<div class='container'>
 -->
	<div class='row-fluid '>
	
		<div class='span12 headerGraph'>
			<div class='paramArea'>
				<!-- year -->
				<div class='paramYearArea' >
					<div class='paramYearText'>ปี</div>
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
					<div class='paramMonth' id="monthParamArea">
						<select id='monthParam' style='width:100px;'>
							
						</select>
					</div>
				</div>
				<!-- month -->
				<!-- org -->
				<div class='paramOrgArea' >
					<div class='paramOrgText'>หน่วยงาน</div>
					<div class='paramOrg'>
						<select id='orgParam' style='width:342px;'>
							
						</select>
					</div>
				</div>
				<div class='btnSubmitArea' >
					<button class='btnSubmit ' id='btnSubmit'> Submit </button>
				</div>
			
				<div class='btnRollbackArea' >
					<button class='btnRollback ' id='btnRollback'> Back </button>
				</div>
				
				
				<!-- orgs -->
				
			</div>
		</div>
		
	</div>	

	<div class='row-fluid '>
		<div id="SKdataArea"></div>
		<div id="subSKdataArea"></div>
		
		
	</div>
	<div class="clearfix"></div>
	<!-- 
</div>
 -->

<div class="clearfix"></div>
      

