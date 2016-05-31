
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
String paramMonth = request.getParameter("paramMonth");
String paramOrg = request.getParameter("paramOrg");
String paramKPIGroupID = request.getParameter("paramKPIGroupID");
String paramYear = request.getParameter("paramYear");

	//paramMonth="59";
	/*
	paramMonth="59";
	paramOrg="1";
	paramKPIGroupID="2";
	*/
	
	/*
	
	
	select  kpi_group_id, calendar_type_name, period_name, target_value, kpi_uom_name, actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm, has_child from kpi_result 
	where month_id = 59 and org_id = 1
	and kpi_group_id=2
	and parent_kpi_id is  null
	order by kpi_name
	
	
	*/
	
SupperKPIs jndi = new SupperKPIs();
String query="";

query+=" select  kpi_name, calendar_type_name, period_name, target_value, kpi_uom_name, ";
query+=" actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm,";
query+=" has_child,kpi_id,kpi_code,kpi_comment ";
query+=" from kpi_result ";
query+=" where  (";
query+=" calendar_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"' or";
query+=" fiscal_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"' or";
query+=" academic_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"'";
query+=" )";
query+=" and org_id = "+paramOrg+" ";
query+=" and kpi_group_id="+paramKPIGroupID+" ";
query+=" and parent_kpi_id is  null order by kpi_code";

					//["จำนวนนักศึกษาที่มีประสบการณ์วิชาการหรือวิชาชีพในต่างประเทศ (Inbound and Outbound Exchange Student)","ปีปฏิทิน","รายปี","830.00","คน","666.00","80.24","3.00","2.41",null,"0"]
					//            1    ,     2,                 3,           4,             5,            6,           7,                      8,             9,           10,             11
jndi.selectByIndexDwh(query, "1,2,3,4,5,6,7,8,9,10,11,12,13,14");
out.print(jndi.getData());

//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiGolds/kpiGoldsList.jsp?paramMonth=59&paramOrg=1&paramKPIGroupID=2

%>



