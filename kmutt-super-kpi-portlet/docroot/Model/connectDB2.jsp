
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
String fiscal_year = request.getParameter("fiscal_year");
SupperKPIs jndi = new SupperKPIs();

String query=" select * from CHART_COMMENT";
jndi.selectDB2(query, "1,2,3,4,5,6,7,8");
out.print(jndi.getData());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/paramMonth.jsp?fiscal_year=2559

%>
