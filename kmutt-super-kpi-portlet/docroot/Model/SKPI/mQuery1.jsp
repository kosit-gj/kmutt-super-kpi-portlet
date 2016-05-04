<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>      
<%
SupperKPIs jndi = new SupperKPIs();

int paramYear = Integer.parseInt(request.getParameter("paramYear"));
String month_id = request.getParameter("month_id");
String org_id = request.getParameter("org_id");

/*
select kpi_id, kpi_code, kpi_name, calendar_year, actual_value, percent_actual_vs_target, has_child
from kpi_result
where month_id = 59
and calendar_year between 2559-3 and 2559
and org_id = 1
and kpi_structure_id = 1
order by kpi_code
*/

String query="";
query+="select kpi_id, kpi_code, kpi_name, calendar_year, actual_value, percent_actual_vs_target, has_child"; 
query+=" from kpi_result";
query+=" where month_id = "+month_id+"";
query+=" and calendar_year between "+(paramYear-3)+" and "+paramYear+"";
query+=" and org_id = "+org_id+"";
query+=" and kpi_structure_id = "+org_id+"";
query+=" order by kpi_code";

String culumn="1,2,3,4,5,6,7";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

//http://localhost:8082/kmutt-super-kpi-portlet/Model/SKPI/mQuery1.jsp?month_id=59&org_id=1&paramYear=2559

%>

