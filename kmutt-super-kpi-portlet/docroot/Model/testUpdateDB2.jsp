
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.test.*" %>   
<%
String comment = request.getParameter("comment");
String update_date = request.getParameter("update_date");
SupperKPIs jndi = new SupperKPIs();

String query=" update chart_comment set comment='"+comment+"' ,UPDATED_DTTM='"+update_date+"'";
query+=" where subject_area_code='184'";
jndi.updateByDB2(query);
out.print(jndi.getData());

//http://localhost:8082/kmutt-super-kpi-portlet/Model/testUpdateDB2.jsp?comment=test4&update_date=2016-06-06 00:00:02

%>
