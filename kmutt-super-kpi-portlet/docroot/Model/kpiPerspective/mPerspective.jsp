
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
String month_id = request.getParameter("month_id");
String org_id = request.getParameter("org_id");
String paramYear = request.getParameter("paramYear");

/*
select kpi_perspective_id, kpi_perspective_name, (sum(percent_wavg)/sum(kpi_weight))*100
from kpi_result
where month_id = 59
and org_id = 1
group by kpi_perspective_id, kpi_perspective_name
*/
String query="";
query+="select kpi_perspective_id, kpi_perspective_name, (sum(percent_wavg)/sum(kpi_weight))*100"; 
query+=" from kpi_result";
query+=" where  (";
query+=" calendar_year = '"+paramYear+"' and th_month_name = '"+month_id+"' or";
query+=" fiscal_year = '"+paramYear+"' and th_month_name = '"+month_id+"' or";
query+=" academic_year = '"+paramYear+"' and th_month_name = '"+month_id+"'";
query+=" )";
query+=" and org_id = "+org_id+"";
query+=" and parent_kpi_id is null";

query+=" group by kpi_perspective_id, kpi_perspective_name";

String culumn="1,2,3";

jndi.selectByIndexDwh(query, culumn);
out.print(jndi.getData());

//example
//http://localhost:8082/kmutt-super-kpi-portlet/Model/kpiPerspective/mPerspective.jsp?month_id=59&org_id=1

%>
