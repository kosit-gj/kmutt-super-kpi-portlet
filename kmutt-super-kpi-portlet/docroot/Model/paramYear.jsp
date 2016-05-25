
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
SupperKPIs jndi = new SupperKPIs();
jndi.selectByIndexDwh("select distinct fiscal_year from kpi_result order by fiscal_year desc", "1");
out.print(jndi.getData());
//http://localhost:8082/kmutt-super-kpi-portlet/Model/paramYear.jsp

%>
