
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
String fiscal_year = request.getParameter("fiscal_year");
SupperKPIs jndi = new SupperKPIs();

String query=" select COMMENT from CHART_COMMENT where subject_area_code='184' ";
jndi.selectDB2(query, "1");
out.print(jndi.getDataHTML());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/paramMonth.jsp?fiscal_year=2559

%>
