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

.aui ul, .aui ol {
    margin: 0;
    padding: 0;
}


    /* Large desktop #####################################*/
    @media (min-width: 1200px) { 
    
    	.aui .row-fluid .span4 {
		    width: 33.33%;
		}
		
		.aui body{
		/*background:red;*/
		}
		
     }
     
     /*  desktop #########################################*/
    @media (min-width: 980px) and (max-width: 1199px) {
    
    	.aui .row-fluid .span4 {
		    width: 49.33%;
		}
		
		
		.aui .paramYearArea .paramYearText{
		width: 20px;
		}
		.aui .paramMonthArea .paramMonthText{
		width: 60px;
		}
		.aui .paramOrgArea .paramOrgText{
		width: 85px;
		}
		.aui .paramOrgArea .paramOrg{
		width: 256px;
		}
		
		
		
		.aui body{
		/*background:#cccccc;*/
		}
		
     }
     
    /* Portrait tablet to landscape and desktop ########################################3*/
    @media (min-width: 768px) and (max-width: 979px) {
    	.aui .portlet-body{
			
		}
		.aui .row-fluid .span4 {
		    width: 49.33%;
		}
		
		.aui .paramYearArea .paramYearText{
		width: 20px;
		}
		.aui .paramMonthArea .paramMonthText{
		width: 60px;
		}
		.aui .paramOrgArea .paramOrgText{
		width: 85px;
		}
		.aui .paramOrgArea .paramOrg{
		width: 256px;
		}
		
		/* sub page start*/
		.goldTitleContent{
		 width: 542px;
		}
		
		
		
		.areaPrev{
			left: -13px;
    		top: 0;
		}
		.areaNext{
			left: 79px;
    		top: -88px
		}
		a.prev>img{
		max-width: 67%;
		}
		a.next>img{
		max-width: 67%;
		}
		.pagecontentSub{
		left: 22px;
		top: -41px;
		}
		
		/* sub page end*/
		
		.aui body{
		/*background:yellow;*/
		}
     }
     
    /* Landscape phone to portrait tablet ############################################*/
    @media (max-width: 767px) { 
   	 	.aui .portlet-body{
			
		}
		.aui .mobile{
			height: 377px;
			border-bottom: 1px dashed #dddddd;
			padding: 12px 5px 5px;
			
		}
		.aui .row-fluid .span4 {
		    width:100%;
		}
		 .aui .boxGraph .contentGraph{
		 	margin: auto;
		 }
		 
		 .aui .paramYearArea .paramYear {
		   /* width: 55%;*/
		}
		.aui .paramMonthArea .paramMonthText{
		 	float: left;
		}
		
		.paramOrgArea .paramOrgText {
			width: 100px;
		}
		
		.paramMonthArea {
			width: 95%;
		}
		.aui .boxGraph .areaGraph {
		    width: 95%;
		    margin-left: 0px;
		}
		
		.aui .paramOrgArea .paramOrgText{
		width: 80px;
		}
		.aui .paramMonthArea .paramMonthText {
		width: 80px;
		}
		.aui .paramYearArea .paramYearText {
		width: 80px;
		}
		.aui .btnSubmitArea {
		margin-left: 88px;
		clear: both;
		}
		
		
		/* subpage start*/
		#spanHead{
		width: 530px;
		}
		
		.goldTitleContent{
		width: 410px;
		
		}
		#Content .panel{
		width: 525px;
		height: 350px;
		}
		#Content{
		margin-top: 10px;
		}
		.barchart{
		height: 216px;
		}
		.aui #btnRollback{
		top: 0px;
		}
		
		.bulletbar{
		width: 370px;
		}
		.bulletbar_result{
		left: 306px;
		}
		
		#pagecontent{
		left: 0px;
		}
		.donutSub{
		height: 170px;
		width: 220px;
		}
		
		
		.areaPrev{
			left: -13px;
    		top: 0;
		}
		.areaNext{
			left: 13px;
    		top: -88px;
		}
		a.prev>img{
		max-width: 36%;
		}
		a.next>img{
		max-width: 36%;
		}
		.pagecontentSub{
		left: 22px;
		top: -41px;
		}
		
		.aui .span12, .aui .row-fluid .span12{
		width:100%;
		}
		/* subpage end*/


		
		.aui body{
		/*background:red;*/
		}
     }
     
    /* Landscape phones and down ###############################################*/
    @media (max-width: 480px) { 
    	.aui .portlet-body{
			
		}
		
		
		.aui .paramOrgArea .paramOrg{
		width: 200px;
		}
		.aui .paramOrgArea .paramOrgText{
		width: 60px;
		}
		.aui .paramMonthArea .paramMonthText {
		width: 60px;
		}
		.aui .paramYearArea .paramYearText {
		width: 60px;
		}
		.aui .btnSubmitArea {
		margin-left: 69px;
		clear: both;
		}
		
		/*sub page start*/
		#Content .panel{
		 /*width: 273px;*/
		 width:90%;
		 height: 320px;
		}
		.bulletbar{
		 width: 110px;
		 margin-right: 2px;
		}
		.bulletbar_result{
		left: 180px;
		}
		#Content .panel .page{
		margin-left: 2px;
		}
		#pagecontent{
		left: 2px;
		}
		
		.goldTitleContent{
			width: 55%;
		}
		#spanHead{
		width: 93%;
		
		}
		.donutSub{
		margin-bottom: 11px;
		}
		.prevvGolds{
			margin-top: 25px;
		}
		.nextGolds{
			margin-top: 25px;
		}
		.aui #btnRollback{
			top: 0px;
		}
		
		.barchart{
		/*width: 202px;*/
		height: 173px;
		}
		#Content .panel .panelTitleChart{
		height: 73px;
		}
		#spanDonut{
		margin-left: -20px;
		}
		
		
		
		.areaPrev{
			left: -13px;
    		top: 0;
		}
		.areaNext{
			left: 13px;
    		top: -88px;
		}
		a.prev>img{
		max-width: 36%;
		}
		a.next>img{
		max-width: 36%;
		}
		.pagecontentSub{
		left: 22px;
		top: -41px;
		}
		/*sub page end*/
		.aui body{
		/*background:yellow;*/
		}
     }
     
</style>


 
<%
/*
String userid = request.getRemoteUser();
out.print("user online="+userid);
*/

/*
if(permissionChecker.isOmniadmin())
       out.println("Admin");
      else
       out.println("Not Admin");

*/
%>

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
						<select id='orgParam' style='width:200px;'>
							
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
			<br style='clear:both'>
		</div>
		
	</div>	

	<div class='row-fluid '>
		<div class='row-fluid ' id="SKdataArea"></div>
		<div id="subSKdataArea"></div>
		
		
	</div>
	<div class="clearfix"></div>
	<!-- 
</div>
 -->

<div class="clearfix"></div>
      

