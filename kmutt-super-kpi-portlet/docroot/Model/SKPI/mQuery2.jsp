<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>      
<%
SupperKPIs jndi = new SupperKPIs();

int paramYear = Integer.parseInt(request.getParameter("paramYear"));
String month_id = request.getParameter("month_id");
String org_id = request.getParameter("org_id");
String kpi_id = request.getParameter("kpi_id");

/*
select kpi_id, kpi_code, kpi_name, calendar_year, actual_value, percent_actual_vs_target
from kpi_result
where month_id = 59
and calendar_year between 2559-3 and 2559
and org_id = 1
and parent_kpi_id = 9
order by kpi_code

*/

String query="";
query+="select kpi_id, kpi_code, kpi_name, fiscal_year, kpi_weight, percent_actual_vs_target"; 
query+=" from kpi_result";
query+=" where fiscal_month_no = "+month_id+"";
query+=" and fiscal_year="+paramYear+"";
query+=" and org_id = "+org_id+"";
query+=" and (parent_kpi_id = "+kpi_id+" or kpi_id="+kpi_id+")";
query+=" order by kpi_code";

String culumn="1,2,3,4,5,6";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

//http://localhost:8082/kmutt-super-kpi-portlet/Model/SKPI/mQuery2.jsp?month_id=59&org_id=1&paramYear=2559&kpi_id=9

%>

