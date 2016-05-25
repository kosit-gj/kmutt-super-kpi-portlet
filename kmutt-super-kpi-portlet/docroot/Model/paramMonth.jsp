
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
/*

select month_id, calendar_month_no, th_month_name 
from sys_month 
where fiscal_year = 2559
order by calendar_month_no 

*/
String fiscal_year = request.getParameter("fiscal_year");
SupperKPIs jndi = new SupperKPIs();
String query="";
query+="select month_id, fiscal_month_no, th_month_name";
query+=" from sys_month";
query+=" where fiscal_year = "+fiscal_year+"";
query+=" order by fiscal_month_no";

jndi.selectByIndexDwh(query, "1,2,3");
out.print(jndi.getData());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/paramMonth.jsp?fiscal_year=2559

%>
