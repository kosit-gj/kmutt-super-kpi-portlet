
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String month_id = request.getParameter("month_id");
String org_id = request.getParameter("org_id");
String query="";
/*
select kpi_perspective_id, kpi_code, kpi_name, calendar_type_name, period_name, target_value, kpi_uom_name, 
actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm, has_child
from kpi_result
where month_id = 51
and org_id = 1
order by kpi_code
*/
query+="select kpi_perspective_id, kpi_code, kpi_name, calendar_type_name, period_name, target_value, kpi_uom_name, "; 
query+=" actual_value, percent_actual_vs_target, kpi_weight, percent_wavg, updated_dttm, has_child";
query+=" from kpi_result";
query+=" where month_id = "+month_id+"";
query+=" and org_id = "+org_id+"";
query+=" order by kpi_code";

String culumn="1,2,3,4,5,6,7,8,9,10,11,12,13";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

//example
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiPerspective/mKPI.jsp?month_id=59&org_id=1

%>
