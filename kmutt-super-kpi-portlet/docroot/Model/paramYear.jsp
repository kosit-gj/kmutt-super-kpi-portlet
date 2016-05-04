
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select distinct calendar_year from kpi_result order by calendar_year desc", "1");
out.print(jndi.getData());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/paramYear.jsp

%>
