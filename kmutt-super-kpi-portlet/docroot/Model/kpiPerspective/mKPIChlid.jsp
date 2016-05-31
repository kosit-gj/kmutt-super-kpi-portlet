
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String paramMonth = request.getParameter("paramMonth");
String paramOrg = request.getParameter("paramOrg");
String paramKPIID = request.getParameter("paramKPIID");
String paramYear = request.getParameter("paramYear");

String query="";
/*
select kpi_perspective_id, kpi_code, kpi_name, calendar_type_name, period_name, target_value, kpi_uom_name, 
actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm, has_child
from kpi_result
where month_id = 51
and org_id = 1
and kpi_perspective_id=1
and parent_kpi_id =9
order by kpi_code
*/
query+="select kpi_perspective_id, kpi_code, kpi_name, calendar_type_name, period_name, target_value, kpi_uom_name, "; 
query+=" actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm, has_child,kpi_id,kpi_comment";
query+=" from kpi_result";
query+=" where  (";
query+=" calendar_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"' or";
query+=" fiscal_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"' or";
query+=" academic_year = '"+paramYear+"' and th_month_name = '"+paramMonth+"'";
query+=" )";
query+=" and org_id = "+paramOrg+"";
query+=" and parent_kpi_id = "+paramKPIID+"";
query+=" order by kpi_code";

String culumn="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

//example
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiPerspective/mKPIChlid.jsp?paramMonth=59&paramOrg=1&paramKPIID=9
%>
